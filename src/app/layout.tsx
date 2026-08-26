import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareerFlow",
  description:
    "Track job applications, prepare for interviews, and improve your job-search process.",
  applicationName: "CareerFlow",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
  
      <body>
            <Navbar />
        {children}
        </body>
    </html>
  );
}
