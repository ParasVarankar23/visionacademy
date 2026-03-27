"use client";

import Link from "next/link";
import {
    GraduationCap,
    CheckCircle,
    ArrowRight,
    Phone,
    BookOpen,
    Star,
    Target,
    School,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay,
            ease: "easeOut",
        },
    }),
};

const features = [
    "Maths & Physics Expert Guidance",
    "Home Tuition in Mumbai",
    "Regular Tests & Revision",
    "Board Exam Focused Preparation",
    "Concept Clarity + Doubt Solving",
    "Flexible Timings in Mumbai",
];

export default function AboutHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-amber-50">
            {/* Background blur shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute top-10 left-10 w-28 h-28 bg-blue-200/25 rounded-full blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute bottom-10 right-10 w-36 h-36 bg-amber-200/25 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-10 lg:py-10 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 xl:gap-10 items-start">
                    {/* Left Content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={0}
                        className="order-2 lg:order-1"
                    >
                        {/* Badge */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            custom={0.1}
                            className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-5"
                        >
                            <Star className="w-4 h-4 fill-current" />
                            About Vision Academy
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            custom={0.2}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold text-blue-950 leading-tight tracking-tight max-w-3xl"
                        >
                            Building Strong Concepts for{" "}
                            <span className="text-amber-500">Better Results</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            custom={0.3}
                            className="mt-4 text-sm sm:text-base text-gray-700 leading-7 max-w-2xl"
                        >
                            Vision Academy helps students from
                            <span className="font-semibold text-blue-900"> 9th to 12th standard</span> improve
                            academic performance through structured coaching, concept-based teaching and
                            personalized home tuition in Mumbai with strong focus on clarity, confidence
                            and consistent results.
                        </motion.p>

                        {/* Features */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            custom={0.4}
                            className="mt-6 grid sm:grid-cols-2 gap-3 max-w-2xl"
                        >
                            {features.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, delay: 0.45 + index * 0.07 }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Buttons */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            custom={0.55}
                            className="mt-6 flex flex-col sm:flex-row gap-3"
                        >
                            <Link
                                href="/book-demo"
                                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-amber-500 text-white font-semibold text-sm shadow-md hover:bg-amber-600 hover:-translate-y-0.5 transition duration-300"
                            >
                                Book Free Demo
                                <ArrowRight className="w-5 h-5" />
                            </Link>

                            <a
                                href="tel:+9180972535969"
                                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-blue-200 bg-white text-blue-900 font-semibold text-sm hover:bg-blue-50 hover:-translate-y-0.5 transition duration-300"
                            >
                                <Phone className="w-5 h-5" />
                                Call Now
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            custom={0.65}
                            className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl"
                        >
                            {[
                                { title: "9th-12th", sub: "Classes Covered" },
                                { title: "Home", sub: "Tuition Available" },
                                { title: "Mumbai", sub: "Service Area" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -6 }}
                                    className="bg-white rounded-2xl shadow-sm border border-blue-100 p-3 text-center"
                                >
                                    <h3 className="text-base sm:text-lg font-bold text-blue-900">{stat.title}</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 mt-1">{stat.sub}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="relative bg-white rounded-2xl shadow-lg border border-blue-100 p-3 sm:p-4">
                            <div className="rounded-2xl bg-gradient-to-br from-blue-900 to-blue-700 text-white p-5 sm:p-6 lg:p-6 relative overflow-hidden min-h-[320px] md:min-h-[380px]">
                                {/* Background shapes */}
                                <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 rounded-full"></div>
                                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-amber-400/20 rounded-full"></div>

                                <div className="relative z-10">
                                    {/* Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.35 }}
                                        className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-4 w-fit"
                                    >
                                        <BookOpen className="w-4 h-4" />
                                        Trusted Academic Guidance
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h2
                                        initial={{ opacity: 0, y: 22 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.55, delay: 0.45 }}
                                        className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight max-w-md"
                                    >
                                        Personalized Coaching for Students
                                    </motion.h2>

                                    {/* Description */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 22 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.55, delay: 0.55 }}
                                        className="mt-3 text-blue-100 leading-6 text-xs sm:text-sm max-w-lg"
                                    >
                                        We focus on concept clarity, problem solving, regular revision,
                                        doubt solving and exam confidence so students can improve both
                                        understanding and academic performance.
                                    </motion.p>

                                    {/* Info Cards */}
                                    <div className="mt-6 space-y-3">
                                        {[
                                            {
                                                title: "Subjects Covered",
                                                lines: ["9th & 10th: Maths & Science", "11th & 12th: Maths & Physics"],
                                            },
                                            {
                                                title: "Teaching Modes",
                                                lines: ["Home Tuition • Small Batch Coaching"],
                                            },
                                        ].map((card, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 24 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.55, delay: 0.65 + index * 0.12 }}
                                                whileHover={{ y: -4 }}
                                                className="bg-white/10 rounded-2xl p-4"
                                            >
                                                <p className="font-semibold text-base sm:text-lg">{card.title}</p>
                                                {card.lines.map((line, i) => (
                                                    <p key={i} className="text-blue-100 text-sm sm:text-base mt-1">
                                                        {line}
                                                    </p>
                                                ))}
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Link */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 18 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.55, delay: 1 }}
                                    >
                                        <Link
                                            href="/courses"
                                            className="mt-6 inline-flex items-center gap-2 text-amber-300 font-semibold hover:text-amber-200 transition"
                                        >
                                            Explore Courses
                                            <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Floating cards - keep only on very large screens */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.1 }}
                            className="hidden 2xl:flex absolute -left-8 top-10 bg-white shadow-xl border border-blue-100 rounded-2xl px-4 py-3 items-center gap-3 z-20"
                        >
                            <Target className="w-7 h-7 text-amber-500 shrink-0" />
                            <div>
                                <p className="font-bold text-blue-900 text-base leading-none">Concept Focused</p>
                                <p className="text-xs text-gray-600 mt-1">Strong Foundation</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="hidden 2xl:flex absolute -right-6 bottom-10 bg-white shadow-xl border border-blue-100 rounded-2xl px-4 py-3 items-center gap-3 z-20"
                        >
                            <School className="w-7 h-7 text-blue-700 shrink-0" />
                            <div>
                                <p className="font-bold text-blue-900 text-base leading-none">Personalized Support</p>
                                <p className="text-xs text-gray-600 mt-1">Mumbai Available</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}