"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const students = [
    {
        id: 1,
        name: "Aarav Patil",
        std: "9th Standard",
        subject: "Mathematics",
        marks: "95",
        year: "2016",
        image: "/students/student1.jpg",
    },
    {
        id: 2,
        name: "Riya Sharma",
        std: "10th Standard",
        subject: "Mathematics",
        marks: "97",
        year: "2017",
        image: "/students/student2.jpg",
    },
    {
        id: 3,
        name: "Vedant Joshi",
        std: "11th Standard",
        subject: "Physics",
        marks: "92",
        year: "2018",
        image: "/students/student3.jpg",
    },
    {
        id: 4,
        name: "Sneha More",
        std: "12th Standard",
        subject: "Mathematics",
        marks: "96",
        year: "2019",
        image: "/students/student4.jpg",
    },
    {
        id: 5,
        name: "Atharva Naik",
        std: "11th Standard",
        subject: "Physics + Mathematics",
        marks: "94",
        year: "2020",
        image: "/students/student5.jpg",
    },
    {
        id: 6,
        name: "Anaya Kulkarni",
        std: "12th Standard",
        subject: "Physics",
        marks: "93",
        year: "2021",
        image: "/students/student6.jpg",
    },
    {
        id: 7,
        name: "Soham Deshmukh",
        std: "9th Standard",
        subject: "Mathematics",
        marks: "91",
        year: "2022",
        image: "/students/student7.jpg",
    },
    {
        id: 8,
        name: "Isha Verma",
        std: "10th Standard",
        subject: "Mathematics",
        marks: "98",
        year: "2023",
        image: "/students/student8.jpg",
    },
    {
        id: 9,
        name: "Omkar Pawar",
        std: "11th Standard",
        subject: "Mathematics",
        marks: "90",
        year: "2024",
        image: "/students/student9.jpg",
    },
    {
        id: 10,
        name: "Tanvi Jadhav",
        std: "12th Standard",
        subject: "Physics + Mathematics",
        marks: "95",
        year: "2025",
        image: "/students/student10.jpg",
    },
    {
        id: 11,
        name: "Yash Thakur",
        std: "9th Standard",
        subject: "Mathematics",
        marks: "93",
        year: "2026",
        image: "/students/student11.jpg",
    },
    {
        id: 12,
        name: "Pooja Sawant",
        std: "10th Standard",
        subject: "Mathematics",
        marks: "96",
        year: "2016",
        image: "/students/student12.jpg",
    },
    {
        id: 13,
        name: "Aditya Salvi",
        std: "11th Standard",
        subject: "Physics",
        marks: "91",
        year: "2017",
        image: "/students/student13.jpg",
    },
    {
        id: 14,
        name: "Khushi Patil",
        std: "12th Standard",
        subject: "Mathematics",
        marks: "97",
        year: "2018",
        image: "/students/student14.jpg",
    },
    {
        id: 15,
        name: "Pranav Kale",
        std: "11th Standard",
        subject: "Physics + Mathematics",
        marks: "94",
        year: "2019",
        image: "/students/student15.jpg",
    },
];

export default function ResultsSection() {
    return (
        <section
            id="results"
            className="bg-gradient-to-b from-amber-50 to-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-amber-500 font-semibold uppercase tracking-[0.2em] text-sm sm:text-base"
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
                        15 Students, Outstanding Results
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        className="mt-5 text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed"
                    >
                        Our students have consistently achieved excellent academic performance
                        from 2016 to 2026 through dedicated guidance, concept clarity, and regular practice.
                    </motion.p>
                </div>

                {/* Students Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {students.map((student, index) => (
                        <motion.div
                            key={student.id}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.04 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-amber-100 transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Student Image */}
                            <div className="relative w-full h-72 overflow-hidden">
                                <Image
                                    src={student.image}
                                    alt={student.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Marks Badge */}
                                <div className="absolute top-3 right-3 bg-amber-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-md">
                                    {student.marks}%
                                </div>

                                {/* Year Badge */}
                                <div className="absolute top-3 left-3 bg-white/90 text-amber-600 text-sm font-bold px-3 py-1.5 rounded-full shadow-md">
                                    {student.year}
                                </div>
                            </div>

                            {/* Student Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 truncate">
                                    {student.name}
                                </h3>

                                <p className="text-sm text-gray-500 mt-1">{student.std}</p>

                                <div className="mt-4 space-y-2">
                                    <p className="text-sm text-gray-700">
                                        <span className="font-semibold text-gray-900">Subject:</span>{" "}
                                        {student.subject}
                                    </p>

                                    <p className="text-sm text-gray-700">
                                        <span className="font-semibold text-gray-900">Marks:</span>{" "}
                                        <span className="text-amber-600 font-bold">{student.marks}%</span>
                                    </p>

                                    <p className="text-sm text-gray-700">
                                        <span className="font-semibold text-gray-900">Year:</span>{" "}
                                        <span className="text-gray-800 font-medium">{student.year}</span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}