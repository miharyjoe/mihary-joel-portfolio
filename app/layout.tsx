import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const menloRegular = localFont({
  src: "./fonts/Menlo-Regular.ttf",
  variable: "--font-menlo-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mihary joel ANDRIAMILANTO - Portfolio",
  description: "A Portfolio of Mihary joel ANDRIAMILANTO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${menloRegular.variable} antialiased`}>{children}</body>
    </html>
  );
}
