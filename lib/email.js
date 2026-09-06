import nodemailer from "nodemailer";

const smtpHost = "smtpout.secureserver.net";
const smtpPort = 465;
const smtpUser = process.env.EMAIL;
const smtpPass = process.env.EMAIL_PASSWORD;
const senderEmail = process.env.EMAIL;
const adminEmails = [
  "connect@realplan.in",
  "vinoth@realplan.in",
  "kasyap@realplan.in"
];

function getTransporter() {
  if (!smtpUser || !smtpPass || !senderEmail) {
    throw new Error("SMTP credentials are not fully configured");
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
}

function formatContactSummary(contact) {
  return [
    "",
    `Name: ${contact.name}`,
    `Email: ${contact.email}`,
    `Phone: ${contact.phone || "Not provided"}`,
    `Company: ${contact.company || "Not provided"}`,
    `Solution: ${contact.solution || "Not provided"}`,
    "",
    "Message:",
    contact.message,
  ].join("\n");
}

export async function sendContactEmail(contact) {
  const transporter = getTransporter();

  await transporter.sendMail({
    from: senderEmail,
    to: adminEmails,
    subject: `New contact enquiry from ${contact.name}`,
    text: formatContactSummary(contact),
  });
}
