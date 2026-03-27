"use client";

import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function SubjectsSection() {
    return (
        <section className="py-10 md:py-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.p
                        variants={fadeUp}
                        className="text-sm md:text-base text-amber-500 font-semibold uppercase tracking-[0.2em]"
                    >
                        Our Courses
                    </motion.p>

                    <motion.h2
                        variants={fadeUp}
                        className="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950"
                    >
                        Subjects We Specialize In
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="mt-3 text-gray-600 leading-7 text-sm sm:text-base"
                    >
                        Structured teaching for school students with strong concept
                        building, practice, revision and board exam preparation.
                    </motion.p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={containerVariants}
                >
                    {subjects.map((subject, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="group bg-white border border-blue-100 rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300"
                        >
                            {/* Icon */}
                            <motion.div
                                whileHover={{ rotate: -6, scale: 1.08 }}
                                transition={{ type: "spring", stiffness: 250, damping: 14 }}
                                className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4 group-hover:bg-blue-700 group-hover:text-white transition"
                            >
                                <BookOpen className="w-6 h-6" />
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-lg sm:text-xl font-bold text-blue-900">
                                {subject.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-3 text-gray-600 leading-7 text-sm sm:text-base">
                                {subject.desc}
                            </p>

                            {/* Link */}
                            <Link
                                href="/courses"
                                className="mt-4 inline-flex items-center gap-2 text-blue-700 text-sm sm:text-base font-semibold hover:text-amber-500 transition"
                            >
                                Learn More
                                <motion.span
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="inline-flex items-center"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </motion.span>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}