"use client";

import Link from "next/link";
import {
    Users,
    ClipboardCheck,
    Award,
    Clock,
    CheckCircle,
    ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const whyChooseUs = [
    {
        icon: <Users className="w-7 h-7 text-blue-700" />,
        title: "Personal Attention",
        desc: "Every student gets focused guidance based on their learning level and performance.",
    },
    {
        icon: <ClipboardCheck className="w-7 h-7 text-blue-700" />,
        title: "Regular Tests",
        desc: "Weekly practice tests, revision sessions and performance tracking for continuous improvement.",
    },
    {
        icon: <Award className="w-7 h-7 text-blue-700" />,
        title: "Result Oriented",
        desc: "Strong focus on board exam preparation, marks improvement and concept building.",
    },
    {
        icon: <Clock className="w-7 h-7 text-blue-700" />,
        title: "Flexible Timings",
        desc: "Convenient class schedules for school students with home tuition and small batch options.",
    },
];

const points = [
    "Special guidance for weak students",
    "Simple explanation of difficult concepts",
    "Chapter-wise test and revision support",
    "Regular parent feedback and progress updates",
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
    hidden: { opacity: 0, y: 35, scale: 0.97 },
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

export default function WhyChooseUs() {
    return (
        <section className="py-10 md:py-12 bg-blue-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
                    {/* Left Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        <motion.p
                            variants={fadeUp}
                            className="text-amber-500 font-semibold uppercase tracking-wider text-sm"
                        >
                            Why Choose Vision Academy
                        </motion.p>

                        <motion.h2
                            variants={fadeUp}
                            className="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 leading-tight max-w-2xl"
                        >
                            Strong Foundation, Personal Attention & Better Academic Results
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mt-4 text-gray-700 leading-7 text-sm sm:text-base max-w-2xl"
                        >
                            We focus on concept clarity, regular practice and exam-oriented
                            preparation so that students not only score better marks but also
                            build confidence in Maths and Physics.
                        </motion.p>

                        <motion.div variants={containerVariants} className="mt-6 space-y-3">
                            {points.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            <Link
                                href="/about"
                                className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-900 text-white text-sm sm:text-base font-semibold hover:bg-blue-800 transition"
                            >
                                Know More About Us
                                <motion.span
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="inline-flex items-center"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </motion.span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Cards */}
                    <motion.div
                        className="grid sm:grid-cols-2 gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={containerVariants}
                    >
                        {whyChooseUs.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -8 }}
                                className="group bg-white rounded-2xl p-5 shadow-md border border-blue-100 hover:shadow-xl transition min-h-[220px]"
                            >
                                <motion.div
                                    whileHover={{ rotate: -6, scale: 1.08 }}
                                    transition={{ type: "spring", stiffness: 250, damping: 14 }}
                                    className="mb-3"
                                >
                                    {item.icon}
                                </motion.div>

                                <h3 className="text-lg sm:text-xl font-bold text-blue-900">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-gray-600 leading-7 text-sm sm:text-base">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}