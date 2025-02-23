import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "WebSync",
  description: "A collection of beautiful websites. ✨🚀 ",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://WebSync.vercel.app",
  
    images: [
      {
        url: "https://WebSync.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "WebSync",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/ico" href="/favicon.png" />
      </head>
      <body
        className={`${poppins.className} antialiased ` }
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
