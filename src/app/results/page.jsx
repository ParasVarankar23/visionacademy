"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const students = [
    {
        id: 1,
        name: "Riya Sharma",
        std: "10th Standard",
        subject: "Mathematics",
        marks: "97",
        year: "2017",
        image: "/students/student.jpeg",
    },
    {
        id: 2,
        name: "Isha Verma",
        std: "10th Standard",
        subject: "Mathematics",
        marks: "98",
        year: "2023",
        image: "/students/student.jpeg",
    },
    {
        id: 3,
        name: "Pooja Sawant",
        std: "10th Standard",
        subject: "Mathematics",
        marks: "96",
        year: "2016",
        image: "/students/student.jpeg",
    },
    {
        id: 4,
        name: "Aryan Patil",
        std: "10th Standard",
        subject: "Mathematics",
        marks: "95",
        year: "2020",
        image: "/students/student.jpeg",
    },
    {
        id: 5,
        name: "Neha More",
        std: "10th Standard",
        subject: "Mathematics",
        marks: "99",
        year: "2024",
        image: "/students/student.jpeg",
    },
    {
        id: 6,
        name: "Sneha More",
        std: "12th Standard",
        subject: "Mathematics",
        marks: "96",
        year: "2019",
        image: "/students/student.jpeg",
    },
    {
        id: 7,
        name: "Anaya Kulkarni",
        std: "12th Standard",
        subject: "Physics",
        marks: "93",
        year: "2021",
        image: "/students/student.jpeg",
    },
    {
        id: 8,
        name: "Tanvi Jadhav",
        std: "12th Standard",
        subject: "Physics + Mathematics",
        marks: "95",
        year: "2025",
        image: "/students/student.jpeg",
    },
    {
        id: 9,
        name: "Khushi Patil",
        std: "12th Standard",
        subject: "Mathematics",
        marks: "97",
        year: "2018",
        image: "/students/student.jpeg",
    },
    {
        id: 10,
        name: "Rohan Deshmukh",
        std: "12th Standard",
        subject: "Physics",
        marks: "94",
        year: "2022",
        image: "/students/student.jpeg",
    },
    {
        id: 11,
        name: "Sakshi Joshi",
        std: "12th Standard",
        subject: "Physics + Mathematics",
        marks: "98",
        year: "2026",
        image: "/students/student.jpeg",
    },
    {
        id: 12,
        name: "Yashika Naik",
        std: "12th Standard",
        subject: "Mathematics",
        marks: "95",
        year: "2020",
        image: "/students/student.jpeg",
    },
    {
        id: 13,
        name: "Pratik Salvi",
        std: "12th Standard",
        subject: "Physics",
        marks: "92",
        year: "2017",
        image: "/students/student.jpeg",
    },
    {
        id: 14,
        name: "Mitali Jadhav",
        std: "10th Standard",
        subject: "Mathematics",
        marks: "94",
        year: "2021",
        image: "/students/student.jpeg",
    },
    {
        id: 15,
        name: "Omkar Shinde",
        std: "12th Standard",
        subject: "Physics + Mathematics",
        marks: "96",
        year: "2024",
        image: "/students/student.jpeg",
    },
];

const tabs = ["All", "10th", "12th", "Physics", "Maths"];

export default function ResultsSection() {
    const [activeTab, setActiveTab] = useState("All");

    const filteredStudents = students.filter((student) => {
        if (activeTab === "All") return true;
        if (activeTab === "10th") return student.std.includes("10th");
        if (activeTab === "12th") return student.std.includes("12th");
        if (activeTab === "Physics") return student.subject.toLowerCase().includes("physics");
        if (activeTab === "Maths") {
            return (
                student.subject.toLowerCase().includes("mathematics") ||
                student.subject.toLowerCase().includes("math")
            );
        }
        return true;
    });

    return (
        <section
            id="results"
            className="bg-gradient-to-b from-amber-50 to-white py-10 md:py-14 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-amber-500 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm"
                    >
                        Our Top Results
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                    >
                        10th & 12th Student Score Highlights
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
                    >
                        We proudly showcase outstanding marks of our 10th Mathematics and 12th
                        Physics & Mathematics students through expert guidance and regular practice.
                    </motion.p>
                </div>

                {/* Tabs */}
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 border ${activeTab === tab
                                    ? "bg-amber-500 text-white border-amber-500 shadow-md"
                                    : "bg-white text-gray-700 border-amber-200 hover:bg-amber-50"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Students Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-10"
                    >
                        {filteredStudents.map((student, index) => (
                            <motion.div
                                key={student.id}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: index * 0.03 }}
                                viewport={{ once: true }}
                                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-amber-100 transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Student Image */}
                                <div className="relative w-full h-56 overflow-hidden">
                                    <Image
                                        src={student.image}
                                        alt={student.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />

                                    {/* Marks Badge */}
                                    <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                                        {student.marks} Marks
                                    </div>

                                    {/* Year Badge */}
                                    <div className="absolute top-3 left-3 bg-white/90 text-amber-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                                        {student.year}
                                    </div>
                                </div>

                                {/* Student Info */}
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-gray-900 truncate">
                                        {student.name}
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">{student.std}</p>

                                    <div className="mt-3 space-y-1.5">
                                        <p className="text-sm text-gray-700">
                                            <span className="font-semibold text-gray-900">Subject:</span>{" "}
                                            {student.subject}
                                        </p>

                                        <p className="text-sm text-gray-700">
                                            <span className="font-semibold text-gray-900">Marks:</span>{" "}
                                            <span className="text-amber-600 font-bold">
                                                {student.marks} Marks
                                            </span>
                                        </p>

                                        <p className="text-sm text-gray-700">
                                            <span className="font-semibold text-gray-900">Year:</span>{" "}
                                            <span className="text-gray-800 font-medium">{student.year}</span>
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}