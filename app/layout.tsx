// app/layout.tsx
import "./globals.css";
import { DM_Sans, Manrope } from "next/font/google";
import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  icons: {
    icon: "/rural-technologies-logo.png",
    shortcut: "/rural-technologies-logo.png",
    apple: "/rural-technologies-logo.png",
  },
  title: "RURAL Technologies",
   description: "Building technology for rural and underserved communities."
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});


const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable} dark`}>
      <body className="bg-background text-foreground antialiased overflow-x-hidden">
        <SmoothScroll> {children} </SmoothScroll>
      </body>
    </html>
  );
}
