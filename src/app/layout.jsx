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
  metadataBase: new URL("https://visionacademy-iota.vercel.app"),

  title: {
    default: "Vision Academy | Best Home Tutor in Vile Parle, Mumbai",
    template: "%s | Vision Academy",
  },

  description:
    "Vision Academy provides expert home tuition and coaching in Vile Parle, Mumbai for 9th, 10th, 11th and 12th students. Maths and Physics guidance by Vishal Sir.",

  keywords: [
    "Vision Academy",
    "best home tutor in vile parle",
    "home tuition in vile parle",
    "maths tutor in vile parle",
    "physics tutor in vile parle",
    "home tutor in mumbai",
    "maths coaching in vile parle",
    "physics coaching in vile parle",
    "9th 10th maths tuition vile parle",
    "11th 12th maths physics tuition vile parle",
    "Vishal Sir",
    "coaching classes in vile parle",
    "book free demo class",
  ],

  applicationName: "Vision Academy",
  creator: "Vision Academy",
  publisher: "Vision Academy",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "googlee77992bdd57357c6",
  },

  openGraph: {
    title: "Vision Academy | Best Home Tutor in Vile Parle, Mumbai",
    description:
      "Expert home tuition and coaching in Vile Parle, Mumbai for 9th, 10th, 11th and 12th students. Maths and Physics guidance by Vishal Sir.",
    url: "https://visionacademy-iota.vercel.app",
    siteName: "Vision Academy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vision Academy - Best Home Tutor in Vile Parle, Mumbai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vision Academy | Best Home Tutor in Vile Parle, Mumbai",
    description:
      "Maths & Physics home tuition in Vile Parle, Mumbai for 9th to 12th students by Vishal Sir.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "education",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#172554",
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
        {/* <FloatingChatButton /> */}
      </body>
    </html>
  );
}