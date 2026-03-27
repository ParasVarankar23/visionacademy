import Link from "next/link";
import {
    Users,
    ClipboardCheck,
    Award,
    Clock,
    CheckCircle,
    ArrowRight,
} from "lucide-react";

const whyChooseUs = [
    {
        icon: <Users className="w-8 h-8 text-blue-700" />,
        title: "Personal Attention",
        desc: "Every student gets focused guidance based on their learning level and performance.",
    },
    {
        icon: <ClipboardCheck className="w-8 h-8 text-blue-700" />,
        title: "Regular Tests",
        desc: "Weekly practice tests, revision sessions and performance tracking for continuous improvement.",
    },
    {
        icon: <Award className="w-8 h-8 text-blue-700" />,
        title: "Result Oriented",
        desc: "Strong focus on board exam preparation, marks improvement and concept building.",
    },
    {
        icon: <Clock className="w-8 h-8 text-blue-700" />,
        title: "Flexible Timings",
        desc: "Convenient class schedules for school students with home tuition and small batch options.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-16 md:py-20 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-amber-500 font-semibold uppercase tracking-wider">
                            Why Choose Vision Academy
                        </p>
                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-blue-950 leading-tight">
                            Strong Foundation, Personal Attention & Better Academic Results
                        </h2>
                        <p className="mt-5 text-gray-700 leading-8">
                            We focus on concept clarity, regular practice and exam-oriented
                            preparation so that students not only score better marks but also
                            build confidence in Maths, Physics and Science.
                        </p>

                        <div className="mt-8 space-y-4">
                            {[
                                "Special guidance for weak students",
                                "Simple explanation of difficult concepts",
                                "Chapter-wise test and revision support",
                                "Regular parent feedback and progress updates",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/about"
                            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-900 text-white font-semibold hover:bg-blue-800 transition"
                        >
                            Know More About Us
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {whyChooseUs.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-6 shadow-md border border-blue-100 hover:shadow-lg transition"
                            >
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
                                <p className="mt-3 text-gray-600 leading-7">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}