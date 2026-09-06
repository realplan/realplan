import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("A valid email is required"),
  message: z.string().trim().min(1, "Message is required"),
  phone: z.string().trim().optional().default(""),
  company: z.string().trim().optional().default(""),
  solution: z.string().trim().optional().default(""),
});
