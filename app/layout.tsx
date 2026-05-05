import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "twentytwo | Social-first Video",
  description:
    "twentytwo hjælper brands med short-form video, content-strategi og social-first formater, der føles naturlige i feedet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="da"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
