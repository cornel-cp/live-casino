import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./fontawesome";
import LoadingWrapper from "./loading";

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
