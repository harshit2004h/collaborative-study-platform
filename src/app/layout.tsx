import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FocusRoom - Collaborative Study Platform",
  description:
    "A web-based study platform with video calls, real-time collaboration, chat, notes, whiteboard, and a user rating system for productive learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
