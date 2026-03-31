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
  metadataBase: new URL("https://visionacademy-iota.vercel.app"), // change after custom domain
  title: {
    default: "Vision Academy Home Tutor | Maths & Physics Home Tuition in Vile Parle, Mumbai",
    template: "%s | Vision Academy",
  },
  description:
    "Vision Academy offers expert home tuition classes in Vile Parle, Mumbai. Vishal Sir provides Maths and Physics coaching for 9th, 10th, 11th and 12th students. Book a free demo class today.",
  keywords: [
    "Vision Academy",
    "Vision Academy Home Tutor",
    "Vile Parle home tutor",
    "home tutor in Vile Parle",
    "Maths home tutor in Vile Parle",
    "Physics home tutor in Vile Parle",
    "9th 10th maths tuition in Vile Parle",
    "11th 12th maths physics tuition in Vile Parle",
    "home tuition classes in Vile Parle",
    "private tutor in Vile Parle",
    "Mumbai home tutor",
    "Maths tutor in Mumbai",
    "Physics tutor in Mumbai",
    "Vishal Sir home tutor"
  ],
  authors: [{ name: "Vision Academy" }],
  creator: "Vision Academy",
  publisher: "Vision Academy",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vision Academy Home Tutor | Best Home Tuition in Vile Parle, Mumbai",
    description:
      "Home tuition classes in Vile Parle for Maths and Physics. Vishal Sir teaches 9th, 10th, 11th and 12th students. Book a free demo class.",
    url: "https://visionacademy-iota.vercel.app",
    siteName: "Vision Academy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vision Academy Home Tutor",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Academy Home Tutor",
    description:
      "Maths & Physics home tuition in Vile Parle, Mumbai for 9th, 10th, 11th and 12th students.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="flex min-h-screen flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
        {/* <FloatingChatButton /> */}
      </body>
    </html>
  );
}