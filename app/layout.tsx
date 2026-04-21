import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faceroom — See your people while you work",
  description: "A tiny app that puts a floating strip of live video in the corner of your screen. One tile per person who has the app open. No accounts. No calls to start. Just open it.",
  openGraph: {
    title: "Faceroom — See your people while you work",
    description: "Floating live video presence for Mac and Windows. No accounts. No setup.",
    type: "website",
    url: "https://faceroom.eliaspfeffer.de",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faceroom — See your people while you work",
    description: "Floating live video presence. No accounts. No setup.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
