"use client";

import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTA() {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-amber-300 font-semibold uppercase tracking-wider"
                >
                    Start Today
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="mt-3 text-3xl md:text-5xl font-bold leading-tight"
                >
                    Give Your Child the Right Academic Support
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="mt-5 text-blue-100 text-lg leading-8 max-w-3xl mx-auto"
                >
                    Strong concepts, regular practice, personal attention and
                    result-oriented teaching for school students in Mumbai. Enquire now
                    for home tuition or coaching classes.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
                >
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link
                            href="/book-demo"
                            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-amber-500 text-white font-semibold text-lg hover:bg-amber-600 transition"
                        >
                            Book Free Demo
                            <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut",
                                }}
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.span>
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <a
                            href="tel:+9180972535969"
                            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-white/20 bg-white/10 text-white font-semibold text-lg hover:bg-white/20 transition"
                        >
                            <motion.span
                                animate={{ rotate: [0, -10, 10, -10, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                    ease: "easeInOut",
                                }}
                            >
                                <Phone className="w-5 h-5" />
                            </motion.span>
                            Call Now
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}