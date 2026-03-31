import BookDemo from "@/components/book-demo/BookDemo";

export const metadata = {
    metadataBase: new URL("https://visionacademy-iota.vercel.app"),
    title: "Book Free Demo Class | Vision Academy | Home Tutor in Vile Parle",
    description:
        "Book a free demo class with Vision Academy in Vile Parle, Mumbai. Personalized home tuition and coaching for 9th, 10th, 11th and 12th students in Maths and Physics by Vishal Sir.",
    keywords: [
        "book free demo class",
        "book demo class vile parle",
        "free demo home tuition vile parle",
        "home tutor demo class mumbai",
        "maths tuition free demo",
        "physics tuition free demo",
        "Vision Academy demo class",
        "Vishal Sir demo class",
        "home tuition in vile parle",
        "best home tutor in vile parle",
    ],
    alternates: {
        canonical: "/book-demo",
    },
    openGraph: {
        title: "Book Free Demo Class | Vision Academy | Home Tutor in Vile Parle",
        description:
            "Book a free demo class for Maths & Physics home tuition in Vile Parle, Mumbai with Vision Academy and Vishal Sir.",
        url: "https://visionacademy-iota.vercel.app/book-demo",
        siteName: "Vision Academy",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Book Free Demo Class - Vision Academy",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Book Free Demo Class | Vision Academy",
        description:
            "Book a free demo class for Maths & Physics tuition in Vile Parle, Mumbai.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Page() {
    const demoPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Book Free Demo Class",
        url: "https://visionacademy-iota.vercel.app/book-demo",
        description:
            "Book a free demo class with Vision Academy in Vile Parle, Mumbai for 9th, 10th, 11th and 12th students in Maths and Physics.",
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(demoPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />

            <main className="bg-white">
                <BookDemo />
            </main>
        </>
    );
}