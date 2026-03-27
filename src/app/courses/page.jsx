"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calculator, Atom, GraduationCap } from "lucide-react";

const courses = [
    {
        category: "9th",
        title: "9th Standard (Mathematics)",
        icon: <Calculator className="w-6 h-6 text-amber-500" />,
        description:
            "Strong foundation in algebra, geometry, mensuration, and problem-solving techniques for Class 9 students.",
        features: ["Concept clarity", "Practice worksheets", "Chapter-wise tests", "Exam preparation"],
        monthlyPrice: 500,
        yearlyPrice: 5000,
    },
    {
        category: "10th",
        title: "10th Standard (Mathematics)",
        icon: <Calculator className="w-6 h-6 text-amber-500" />,
        description:
            "Complete guidance for board exam mathematics with formulas, shortcuts, and regular test practice.",
        features: ["Board exam preparation", "Important questions", "Formula revision", "Mock tests"],
        monthlyPrice: 600,
        yearlyPrice: 6200,
    },
    {
        category: "Combined",
        title: "9th & 10th Combined (Mathematics)",
        icon: <Calculator className="w-6 h-6 text-amber-500" />,
        description:
            "A complete combined mathematics program for 9th and 10th students with strong concept building.",
        features: ["2-year maths foundation", "Concept building", "Board preparation", "Practice tests"],
        monthlyPrice: 700,
        yearlyPrice: 7200,
    },
    {
        category: "11th",
        title: "11th Standard (Physics + Mathematics)",
        icon: <GraduationCap className="w-6 h-6 text-amber-500" />,
        description:
            "Combined coaching for 11th Science students covering Physics and Mathematics.",
        features: ["Physics concepts", "Math problem solving", "Weekly assessments", "Science foundation"],
        monthlyPrice: 700,
        yearlyPrice: 7400,
    },
    {
        category: "11th",
        title: "11th Standard (Physics Only)",
        icon: <Atom className="w-6 h-6 text-amber-500" />,
        description:
            "Focused Physics coaching for 11th standard students with numericals and theory.",
        features: ["Numerical practice", "Concept clarity", "Chapter tests", "Doubt solving"],
        monthlyPrice: 700,
        yearlyPrice: 7400,
    },
    {
        category: "11th",
        title: "11th Standard (Mathematics Only)",
        icon: <BookOpen className="w-6 h-6 text-amber-500" />,
        description:
            "Specialized mathematics coaching for 11th students with algebra and trigonometry.",
        features: ["Algebra mastery", "Trigonometry", "Assignments", "Exam learning"],
        monthlyPrice: 700,
        yearlyPrice: 7400,
    },
    {
        category: "12th",
        title: "12th Standard (Physics + Mathematics)",
        icon: <GraduationCap className="w-6 h-6 text-amber-500" />,
        description:
            "Complete preparation for 12th board exams with combined Physics and Mathematics.",
        features: ["Board-focused study", "Advanced numericals", "Revision", "Test series"],
        monthlyPrice: 800,
        yearlyPrice: 8400,
    },
    {
        category: "12th",
        title: "12th Standard (Physics Only)",
        icon: <Atom className="w-6 h-6 text-amber-500" />,
        description:
            "Dedicated Physics tuition for 12th students with derivations and numericals.",
        features: ["Derivations", "Numerical solving", "Theory revision", "Board support"],
        monthlyPrice: 800,
        yearlyPrice: 8400,
    },
    {
        category: "12th",
        title: "12th Standard (Mathematics Only)",
        icon: <BookOpen className="w-6 h-6 text-amber-500" />,
        description:
            "Advanced mathematics tuition for 12th standard including calculus and probability.",
        features: ["Calculus focus", "Vectors & probability", "Step solutions", "Mock papers"],
        monthlyPrice: 800,
        yearlyPrice: 8400,
    },
    {
        category: "Combined",
        title: "11th & 12th Combined (Physics + Mathematics)",
        icon: <GraduationCap className="w-6 h-6 text-amber-500" />,
        description:
            "Complete 2-year coaching program for 11th and 12th Science students.",
        features: ["2-year preparation", "Concept building", "Board + entrance", "Tests & revision"],
        monthlyPrice: 900,
        yearlyPrice: 9600,
    },
    {
        category: "Combined",
        title: "11th & 12th Combined (Physics Only)",
        icon: <Atom className="w-6 h-6 text-amber-500" />,
        description:
            "Special combined Physics tuition for 11th and 12th students.",
        features: ["Basics to advanced", "Numerical mastery", "Theory + derivations", "Board focus"],
        monthlyPrice: 900,
        yearlyPrice: 9600,
    },
    {
        category: "Combined",
        title: "11th & 12th Combined (Mathematics Only)",
        icon: <BookOpen className="w-6 h-6 text-amber-500" />,
        description:
            "Comprehensive 2-year mathematics coaching for 11th and 12th students.",
        features: ["Complete syllabus", "Concept linking", "Problem solving", "Board preparation"],
        monthlyPrice: 900,
        yearlyPrice: 9600,
    },
];

const tabs = ["All", "9th", "10th", "11th", "12th", "Combined"];

export default function Courses() {
    const [activeTab, setActiveTab] = useState("All");

    const filteredCourses =
        activeTab === "All"
            ? courses
            : courses.filter((course) => course.category === activeTab);

    return (
        <section
            id="courses"
            className="bg-gradient-to-b from-white to-amber-50 py-10 md:py-14 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20"
        >
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-amber-500 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm"
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
                        className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
                    >
                        We provide expert home tuition and personalized coaching for school
                        students with a strong focus on concept clarity, exam preparation,
                        and academic excellence.
                    </motion.p>
                </div>

                {/* Tabs */}
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 border ${activeTab === tab
                                    ? "bg-amber-500 text-white border-amber-500 shadow-md"
                                    : "bg-white text-gray-700 border-amber-200 hover:bg-amber-50"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Cards */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35 }}
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10"
                    >
                        {filteredCourses.map((course, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="group bg-white border border-amber-100 rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                                    {course.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug min-h-[72px]">
                                    {course.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed mb-4 text-base">
                                    {course.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2 mb-5">
                                    {course.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center text-gray-700 text-base"
                                        >
                                            <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 shrink-0"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Pricing */}
                                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-5">
                                    <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-3">
                                        Fee Structure
                                    </p>

                                    <div className="flex items-center justify-between border-b border-amber-200 pb-2 mb-2">
                                        <span className="text-gray-700 font-medium text-sm">Monthly</span>
                                        <span className="text-lg font-bold text-gray-900">
                                            ₹{course.monthlyPrice}
                                            <span className="text-sm font-medium text-gray-500"> /month</span>
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-700 font-medium text-sm">Yearly</span>
                                        <div className="text-right">
                                            <span className="text-lg font-bold text-gray-900">
                                                ₹{course.yearlyPrice}
                                            </span>
                                            <p className="text-[11px] text-green-600 font-medium">
                                                Save more yearly
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Button */}
                                <Link
                                    href="/contact"
                                    className="mt-auto inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md text-sm"
                                >
                                    Enroll Now
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}