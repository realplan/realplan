import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppFab } from "@/components/shared";
import "./polyfill";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Real Plan",
  description:
    "Real Plan is a leading market research and consulting platform delivering actionable insights for businesses.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body
        className={`${geistMono.variable} antialiased`}
        style={{
          fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
        }}
      >
        <div className="page-container">
          {children}
          <WhatsAppFab />
        </div>
      </body>
    </html>
  );
}
