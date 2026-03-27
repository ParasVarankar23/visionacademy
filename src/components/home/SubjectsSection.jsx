import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

const subjects = [
    {
        title: "9th & 10th Maths",
        desc: "Strong conceptual teaching, board preparation, chapter-wise practice and problem solving.",
    },
    {
        title: "11th & 12th Maths",
        desc: "Board-focused and concept-based teaching with regular revision, tests and doubt solving.",
    },
    {
        title: "11th & 12th Physics",
        desc: "In-depth concept clarity, numerical problem solving, derivations and exam-oriented preparation.",
    },
];

export default function SubjectsSection() {
    return (
        <section className="py-10 md:py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-amber-500 font-semibold uppercase tracking-wider text-sm">
                        Our Courses
                    </p>

                    <h2 className="mt-2 text-2xl md:text-3xl font-bold text-blue-950">
                        Subjects We Specialize In
                    </h2>

                    <p className="mt-3 text-gray-600 leading-7 text-sm sm:text-base">
                        Structured teaching for school students with strong concept
                        building, practice, revision and board exam preparation.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {subjects.map((subject, index) => (
                        <div
                            key={index}
                            className="bg-white border border-blue-100 rounded-2xl p-5 shadow-md hover:shadow-lg transition duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4 group-hover:bg-blue-700 group-hover:text-white transition">
                                <BookOpen className="w-6 h-6" />
                            </div>

                            <h3 className="text-lg sm:text-xl font-bold text-blue-900">
                                {subject.title}
                            </h3>

                            <p className="mt-3 text-gray-600 leading-7 text-sm sm:text-base">
                                {subject.desc}
                            </p>

                            <Link
                                href="/courses"
                                className="mt-4 inline-flex items-center gap-2 text-blue-700 text-sm sm:text-base font-semibold hover:text-amber-500 transition"
                            >
                                Learn More
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}