import "~/styles/globals.css";

import { Poppins } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "somafet",
  description: "Personal portfolio of Soma Somorjai :)",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          `font-sans ${poppins.variable}`,
          "bg-gradient-to-b from-[#21255b] to-[#15162c]",
        )}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
