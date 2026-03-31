import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin, BookOpen } from "lucide-react";

export const metadata = {
    metadataBase: new URL("https://visionacademy-iota.vercel.app"),
    title: "Best Home Tutor in Vile Parle | Maths & Physics Tuition | Vision Academy",
    description:
        "Looking for the best home tutor in Vile Parle? Vision Academy offers expert home tuition in Vile Parle, Mumbai for 9th, 10th, 11th and 12th students. Maths and Physics by Vishal Sir.",
    keywords: [
        "vile parle home tutor",
        "home tutor in vile parle",
        "best home tutor in vile parle",
        "maths tutor in vile parle",
        "physics tutor in vile parle",
        "9th 10th maths tuition vile parle",
        "11th 12th maths physics tuition vile parle",
        "vile parle tuition classes",
        "home tuition in vile parle mumbai",
        "Vision Academy Vile Parle",
        "Vishal Sir home tutor",
    ],
    alternates: {
        canonical: "/vile-parle-home-tutor",
    },
    openGraph: {
        title: "Best Home Tutor in Vile Parle | Vision Academy",
        description:
            "Expert home tuition in Vile Parle for 9th, 10th, 11th and 12th students. Maths and Physics coaching by Vishal Sir.",
        url: "https://visionacademy-iota.vercel.app/vile-parle-home-tutor",
        siteName: "Vision Academy",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Vision Academy - Home Tutor in Vile Parle",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Home Tutor in Vile Parle | Vision Academy",
        description:
            "Maths & Physics home tuition in Vile Parle for 9th to 12th students by Vishal Sir.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function VileParleHomeTutorPage() {
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
                name: "Which subjects do you teach in Vile Parle?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We provide 9th and 10th Maths tuition, and 11th and 12th Maths and Physics tuition in Vile Parle.",
                },
            },
            {
                "@type": "Question",
                name: "Who teaches at Vision Academy?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Vishal Sir provides personalized guidance with concept clarity, board preparation, regular practice and doubt solving.",
                },
            },
            {
                "@type": "Question",
                name: "Can I book a free demo class?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can book a free demo class through the Book Demo page or call directly on +91 80972 53596.",
                },
            },
        ],
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "Vision Academy",
        url: "https://visionacademy-iota.vercel.app/vile-parle-home-tutor",
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
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

            <main className="bg-white text-gray-900">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-blue-50 via-white to-amber-50 py-5 md:py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            {/* Left */}
                            <div>
                                <p className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
                                    <MapPin className="w-4 h-4" />
                                    Home Tutor in Vile Parle
                                </p>

                                <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-950 leading-tight">
                                    Best Home Tutor in Vile Parle for{" "}
                                    <span className="text-amber-500">Maths & Physics</span>
                                </h1>

                                <p className="mt-5 text-base sm:text-lg leading-8 text-gray-700 max-w-2xl">
                                    Looking for a reliable and result-oriented home tutor in Vile
                                    Parle? Vision Academy provides personalized home tuition in
                                    Vile Parle, Mumbai for students of
                                    <span className="font-semibold text-blue-900">
                                        {" "}
                                        9th, 10th, 11th and 12th
                                    </span>
                                    . Vishal Sir offers expert teaching for
                                    <span className="font-semibold text-blue-900">
                                        {" "}
                                        9th & 10th Maths
                                    </span>{" "}
                                    and
                                    <span className="font-semibold text-blue-900">
                                        {" "}
                                        11th & 12th Maths & Physics
                                    </span>
                                    , with strong focus on concept clarity, board exam preparation,
                                    doubt solving and regular practice.
                                </p>

                                <div className="mt-8 grid sm:grid-cols-2 gap-3 max-w-2xl">
                                    {[
                                        "1-to-1 home tuition in Vile Parle",
                                        "Small batch coaching available",
                                        "Board exam focused preparation",
                                        "Weekly tests & progress tracking",
                                        "Concept clarity & doubt solving",
                                        "Flexible timings available",
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/book-demo"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-amber-500 text-white font-semibold hover:bg-amber-600 transition"
                                    >
                                        Book Free Demo
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>

                                    <a
                                        href="tel:+918097253596"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-blue-200 bg-white text-blue-900 font-semibold hover:bg-blue-50 transition"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call Now
                                    </a>
                                </div>
                            </div>

                            {/* Right Card */}
                            <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-6 sm:p-8">
                                <div className="rounded-3xl bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6 sm:p-8">
                                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
                                        <BookOpen className="w-4 h-4" />
                                        Vision Academy • Vishal Sir
                                    </div>

                                    <h2 className="mt-5 text-2xl sm:text-3xl font-bold leading-tight">
                                        Tuition Support in Vile Parle for School Students
                                    </h2>

                                    <p className="mt-4 text-blue-100 leading-7">
                                        Personalized teaching with strong academic support for
                                        students who want better marks, better understanding and
                                        better confidence in school exams and board exams.
                                    </p>

                                    <div className="mt-6 space-y-3">
                                        <div className="bg-white/10 rounded-2xl p-4">
                                            <p className="font-semibold">Subjects Offered</p>
                                            <p className="text-blue-100 mt-1">
                                                9th & 10th Maths • 11th & 12th Maths & Physics
                                            </p>
                                        </div>

                                        <div className="bg-white/10 rounded-2xl p-4">
                                            <p className="font-semibold">Areas Covered</p>
                                            <p className="text-blue-100 mt-1">
                                                Vile Parle, Andheri, Santacruz, Juhu & Nearby Areas
                                            </p>
                                        </div>

                                        <div className="bg-white/10 rounded-2xl p-4">
                                            <p className="font-semibold">Class Options</p>
                                            <p className="text-blue-100 mt-1">
                                                Home Tuition • Coaching Classes • Free Demo Available
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className="py-5 md:py-10 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl">
                            <p className="text-amber-500 font-semibold uppercase tracking-wider text-sm">
                                Why Choose Vision Academy
                            </p>
                            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-blue-950 leading-tight">
                                Why Parents Choose Vision Academy for Home Tuition in Vile Parle
                            </h2>
                            <p className="mt-5 text-gray-700 leading-8 text-base sm:text-lg">
                                Vision Academy is trusted by parents and students in Vile Parle
                                because of personalized teaching, regular revision, simple
                                explanations, test practice and consistent academic support.
                                Vishal Sir focuses on building confidence along with marks
                                improvement in Maths and Physics.
                            </p>
                        </div>

                        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Personal Attention",
                                    desc: "Every student gets focused guidance based on learning level and performance.",
                                },
                                {
                                    title: "Regular Tests",
                                    desc: "Chapter-wise tests, revision sessions and progress tracking for better results.",
                                },
                                {
                                    title: "Board Preparation",
                                    desc: "Strong exam-oriented preparation for school exams and board exams.",
                                },
                                {
                                    title: "Flexible Timings",
                                    desc: "Convenient schedule options for home tuition in Vile Parle and nearby areas.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-3xl border border-blue-100 bg-blue-50 p-6 shadow-sm"
                                >
                                    <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
                                    <p className="mt-3 text-gray-700 leading-7">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Subjects Section */}
                <section className="py-5 md:py-10 bg-blue-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl">
                            <p className="text-amber-500 font-semibold uppercase tracking-wider text-sm">
                                Subjects Offered
                            </p>
                            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-blue-950 leading-tight">
                                Maths & Physics Tuition in Vile Parle for 9th to 12th Students
                            </h2>
                            <p className="mt-5 text-gray-700 leading-8 text-base sm:text-lg">
                                We provide structured tuition and home coaching in Vile Parle
                                for students who want better conceptual understanding, regular
                                practice and strong exam preparation.
                            </p>
                        </div>

                        <div className="mt-10 grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "9th & 10th Maths Tuition",
                                    desc: "Strong foundation, chapter-wise practice, school exam preparation and concept clarity.",
                                },
                                {
                                    title: "11th & 12th Maths Tuition",
                                    desc: "Board-focused learning with revision, problem solving and regular doubt clearing.",
                                },
                                {
                                    title: "11th & 12th Physics Tuition",
                                    desc: "Concept clarity, derivations, numericals and exam-oriented preparation by Vishal Sir.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-3xl bg-white p-6 border border-blue-100 shadow-sm"
                                >
                                    <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
                                    <p className="mt-3 text-gray-700 leading-7">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Service Areas */}
                <section className="py-5 md:py-10 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl">
                            <p className="text-amber-500 font-semibold uppercase tracking-wider text-sm">
                                Areas We Serve
                            </p>
                            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-blue-950 leading-tight">
                                Home Tuition Near Vile Parle and Nearby Mumbai Areas
                            </h2>
                            <p className="mt-5 text-gray-700 leading-8 text-base sm:text-lg">
                                In addition to Vile Parle, Vision Academy also provides home
                                tuition support in nearby areas such as Andheri, Santacruz, Juhu
                                and other nearby locations depending on availability.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {["Vile Parle", "Andheri", "Santacruz", "Juhu", "Dadar", "Mumbai"].map(
                                (area, index) => (
                                    <span
                                        key={index}
                                        className="rounded-full bg-blue-50 border border-blue-100 px-5 py-3 text-blue-900 font-medium"
                                    >
                                        {area}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-5 md:py-10 bg-amber-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-amber-500 font-semibold uppercase tracking-wider text-sm text-center">
                            Frequently Asked Questions
                        </p>
                        <h2 className="mt-3 text-2xl md:text-4xl font-bold text-blue-950 text-center leading-tight">
                            FAQs About Home Tuition in Vile Parle
                        </h2>

                        <div className="mt-10 space-y-5">
                            {[
                                {
                                    q: "Do you provide home tuition in Vile Parle?",
                                    a: "Yes, Vision Academy provides home tuition in Vile Parle for 9th, 10th, 11th and 12th students depending on batch timing and availability.",
                                },
                                {
                                    q: "Which subjects are available for tuition?",
                                    a: "We provide 9th and 10th Maths tuition, along with 11th and 12th Maths and Physics tuition.",
                                },
                                {
                                    q: "Do you provide a free demo class?",
                                    a: "Yes, students can book a free demo class before joining.",
                                },
                                {
                                    q: "Who teaches the students?",
                                    a: "Vishal Sir teaches with a focus on concept clarity, board preparation, regular practice and result improvement.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-3xl bg-white border border-amber-100 p-6 shadow-sm"
                                >
                                    <h3 className="text-lg sm:text-xl font-bold text-blue-900">
                                        {item.q}
                                    </h3>
                                    <p className="mt-3 text-gray-700 leading-7">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-5 md:py-10 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <p className="text-amber-300 font-semibold uppercase tracking-wider">
                            Book Your Demo
                        </p>
                        <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
                            Looking for the Best Home Tutor in Vile Parle?
                        </h2>
                        <p className="mt-5 text-blue-100 text-lg leading-8 max-w-3xl mx-auto">
                            Book a free demo class today and get personalized academic support
                            in Maths and Physics for school students in Vile Parle and nearby
                            Mumbai areas.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/book-demo"
                                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-amber-500 text-white font-semibold hover:bg-amber-600 transition"
                            >
                                Book Free Demo
                                <ArrowRight className="w-5 h-5" />
                            </Link>

                            <a
                                href="tel:+918097253596"
                                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-white/20 bg-white/10 text-white font-semibold hover:bg-white/20 transition"
                            >
                                <Phone className="w-5 h-5" />
                                Call Now
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}