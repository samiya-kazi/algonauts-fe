// pages/_app.js or _app.tsx (if using TypeScript)
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import Navbar from "@/components/shared/Navbar";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Algonauts",
  description: " Kids can play games! Waster their childhood with coding ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${nunito.className} `}>
          <Navbar />
          {children}
        </body>
      </html>
    </Providers>
  );
}