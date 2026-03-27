"use client";

import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const serviceAreas = [
    "Vile Parle",
    "Andheri",
    "Santacruz",
    "Juhu",
    "Dadar",
    "Other Nearby Areas",
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
    hidden: { opacity: 0, y: 25, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export default function ServiceAreasSection() {
    return (
        <section className="py-5 md:py-10 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        <motion.p
                            variants={fadeUp}
                            className="text-amber-500 font-semibold uppercase tracking-[0.18em] text-sm md:text-base"
                        >
                            Service Areas
                        </motion.p>

                        <motion.h2
                            variants={fadeUp}
                            className="mt-3 text-2xl sm:text-3xl md:text-3xl font-bold text-blue-950 leading-tight"
                        >
                            Available for Home Tuition Across Mumbai
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mt-6 text-gray-700 leading-8 text-base md:text-lg max-w-2xl"
                        >
                            Vision Academy provides coaching and home tuition support for
                            students across major areas in Mumbai depending on availability
                            and batch timings.
                        </motion.p>

                        <motion.div
                            className="mt-8 grid sm:grid-cols-2 gap-5"
                            variants={containerVariants}
                        >
                            {serviceAreas.map((area, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="flex items-center gap-4 bg-blue-50 border border-blue-100 rounded-3xl px-5 py-5 shadow-md hover:shadow-lg transition"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.12, rotate: -8 }}
                                        transition={{ type: "spring", stiffness: 250, damping: 14 }}
                                        className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center shadow-sm"
                                    >
                                        <MapPin className="w-5 h-5 text-blue-700 shrink-0" />
                                    </motion.div>

                                    <span className="font-semibold text-gray-800 text-base md:text-lg">
                                        {area}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.98 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 rounded-[2rem] p-8 sm:p-10 md:p-12 text-white shadow-2xl relative overflow-hidden"
                    >
                        {/* Background shapes */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-28 h-28 bg-amber-400/10 rounded-full translate-y-1/3 -translate-x-1/3"></div>

                        <div className="relative z-10">
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                                className="text-3xl md:text-4xl font-bold leading-tight"
                            >
                                Admissions Open Now
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="mt-5 text-blue-100 leading-8 text-base md:text-lg"
                            >
                                Book a free demo class and get personalized guidance for
                                <span className="font-semibold text-white"> Maths </span>
                                and
                                <span className="font-semibold text-white"> Physics </span>
                                for 9th to 12th standard students.
                            </motion.p>

                            <motion.div
                                className="mt-8 space-y-4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={containerVariants}
                            >
                                <motion.a
                                    variants={fadeUp}
                                    href="tel:+9180972535969"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-5 rounded-3xl bg-amber-500 text-white text-lg font-semibold hover:bg-amber-600 transition shadow-lg"
                                >
                                    <Phone className="w-6 h-6" />
                                    Call Now
                                </motion.a>

                                <motion.div variants={fadeUp}>
                                    <Link
                                        href="/book-demo"
                                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-5 rounded-3xl border border-white/15 bg-white/10 text-white text-lg font-semibold hover:bg-white/20 transition shadow-md"
                                    >
                                        Book Free Demo
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}