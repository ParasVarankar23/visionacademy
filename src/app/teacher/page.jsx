import TeacherPage from "@/components/teacher/TeacherPage";

export const metadata = {
  metadataBase: new URL("https://visionacademy-iota.vercel.app"),
  title: "Meet Vishal Sir | Best Maths & Physics Teacher in Vile Parle | Vision Academy",
  description:
    "Meet Vishal Sir at Vision Academy. Experienced Maths and Physics teacher providing home tuition and coaching in Vile Parle, Mumbai for 9th, 10th, 11th and 12th students.",
  keywords: [
    "Vishal Sir",
    "Vision Academy teacher",
    "best maths teacher in vile parle",
    "best physics teacher in vile parle",
    "home tutor teacher in vile parle",
    "maths tutor Vishal Sir",
    "physics tutor Vishal Sir",
    "teacher profile Vision Academy",
    "home tuition teacher mumbai",
    "Vile Parle tutor",
  ],
  alternates: {
    canonical: "/teacher",
  },
  openGraph: {
    title: "Meet Vishal Sir | Best Maths & Physics Teacher in Vile Parle | Vision Academy",
    description:
      "Learn more about Vishal Sir, expert Maths & Physics teacher at Vision Academy in Vile Parle, Mumbai.",
    url: "https://visionacademy-iota.vercel.app/teacher",
    siteName: "Vision Academy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vishal Sir - Vision Academy Teacher",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Vishal Sir | Vision Academy",
    description:
      "Experienced Maths & Physics teacher in Vile Parle, Mumbai for 9th to 12th students.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const teacherPageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Vishal Sir - Vision Academy Teacher",
    url: "https://visionacademy-iota.vercel.app/teacher",
    description:
      "Profile page for Vishal Sir, experienced Maths and Physics teacher at Vision Academy in Vile Parle, Mumbai.",
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vishal Sir",
    jobTitle: "Maths and Physics Teacher",
    worksFor: {
      "@type": "EducationalOrganization",
      name: "Vision Academy",
    },
    description:
      "Experienced Maths and Physics teacher providing home tuition and coaching in Vile Parle, Mumbai for 9th, 10th, 11th and 12th students.",
  };

  const organizationSchema = {
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

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teacherPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main className="bg-white">
        <TeacherPage />
      </main>
    </>
  );
}