"use client";

import { motion } from "framer-motion";
import { Target, Users, Award } from "lucide-react";

export default function WhyChooseSection() {
    const whyChoose = [
        {
            icon: <Target className="w-7 h-7 text-amber-500" />,
            title: "Result-Oriented Teaching",
            desc: "Our teaching is focused on strong fundamentals, regular practice and better academic performance.",
        },
        {
            icon: <Users className="w-7 h-7 text-amber-500" />,
            title: "Personal Attention",
            desc: "Every student receives dedicated guidance based on their current level and learning speed.",
        },
        {
            icon: <Award className="w-7 h-7 text-amber-500" />,
            title: "Strong Academic Support",
            desc: "We help students improve confidence, solve doubts and prepare effectively for school and board exams.",
        },
    ];

    return (
        <section className="py-14 md:py-16 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <p className="text-amber-500 font-semibold uppercase tracking-wider">
                        What Makes Us Different
                    </p>
                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-blue-950">
                        Why Students & Parents Trust Vision Academy
                    </h2>
                    <p className="mt-4 text-gray-700 leading-8">
                        Our approach combines concept-based teaching, personal attention and regular
                        practice so that students improve academically with confidence.
                    </p>
                </motion.div>

                <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {whyChoose.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-6 shadow-md border border-blue-100 hover:shadow-xl transition"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
                            <p className="mt-3 text-gray-600 leading-7">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}