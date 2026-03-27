"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function TeachingApproach() {
    const features = [
        "Personalized teaching approach for every student",
        "Special focus on weak students and concept clarity",
        "Regular tests, revision and performance tracking",
        "Board exam preparation for 9th to 12th standard",
        "Home tuition and small batch coaching available",
        "Flexible timings for school students in Mumbai",
    ];

    return (
        <section className="py-14 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-amber-500 font-semibold uppercase tracking-wider">
                            Our Teaching Approach
                        </p>
                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-blue-950">
                            Simple Explanation, Regular Practice & Strong Results
                        </h2>
                        <p className="mt-5 text-gray-700 leading-8">
                            We believe students perform better when concepts are taught in a simple
                            and structured way. That’s why our classes focus on clarity, step-by-step
                            explanation, regular test practice and revision support.
                        </p>

                        <div className="mt-7 space-y-4">
                            {features.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-400/15 rounded-full translate-y-1/3 -translate-x-1/3" />

                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold">Our Mission</h3>
                            <p className="mt-4 text-blue-100 leading-8">
                                To provide quality academic guidance that helps students build strong
                                fundamentals, improve confidence and achieve better marks through
                                consistent support and personalized teaching.
                            </p>

                            <h3 className="mt-8 text-2xl md:text-3xl font-bold">Our Vision</h3>
                            <p className="mt-4 text-blue-100 leading-8">
                                To become a trusted learning support system for students and parents by
                                delivering effective teaching, clear understanding and measurable
                                academic growth.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}