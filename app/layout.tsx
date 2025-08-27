import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Xanh_Mono,
  Oswald,
  Manrope,
  Poller_One,
} from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const XanhMono = Xanh_Mono({
  variable: "--font-xanh-mono",
  subsets: ["vietnamese", "latin", "latin-ext"],
  weight: "400",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const pollerOne = Poller_One({
  variable: "--font-poller-one",
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minh Phi",
  description: "Minh Phi",
  openGraph: {
    title: "Minh Phi",
    description: "Minh Phi",
    url: "https://minhphi.vn",
    images: [
      {
        url: "https://hiden-live-space.s3.ap-southeast-1.amazonaws.com/minhphi.jpg",
        secureUrl:
          "https://hiden-live-space.s3.ap-southeast-1.amazonaws.com/minhphi.jpg",
        width: 630,
        height: 630,
        alt: "Preview image for Oh Art",
      },
    ],
    type: "website",
    siteName: "Minh Phi",
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
        className={`${pollerOne.variable} ${geistSans.variable} ${geistMono.variable} ${XanhMono.variable} ${oswald.variable} ${manrope.variable} antialiased`}
      >
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
