import "~/styles/globals.css";

import { Poppins } from "next/font/google";

import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react";
import { type Metadata } from "next/types";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://somafet.com"),
  title: {
    template: "%s | Soma Somorjai",
    default: "Somafet | Soma Somorjai",
  },
  description: "Personal portfolio of Soma Somorjai :)",
  keywords: [
    "somafet",
    "soma",
    "somorjai",
    "soma somorjai",
    "personal portfolio",
    "portfolio",
    "web development",
    "full stack",
    "full stack web development",
    "full stack web developer",
    "web developer",
    "web development portfolio",
  ],
  applicationName: "Somafet",
  robots: "index, follow",
  authors: [{ name: "Soma Somorjai", url: "https://somafet.com" }],
  openGraph: {
    type: "website",
    url: "https://somafet.com",
    title: "Somafet | Soma Somorjai",
    description: "Personal portfolio of Soma Somorjai :)",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          `font-sans ${poppins.variable}`,
          "bg-gradient-to-b from-[#21255b] to-[#15162c]",
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
