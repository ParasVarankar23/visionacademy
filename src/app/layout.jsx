import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import FloatingChatButton from "@/components/FloatingChatButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vision Academy",
  description: "Maths, Physics & Science Coaching Classes in Mumbai",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="flex min-h-screen flex-col bg-white text-gray-900">
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        <Footer />

        {/* Global Components */}
        <CookieConsent />
        <FloatingChatButton />
      </body>
    </html>
  );
}