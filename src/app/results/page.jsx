import ResultsSection from "@/components/result/ResultPage";

export const metadata = {
    metadataBase: new URL("https://visionacademy-iota.vercel.app"),
    title: "Student Results | Vision Academy | Maths & Physics Tuition in Vile Parle",
    description:
        "View student results and academic performance at Vision Academy. Trusted home tuition and coaching in Vile Parle, Mumbai for 9th, 10th, 11th and 12th Maths & Physics by Vishal Sir.",
    keywords: [
        "Vision Academy results",
        "student results Vision Academy",
        "maths tuition results vile parle",
        "physics tuition results vile parle",
        "best home tutor in vile parle results",
        "coaching results vile parle",
        "9th 10th maths results",
        "11th 12th maths physics results",
        "home tuition results mumbai",
        "Vishal Sir results",
    ],
    alternates: {
        canonical: "/results",
    },
    openGraph: {
        title: "Student Results | Vision Academy | Maths & Physics Tuition in Vile Parle",
        description:
            "See student results and academic performance at Vision Academy in Vile Parle, Mumbai for 9th to 12th Maths & Physics coaching.",
        url: "https://visionacademy-iota.vercel.app/results",
        siteName: "Vision Academy",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Vision Academy Student Results",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Student Results | Vision Academy",
        description:
            "View student results for Maths & Physics coaching in Vile Parle, Mumbai.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Page() {
    const resultsPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Vision Academy Student Results",
        url: "https://visionacademy-iota.vercel.app/results",
        description:
            "Student results and academic performance at Vision Academy in Vile Parle, Mumbai for 9th, 10th, 11th and 12th students in Maths and Physics.",
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(resultsPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />

            <main className="bg-white">
                <ResultsSection />
            </main>
        </>
    );
}