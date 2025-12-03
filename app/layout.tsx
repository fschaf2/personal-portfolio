import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import ChatWidgetHost from "./components/ChatWidgetHost";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felix Schafer | Portfolio",
  description:
    "Portfolio of Felix Schafer - creating clean software, AI tools, and interactive experiences.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen bg-gradient-to-br from-[#f7f2ff] via-[#fdf7ec] to-[#ece3ff] text-slate-900 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.09),transparent_26%),radial-gradient(circle_at_80%_0%,rgba(246,195,68,0.12),transparent_26%),radial-gradient(circle_at_70%_70%,rgba(47,27,82,0.14),transparent_30%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0.5)_60%,rgba(255,255,255,0)_100%)] mix-blend-soft-light opacity-60" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[size:140px_140px] opacity-25" />
          </div>
          <NavBar />
          {children}
          <ChatWidgetHost />
        </div>
      </body>
    </html>
  );
}
