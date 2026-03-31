"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
    return (
        <section
            className="py-16 md:py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden"
            aria-label="Final call to action section"
        >
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
                    Give Your Child the Best Academic Support in Vile Parle
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="mt-5 text-blue-100 text-lg leading-8 max-w-3xl mx-auto"
                >
                    Vision Academy provides result-oriented home tuition and coaching in
                    Vile Parle, Mumbai with strong concepts, regular practice and personal
                    attention for
                    <span className="font-semibold text-white"> 9th & 10th Maths</span>{" "}
                    and
                    <span className="font-semibold text-white">
                        {" "}
                        11th & 12th Maths & Physics
                    </span>{" "}
                    by Vishal Sir. Enquire now for home tuition or coaching classes.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
                >
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                        <Link
                            href="/book-demo"
                            aria-label="Book free demo class at Vision Academy"
                            title="Book Free Demo"
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

                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                        <a
                            href="tel:+918097253596"
                            aria-label="Call Vision Academy now at 8097253596"
                            title="Call Vision Academy"
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

                {/* Internal SEO Link */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    className="mt-6"
                >
                    <Link
                        href="/vile-parle-home-tutor"
                        className="text-sm sm:text-base font-medium text-amber-300 hover:text-amber-200 hover:underline"
                        aria-label="Visit Vile Parle home tutor page"
                        title="Vile Parle Home Tutor"
                    >
                        Looking for the best home tutor in Vile Parle? Explore our local tuition page
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}