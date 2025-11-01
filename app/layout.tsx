import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./fontawesome";
import Head from "next/head";
import Link from "next/link";
import Loading from "./loading";
import LoadingWrapper from "./loading";

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
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
      <Head>
        {/* Link to Google Fonts */}
        <Link href="/assets/fonts/big_noodle_titling.ttf" rel="stylesheet" />
      </Head>
      <body
        className={`antialiased min-w-screen m-auto`}
      >
        <LoadingWrapper>

        <div className="max-w-screen m-auto">{children}</div>
        </LoadingWrapper>
      </body>
    </html>
  );
}
