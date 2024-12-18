import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TopBar } from "@/components/top-bar";
import { ActivityBar } from "@/components/activity-bar";
import { SideBar } from "@/components/side-bar";
import { StatusBar } from "@/components/status-bar";
import { MainContent } from "@/components/main-content";

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
      <body className={`${menloRegular.variable} antialiased`}>
        <div className="h-screen flex flex-col bg-background text-foreground">
          <TopBar />
          <div className="flex-1 flex overflow-hidden">
            <ActivityBar />
            <SideBar />
            <MainContent>{children}</MainContent>
          </div>
          <StatusBar />
        </div>
      </body>
    </html>
  );
}
