import ContactPage from "@/components/contact/ContactForm";

export const metadata = {
    metadataBase: new URL("https://visionacademy-iota.vercel.app"),
    title: "Contact Vision Academy | Best Home Tutor in Vile Parle, Mumbai",
    description:
        "Contact Vision Academy for home tuition and coaching in Vile Parle, Mumbai. Book a free demo class for 9th, 10th, 11th and 12th Maths & Physics with Vishal Sir.",
    keywords: [
        "contact Vision Academy",
        "Vision Academy contact",
        "home tutor contact vile parle",
        "best home tutor in vile parle",
        "maths tutor contact vile parle",
        "physics tutor contact vile parle",
        "book free demo vile parle",
        "home tuition contact mumbai",
        "Vishal Sir contact",
        "Vision Academy Vile Parle",
    ],
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact Vision Academy | Best Home Tutor in Vile Parle, Mumbai",
        description:
            "Get in touch with Vision Academy for home tuition in Vile Parle, Mumbai. Book a free demo for 9th to 12th Maths & Physics coaching.",
        url: "https://visionacademy-iota.vercel.app/contact",
        siteName: "Vision Academy",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Contact Vision Academy - Home Tutor in Vile Parle",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Vision Academy | Home Tutor in Vile Parle",
        description:
            "Contact Vision Academy for Maths & Physics home tuition in Vile Parle, Mumbai.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Page() {
    const contactPageSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Vision Academy",
        url: "https://visionacademy-iota.vercel.app/contact",
        description:
            "Contact Vision Academy for home tuition and coaching in Vile Parle, Mumbai for 9th, 10th, 11th and 12th students in Maths and Physics.",
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
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91 8097253596",
            contactType: "customer support",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi", "Marathi"],
        },
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />

            <main className="bg-white">
                <ContactPage />
            </main>
        </>
    );
}