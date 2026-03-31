"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const features = [
    "1-to-1 personalized learning",
    "Flexible timings",
    "Concept clarity",
    "Regular revision",
    "Board exam support",
    "Progress tracking",
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: "easeOut",
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.55,
            ease: "easeOut",
        },
    },
};

export default function HomeTuitionSection() {
    return (
        <section
            className="py-10 md:py-12 bg-white overflow-hidden"
            aria-label="Home tuition section"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl p-8 sm:p-10 md:p-12 text-white overflow-hidden relative shadow-xl"
                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    {/* Background shapes */}
                    <div className="absolute top-0 right-0 w-40 h-40 md:w-48 md:h-48 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-amber-400/10 rounded-full translate-y-1/3 -translate-x-1/3"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={containerVariants}
                        >
                            <motion.p
                                variants={fadeUp}
                                className="text-amber-300 font-semibold uppercase tracking-wider text-sm sm:text-base"
                            >
                                Home Tuition in Vile Parle & Mumbai
                            </motion.p>

                            <motion.h2
                                variants={fadeUp}
                                className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
                            >
                                Best Home Tutor in Vile Parle for 9th, 10th, 11th & 12th Students
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                className="mt-5 text-blue-100 leading-8 text-base sm:text-lg max-w-2xl"
                            >
                                Vision Academy offers personalized home tuition in Vile Parle,
                                Mumbai for students who need extra attention and better academic
                                support. Vishal Sir provides expert guidance for
                                <span className="font-semibold text-white"> 9th & 10th Maths</span>{" "}
                                and
                                <span className="font-semibold text-white">
                                    {" "}
                                    11th & 12th Maths & Physics
                                </span>
                                , helping students improve focus, confidence, concept clarity and
                                board exam performance.
                            </motion.p>
                        </motion.div>

                        {/* Right Features */}
                        <motion.div
                            className="grid sm:grid-cols-2 gap-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={containerVariants}
                        >
                            {features.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover={{ y: -6, scale: 1.01 }}
                                    className="bg-white/10 rounded-2xl p-4 sm:p-5 flex items-center gap-3 border border-white/10 hover:bg-white/15 transition"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: -6 }}
                                        transition={{ type: "spring", stiffness: 250, damping: 14 }}
                                    >
                                        <CheckCircle className="w-5 h-5 text-amber-300 shrink-0" />
                                    </motion.div>
                                    <span className="text-sm sm:text-base font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Buttons */}
                    <motion.div
                        className="relative z-10 mt-8 flex flex-col sm:flex-row gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        <motion.div variants={fadeUp}>
                            <Link
                                href="/classes"
                                aria-label="Explore home tuition classes at Vision Academy"
                                title="Explore Home Tuition"
                                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-amber-500 text-white text-sm sm:text-base font-semibold hover:bg-amber-600 transition"
                            >
                                Explore Home Tuition
                                <motion.span
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="inline-flex items-center"
                                >
                                    <ArrowRight className="w-5 h-5" />
                                </motion.span>
                            </Link>
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            <Link
                                href="/contact"
                                aria-label="Enquire now for home tuition in Vile Parle"
                                title="Enquire Now"
                                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-white/20 bg-white/10 text-white text-sm sm:text-base font-semibold hover:bg-white/20 transition"
                            >
                                Enquire Now
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Internal SEO Link */}
                    <motion.div
                        className="relative z-10 mt-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        <motion.div variants={fadeUp}>
                            <Link
                                href="/vile-parle-home-tutor"
                                className="text-sm sm:text-base font-medium text-amber-300 hover:text-amber-200 hover:underline"
                                aria-label="Visit Vile Parle home tutor page"
                                title="Vile Parle Home Tutor"
                            >
                                Looking for the best home tutor in Vile Parle? Explore our local tuition page
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}