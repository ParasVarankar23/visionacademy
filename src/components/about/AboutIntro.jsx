"use client";

import { motion } from "framer-motion";
import { Home, School, BookOpen, Target } from "lucide-react";

export default function AboutIntro() {

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
    const cards = [
        {
            icon: <Home className="w-8 h-8 text-blue-700" />,
            title: "Home Tuition",
            desc: "One-to-one personalized home tuition for students who need focused guidance.",
        },
        {
            icon: <School className="w-8 h-8 text-blue-700" />,
            title: "Small Batch Coaching",
            desc: "Interactive coaching in small groups for better attention and classroom comfort.",
        },
        {
            icon: <BookOpen className="w-8 h-8 text-blue-700" />,
            title: "Concept Clarity",
            desc: "Strong explanation of basics, formulas, derivations and problem solving methods.",
        },
        {
            icon: <Target className="w-8 h-8 text-blue-700" />,
            title: "Exam Preparation",
            desc: "Regular tests, chapter-wise practice and revision for better marks and confidence.",
        },
    ];

    return (
        <section className="py-14 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-amber-500 font-semibold uppercase tracking-wider">
                            Who We Are
                        </p>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-blue-950">
                            Building Strong Concepts for Better Academic Success
                        </h2>

                        <p className="mt-5 text-gray-700 leading-8">
                            Vision Academy is a trusted learning space in Mumbai focused on helping
                            students from 9th to 12th standard build strong foundations in Maths,
                            Physics and core academic subjects.
                        </p>

                        <p className="mt-4 text-gray-700 leading-8">
                            Through personalized home tuition, small batch coaching, regular tests
                            and concept-based teaching, we help students improve understanding,
                            confidence and exam performance with consistent academic support.
                        </p>
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


                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 gap-5"
                    >
                        {cards.map((item, index) => (
                            <div
                                key={index}
                                className="bg-blue-50 border border-blue-100 rounded-3xl p-6 shadow-sm hover:shadow-lg transition"
                            >
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
                                <p className="mt-3 text-gray-600 leading-7">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}