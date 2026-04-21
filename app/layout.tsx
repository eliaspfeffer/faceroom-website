import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://faceroom.eliaspfeffer.de"),
  title: {
    default: "Faceroom — Stop Feeling Lonely While Working From Home",
    template: "%s | Faceroom",
  },
  description:
    "Faceroom puts a tiny floating video strip in the corner of your screen so you can see your friends or team while you work. No calls. No accounts. Just open it and feel less alone.",
  keywords: [
    "feel less lonely working from home",
    "remote work loneliness",
    "stay connected while working",
    "always on video with friends",
    "floating video presence app",
    "ambient video chat",
    "see friends while working",
    "work from home connection",
    "remote team presence",
    "virtual co-working",
    "always on camera app mac",
    "video presence mac windows",
    "walkie talkie video app",
  ],
  authors: [{ name: "Elias Pfeffer", url: "https://eliaspfeffer.de" }],
  creator: "Elias Pfeffer",
  openGraph: {
    title: "Faceroom — Stop Feeling Lonely While Working From Home",
    description:
      "A floating strip of live video in the corner of your screen. See your friends or team while you work. No accounts. No calls to start. Just open it.",
    type: "website",
    url: "https://faceroom.eliaspfeffer.de",
    siteName: "Faceroom",
    images: [
      {
        url: "/screenshot.png",
        width: 560,
        alt: "Faceroom floating video strip showing four people",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faceroom — Stop Feeling Lonely While Working From Home",
    description:
      "Floating live video presence for Mac and Windows. See your people while you work. No accounts, no setup.",
    images: ["/screenshot.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://faceroom.eliaspfeffer.de",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Faceroom",
              applicationCategory: "CommunicationApplication",
              operatingSystem: "macOS, Windows",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              description:
                "A floating strip of live video in the corner of your screen. See your friends or team while you work. Perfect for remote workers who feel lonely or isolated working from home.",
              url: "https://faceroom.eliaspfeffer.de",
              downloadUrl:
                "https://github.com/eliaspfeffer/faceroom/releases/latest/download/Faceroom.zip",
              softwareVersion: "1.0",
              author: {
                "@type": "Person",
                name: "Elias Pfeffer",
                url: "https://eliaspfeffer.de",
              },
              screenshot: "https://faceroom.eliaspfeffer.de/screenshot.png",
              featureList: [
                "Always-on floating video presence",
                "No account required",
                "Walkie-talkie push-to-talk audio",
                "Works on Mac and Windows",
                "Zero setup",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
