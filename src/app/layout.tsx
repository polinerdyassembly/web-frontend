import "./globals.css";

import type { Metadata } from "next";

import { inter } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Polinerdy Assembly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
