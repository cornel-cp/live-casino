import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./fontawesome";
import LoadingWrapper from "./loading";
import Script from "next/script";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "M8Trix Casino",
  description: "M8Trix Casino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Replace with your GA4 Measurement ID */}
        <Script
          id="ga4"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-TXBRCD6JXR`}
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TXBRCD6JXR', { send_page_view: true });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased min-w-screen m-auto`}
      >
        <LoadingWrapper>
          <div className="max-w-screen m-auto">{children}</div>
        </LoadingWrapper>
      </body>
    </html>
  );
}
