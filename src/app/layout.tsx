import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CocoClassy — Pilates with a pulse. Juice with a purpose.",
  description:
    "A women's Pilates lab and cold-pressed juice bar. Reformer classes capped at twelve. Juice pressed this morning. Studios in Sandton, Sea Point, and Stellenbosch.",
  openGraph: {
    title: "CocoClassy — Pilates with a pulse. Juice with a purpose.",
    description:
      "A women's Pilates lab and cold-pressed juice bar. Reformer classes capped at twelve. Juice pressed this morning.",
    type: "website",
    locale: "en_ZA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
