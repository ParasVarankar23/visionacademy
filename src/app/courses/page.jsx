import Courses from "@/components/courses/CoursePage";

export const metadata = {
    metadataBase: new URL("https://visionacademy-iota.vercel.app"),
    title: "Courses | Maths & Physics Coaching in Vile Parle | Vision Academy",
    description:
        "Explore Vision Academy courses in Vile Parle, Mumbai. Expert coaching and home tuition for 9th, 10th, 11th and 12th students in Maths and Physics by Vishal Sir.",
    keywords: [
        "Vision Academy courses",
        "maths coaching in vile parle",
        "physics coaching in vile parle",
        "9th 10th maths classes vile parle",
        "11th 12th maths physics classes vile parle",
        "home tuition courses vile parle",
        "coaching classes in vile parle",
        "maths tuition mumbai",
        "physics tuition mumbai",
        "Vishal Sir classes",
    ],
    alternates: {
        canonical: "/courses",
    },
    openGraph: {
        title: "Courses | Maths & Physics Coaching in Vile Parle | Vision Academy",
        description:
            "Explore Maths & Physics coaching courses at Vision Academy in Vile Parle, Mumbai for 9th to 12th students.",
        url: "https://visionacademy-iota.vercel.app/courses",
        siteName: "Vision Academy",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Vision Academy Courses - Maths & Physics Coaching",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Courses | Vision Academy",
        description:
            "Maths & Physics coaching and home tuition courses in Vile Parle, Mumbai.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Page() {
    const coursesPageSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Vision Academy Courses",
        url: "https://visionacademy-iota.vercel.app/courses",
        description:
            "Courses offered by Vision Academy in Vile Parle, Mumbai for 9th, 10th, 11th and 12th students in Maths and Physics.",
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />

            <main className="bg-white">
                <Courses />
            </main>
        </>
    );
}