import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import WhyChooseSection from "@/components/about/WhyChooseSection";
import TeachingApproach from "@/components/about/TeachingApproach";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
    metadataBase: new URL("https://visionacademy-iota.vercel.app"),
    title: "About Vision Academy | Best Home Tutor in Vile Parle, Mumbai",
    description:
        "Learn more about Vision Academy and Vishal Sir. We provide personalized home tuition and coaching in Vile Parle, Mumbai for 9th, 10th, 11th and 12th students in Maths and Physics.",
    keywords: [
        "about Vision Academy",
        "Vishal Sir",
        "best home tutor in vile parle",
        "home tuition in vile parle",
        "maths tutor in vile parle",
        "physics tutor in vile parle",
        "coaching classes in vile parle",
        "home tutor in mumbai",
        "Vision Academy Mumbai",
        "Vile Parle tuition classes",
    ],
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Vision Academy | Best Home Tutor in Vile Parle, Mumbai",
        description:
            "Know more about Vision Academy and Vishal Sir. Expert home tuition and coaching in Vile Parle, Mumbai for 9th to 12th students.",
        url: "https://visionacademy-iota.vercel.app/about",
        siteName: "Vision Academy",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "About Vision Academy - Home Tutor in Vile Parle",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Vision Academy | Home Tutor in Vile Parle",
        description:
            "Learn about Vision Academy and Vishal Sir. Personalized Maths & Physics coaching in Vile Parle, Mumbai.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function AboutPage() {
    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Vision Academy",
        url: "https://visionacademy-iota.vercel.app/about",
        description:
            "About Vision Academy and Vishal Sir. Personalized home tuition and coaching in Vile Parle, Mumbai for 9th, 10th, 11th and 12th students in Maths and Physics.",
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />

            <main className="bg-white">
                <AboutHero />
                <AboutIntro />
                <WhyChooseSection />
                <TeachingApproach />
                <AboutCTA />
            </main>
        </>
    );
}