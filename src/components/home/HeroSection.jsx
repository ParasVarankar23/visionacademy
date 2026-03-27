import Link from "next/link";
import {
    BookOpen,
    CheckCircle,
    Phone,
    ArrowRight,
    Target,
    School,
    Star,
} from "lucide-react";

const features = [
    "Personalized 1-to-1 home tuition",
    "Small batch coaching available",
    "Weekly tests and progress tracking",
    "Board exam focused preparation",
    "Concept clarity + doubt solving",
    "Flexible timings in Mumbai",
];

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-amber-50">
            {/* Background blur shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-28 h-28 bg-blue-200/25 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-36 h-36 bg-amber-200/25 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-10 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 xl:gap-10 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                            <Star className="w-4 h-4 fill-current" />
                            Admissions Open in Mumbai
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-blue-950 leading-[1.1] tracking-tight max-w-3xl">
                            Expert Home Tuition & Coaching for{" "}
                            <span className="text-amber-500">Maths & Physics</span>
                        </h1>

                        {/* Description */}
                        <p className="mt-5 text-justify text-base sm:text-lg text-gray-700 leading-8 max-w-2xl">
                            Vision Academy offers professional coaching and home tuition for
                            <span className="font-semibold text-blue-900"> 9th & 10th Maths</span> and
                            <span className="font-semibold text-blue-900"> 11th & 12th Maths and Physics</span> in Mumbai.
                            Personalized teaching, concept clarity, board preparation and regular test
                            practice to help students achieve better results.
                        </p>

                        {/* Features */}
                        <div className="mt-7 grid sm:grid-cols-2 gap-3 max-w-2xl">
                            {features.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/book-demo"
                                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-amber-500 text-white font-semibold text-base shadow-lg hover:bg-amber-600 transition"
                            >
                                Book Free Demo
                                <ArrowRight className="w-5 h-5" />
                            </Link>

                            <a
                                href="tel:+919999999999"
                                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border border-blue-200 bg-white text-blue-900 font-semibold text-base hover:bg-blue-50 transition"
                            >
                                <Phone className="w-5 h-5" />
                                Call Now
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
                            <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-4 text-center">
                                <h3 className="text-lg sm:text-xl font-bold text-blue-900">9th-12th</h3>
                                <p className="text-sm text-gray-600 mt-1">Classes Covered</p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-4 text-center">
                                <h3 className="text-lg sm:text-xl font-bold text-blue-900">Home</h3>
                                <p className="text-sm text-gray-600 mt-1">Tuition Available</p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-4 text-center">
                                <h3 className="text-lg sm:text-xl font-bold text-blue-900">Mumbai</h3>
                                <p className="text-sm text-gray-600 mt-1">Service Area</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="relative order-1 lg:order-2">
                        <div className="relative bg-white rounded-[24px] shadow-2xl border border-blue-100 p-4 sm:p-5">
                            <div className="rounded-[22px] bg-gradient-to-br from-blue-900 to-blue-700 text-white p-5 sm:p-6 lg:p-8 relative overflow-hidden min-h-[440px] flex flex-col justify-center">
                                {/* Background shapes */}
                                <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 rounded-full"></div>
                                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-amber-400/20 rounded-full"></div>

                                <div className="relative z-10">
                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-4 w-fit">
                                        <BookOpen className="w-4 h-4" />
                                        Trusted Learning Support
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight max-w-md">
                                        Personalized Learning for Better Results
                                    </h2>

                                    {/* Description */}
                                    <p className="mt-4 text-blue-100 leading-7 text-sm sm:text-base max-w-lg">
                                        Special coaching for school students with concept-based
                                        teaching, doubt solving, revision sessions and regular
                                        performance tracking.
                                    </p>

                                    {/* Info Cards */}
                                    <div className="mt-6 space-y-3">
                                        <div className="bg-white/10 rounded-2xl p-4">
                                            <p className="font-semibold text-base sm:text-lg">
                                                Subjects Offered
                                            </p>
                                            <p className="text-blue-100 text-sm sm:text-base mt-1">
                                                9th & 10th: Maths
                                            </p>
                                            <p className="text-blue-100 text-sm sm:text-base">
                                                11th & 12th: Maths & Physics
                                            </p>
                                        </div>

                                        <div className="bg-white/10 rounded-2xl p-4">
                                            <p className="font-semibold text-base sm:text-lg">
                                                Class Modes
                                            </p>
                                            <p className="text-blue-100 text-sm sm:text-base mt-1">
                                                Home Tuition • Small Batch Coaching
                                            </p>
                                        </div>

                                        <div className="bg-white/10 rounded-2xl p-4">
                                            <p className="font-semibold text-base sm:text-lg">
                                                Target Students
                                            </p>
                                            <p className="text-blue-100 text-sm sm:text-base mt-1">
                                                9th, 10th, 11th & 12th Standard
                                            </p>
                                        </div>
                                    </div>

                                    {/* Link */}
                                    <Link
                                        href="/courses"
                                        className="mt-6 inline-flex items-center gap-2 text-amber-300 font-semibold hover:text-amber-200 transition"
                                    >
                                        Explore Courses
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Floating cards */}
                        <div className="hidden 2xl:flex absolute -left-8 top-10 bg-white shadow-xl border border-blue-100 rounded-2xl px-4 py-3 items-center gap-3 z-20">
                            <Target className="w-7 h-7 text-amber-500 shrink-0" />
                            <div>
                                <p className="font-bold text-blue-900 text-base leading-none">
                                    Board Focused
                                </p>
                                <p className="text-xs text-gray-600 mt-1">Exam Preparation</p>
                            </div>
                        </div>

                        <div className="hidden 2xl:flex absolute -right-6 bottom-10 bg-white shadow-xl border border-blue-100 rounded-2xl px-4 py-3 items-center gap-3 z-20">
                            <School className="w-7 h-7 text-blue-700 shrink-0" />
                            <div>
                                <p className="font-bold text-blue-900 text-base leading-none">
                                    Home Tuition
                                </p>
                                <p className="text-xs text-gray-600 mt-1">Mumbai Available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}