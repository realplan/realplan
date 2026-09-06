export const metadata = {
  title: "Real Plan Backend",
  description: "Next.js API backend for contact enquiries",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
