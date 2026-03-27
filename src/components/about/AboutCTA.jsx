"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutCTA() {
    return (
        <section className="py-14 md:py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-amber-300 font-semibold uppercase tracking-wider"
                >
                    Start Your Learning Journey
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="mt-3 text-3xl md:text-5xl font-bold leading-tight"
                >
                    Give Your Child the Right Academic Support
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-5 text-blue-100 text-lg leading-8 max-w-3xl mx-auto"
                >
                    Enquire today for personalized home tuition or coaching classes in Mumbai
                    for Maths, Physics and Science from 9th to 12th standard.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
                >
                    <Link
                        href="/book-demo"
                        className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-amber-500 text-white font-semibold text-lg hover:bg-amber-600 transition"
                    >
                        Book Free Demo
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    <a
                        href="tel:+918097253596"
                        className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-white/20 bg-white/10 text-white font-semibold text-lg hover:bg-white/20 transition"
                    >
                        <Phone className="w-5 h-5" />
                        Call Now
                    </a>
                </motion.div>
            </div>
        </section>
    );
}