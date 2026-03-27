"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Calculator, Atom, GraduationCap } from "lucide-react";

const courses = [
    {
        title: "9th Standard (Mathematics)",
        icon: <Calculator className="w-8 h-8 text-amber-500" />,
        description:
            "Strong foundation in algebra, geometry, mensuration, and problem-solving techniques for Class 9 students.",
        features: [
            "Concept clarity",
            "Practice worksheets",
            "Chapter-wise tests",
            "Exam preparation",
        ],
    },
    {
        title: "10th Standard (Mathematics)",
        icon: <Calculator className="w-8 h-8 text-amber-500" />,
        description:
            "Complete guidance for board exam mathematics with formulas, shortcuts, and regular test practice.",
        features: [
            "Board exam preparation",
            "Important questions",
            "Formula revision",
            "Mock tests",
        ],
    },
    {
        title: "9th & 10th Combined (Mathematics)",
        icon: <Calculator className="w-8 h-8 text-amber-500" />,
        description:
            "A complete combined mathematics program for 9th and 10th students that builds a strong base and prepares students for board-level success.",
        features: [
            "2-year maths foundation",
            "Concept building",
            "Board preparation support",
            "Regular practice tests",
        ],
    },
    {
        title: "11th Standard (Physics + Mathematics)",
        icon: <GraduationCap className="w-8 h-8 text-amber-500" />,
        description:
            "Combined coaching for 11th Science students covering both Physics and Mathematics in a structured way.",
        features: [
            "Physics concepts",
            "Math problem solving",
            "Weekly assessments",
            "Science foundation",
        ],
    },
    {
        title: "11th Standard (Physics Only)",
        icon: <Atom className="w-8 h-8 text-amber-500" />,
        description:
            "Focused Physics coaching for 11th standard students including numericals, theory, and concept building.",
        features: [
            "Numerical practice",
            "Conceptual understanding",
            "Chapter tests",
            "Doubt solving",
        ],
    },
    {
        title: "11th Standard (Mathematics Only)",
        icon: <BookOpen className="w-8 h-8 text-amber-500" />,
        description:
            "Specialized mathematics coaching for 11th students with emphasis on algebra, trigonometry, and calculus basics.",
        features: [
            "Algebra mastery",
            "Trigonometry basics",
            "Regular assignments",
            "Exam-oriented learning",
        ],
    },
    {
        title: "12th Standard (Physics + Mathematics)",
        icon: <GraduationCap className="w-8 h-8 text-amber-500" />,
        description:
            "Complete preparation for 12th board exams with combined Physics and Mathematics coaching.",
        features: [
            "Board-focused study",
            "Advanced numericals",
            "Revision sessions",
            "Test series",
        ],
    },
    {
        title: "12th Standard (Physics Only)",
        icon: <Atom className="w-8 h-8 text-amber-500" />,
        description:
            "Dedicated Physics tuition for 12th students with focus on derivations, numericals, and board exam success.",
        features: [
            "Derivations practice",
            "Numerical solving",
            "Theory revision",
            "Board exam support",
        ],
    },
    {
        title: "12th Standard (Mathematics Only)",
        icon: <BookOpen className="w-8 h-8 text-amber-500" />,
        description:
            "Advanced mathematics tuition for 12th standard including calculus, vectors, probability, and board-level practice.",
        features: [
            "Calculus focus",
            "Vectors & probability",
            "Step-by-step solutions",
            "Mock board papers",
        ],
    },
    {
        title: "11th & 12th Combined (Physics + Mathematics)",
        icon: <GraduationCap className="w-8 h-8 text-amber-500" />,
        description:
            "Complete 2-year combined coaching program for 11th and 12th Science students covering both Physics and Mathematics.",
        features: [
            "2-year complete preparation",
            "Strong concept building",
            "Board + entrance support",
            "Regular tests & revision",
        ],
    },
    {
        title: "11th & 12th Combined (Physics Only)",
        icon: <Atom className="w-8 h-8 text-amber-500" />,
        description:
            "Special combined Physics tuition for 11th and 12th students with strong focus on numericals, theory, and exam preparation.",
        features: [
            "Physics from basics to advanced",
            "Numerical mastery",
            "Derivations + theory",
            "Board-focused preparation",
        ],
    },
    {
        title: "11th & 12th Combined (Mathematics Only)",
        icon: <BookOpen className="w-8 h-8 text-amber-500" />,
        description:
            "Comprehensive 2-year mathematics coaching for 11th and 12th students including algebra, trigonometry, calculus, vectors, and probability.",
        features: [
            "Complete syllabus coverage",
            "11th + 12th concept linking",
            "Problem-solving mastery",
            "Board exam preparation",
        ],
    },
];

export default function Courses() {
    return (
        <section
            id="courses"
            className="bg-gradient-to-b from-white to-amber-50 py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20"
        >
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-amber-500 font-semibold uppercase tracking-[0.2em] text-sm sm:text-base"
                    >
                        Our Courses
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                    >
                        Courses Offered at Vision Academy
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        className="mt-5 text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed"
                    >
                        We provide expert home tuition and personalized coaching for school
                        students with a strong focus on concept clarity, exam preparation,
                        and academic excellence.
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            className="group bg-white border border-amber-100 rounded-3xl p-7 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                {course.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-snug min-h-[64px]">
                                {course.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                                {course.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {course.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center text-gray-700 text-sm sm:text-base"
                                    >
                                        <span className="w-2.5 h-2.5 bg-amber-500 rounded-full mr-3 shrink-0"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <Link
                                href="/contact"
                                className="mt-auto inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                Enroll Now
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}