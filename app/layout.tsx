import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TopBar } from "@/components/top-bar";
import { ActivityBar } from "@/components/activity-bar";
import { SideBar } from "@/components/side-bar";
import { StatusBar } from "@/components/status-bar";
import { MainContent } from "@/components/main-content";
import { ThemeProvider } from "@/lib/theme-provider";

const jetBrainsMono = localFont({
  src: [
    {
      path: "./fonts/JetBrainsMono-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/JetBrainsMono-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/JetBrainsMono-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/JetBrainsMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/JetBrainsMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/JetBrainsMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/JetBrainsMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/JetBrainsMono-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/JetBrainsMono-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/JetBrainsMono-ExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/JetBrainsMono-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/JetBrainsMono-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/JetBrainsMono-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/JetBrainsMono-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/JetBrainsMono-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/JetBrainsMono-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-jetbrains-mono",
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
    <html lang="en" className={`${jetBrainsMono.variable} antialiased`}>
      <body>
        <ThemeProvider defaultTheme="slate" defaultDark={false}>
          <div className="h-screen flex flex-col bg-background text-foreground">
            <TopBar />
            <div className="flex-1 flex overflow-hidden">
              <ActivityBar />
              <SideBar />
              <MainContent>{children}</MainContent>
            </div>
            <StatusBar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
