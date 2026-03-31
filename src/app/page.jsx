import HeroSection from "@/components/home/HeroSection";
import SubjectsSection from "@/components/home/SubjectsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HomeTuitionSection from "@/components/home/HomeTuitionSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ServiceAreasSection from "@/components/home/ServiceAreasSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = {
  metadataBase: new URL("https://visionacademy-iota.vercel.app"),
  title:
    "Best Home Tutor in Vile Parle, Mumbai | Maths & Physics Coaching | Vision Academy",
  description:
    "Vision Academy provides the best home tuition in Vile Parle, Mumbai for 9th, 10th, 11th and 12th students. Expert coaching in Maths and Physics by Vishal Sir. Book a free demo class today.",
  keywords: [
    "vile parle home tutor",
    "best home tutor in vile parle",
    "home tuition in vile parle",
    "maths tutor in vile parle",
    "physics tutor in vile parle",
    "home tutor in mumbai",
    "maths coaching in vile parle",
    "physics coaching in vile parle",
    "9th 10th maths tuition vile parle",
    "11th 12th maths physics tuition vile parle",
    "Vision Academy",
    "Vishal Sir",
    "home tuition mumbai",
    "coaching classes in vile parle",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Best Home Tutor in Vile Parle, Mumbai | Maths & Physics Coaching | Vision Academy",
    description:
      "Expert home tuition in Vile Parle, Mumbai for 9th, 10th, 11th and 12th students. Maths and Physics coaching by Vishal Sir at Vision Academy.",
    url: "https://visionacademy-iota.vercel.app",
    siteName: "Vision Academy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vision Academy - Best Home Tutor in Vile Parle",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Academy | Best Home Tutor in Vile Parle, Mumbai",
    description:
      "Maths & Physics home tuition in Vile Parle for 9th to 12th students by Vishal Sir.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Vision Academy",
    url: "https://visionacademy-iota.vercel.app",
    logo: "https://visionacademy-iota.vercel.app/og-image.jpg",
    image: "https://visionacademy-iota.vercel.app/og-image.jpg",
    telephone: "+91 8097253596",
    email: "visionacademy@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vile Parle",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    areaServed: [
      "Vile Parle",
      "Andheri",
      "Santacruz",
      "Juhu",
      "Dadar",
      "Mumbai",
    ],
    description:
      "Vision Academy provides home tuition and coaching for 9th, 10th, 11th and 12th students in Vile Parle, Mumbai. Maths and Physics guidance by Vishal Sir.",
    sameAs: [
      "https://www.instagram.com/visionacademyhometutor",
      "https://www.facebook.com/visionacademyhometutor",
      "https://www.youtube.com/@visionacademyhometutor",
      "https://wa.me/918097253596",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you provide home tuition in Vile Parle?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Vision Academy provides home tuition in Vile Parle for 9th, 10th, 11th and 12th students depending on schedule and availability.",
        },
      },
      {
        "@type": "Question",
        name: "Which subjects do you teach?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We teach 9th and 10th Maths, and 11th and 12th Maths and Physics.",
        },
      },
      {
        "@type": "Question",
        name: "Who teaches the students at Vision Academy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vishal Sir provides personalized guidance with strong concept clarity, regular practice and board exam preparation.",
        },
      },
      {
        "@type": "Question",
        name: "Can I book a free demo class?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can book a free demo class through the Book Demo page or contact Vision Academy directly.",
        },
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        <HeroSection />
        <SubjectsSection />
        <WhyChooseUs />
        <HomeTuitionSection />
        <TestimonialsSection />
        <ServiceAreasSection />
        <FinalCTA />
      </main>
    </>
  );
}