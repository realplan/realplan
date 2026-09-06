import { NextResponse } from "next/server";

import { sendContactEmail } from "@/lib/email";
import { contactSchema } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.CORS_ORIGIN || "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

function withCors(response) {
  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export async function OPTIONS() {
  return withCors(new NextResponse(null, { status: 204 }));
}

export async function GET() {
  return withCors(
    NextResponse.json(
      { success: false, error: "Method not allowed" },
      { status: 405 }
    )
  );
}

export async function POST(request) {
  try {
    const body = await request.json();
    const payload = contactSchema.parse(body);
    await sendContactEmail(payload);

    return withCors(NextResponse.json({ success: true }, { status: 201 }));
  } catch (error) {
    console.error("Failed to submit contact request", error);

    if (error?.name === "ZodError") {
      return withCors(
        NextResponse.json(
          {
            success: false,
            error: "Invalid request body",
            details: error.flatten(),
          },
          { status: 400 }
        )
      );
    }

    if (error instanceof SyntaxError) {
      return withCors(
        NextResponse.json(
          { success: false, error: "Request body must be valid JSON" },
          { status: 400 }
        )
      );
    }

    return withCors(
      NextResponse.json({ success: false }, { status: 500 })
    );
  }
}
