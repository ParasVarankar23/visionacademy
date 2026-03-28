"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Page() {
    const [formData, setFormData] = useState({
        studentName: "",
        parentName: "",
        phoneNumber: "",
        studentClass: "",
        tuitionType: "",
        subject: "",
        preferredDate: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const getSubjectOptions = (studentClass) => {
        if (!studentClass) return ["Mathematics", "Physics", "Physics + Mathematics"];

        const cls = studentClass.toLowerCase();

        if (cls.includes("9th") || cls.includes("10th")) {
            return ["Mathematics"];
        }

        if (cls.includes("physics only")) {
            return ["Physics"];
        }

        if (cls.includes("mathematics only")) {
            return ["Mathematics"];
        }

        if (cls.includes("11th") || cls.includes("12th")) {
            return ["Mathematics", "Physics", "Physics + Mathematics"];
        }

        return ["Mathematics", "Physics", "Physics + Mathematics"];
    };

    // Reset subject if class changes and current subject becomes invalid
    useEffect(() => {
        const options = getSubjectOptions(formData.studentClass);
        if (formData.subject && !options.includes(formData.subject)) {
            setFormData((prev) => ({ ...prev, subject: "" }));
        }
    }, [formData.studentClass]);

    const validateForm = (data) => {
        const nameRegex = /^[A-Za-z\s]{2,}$/;
        const phoneRegex = /^[0-9]{10}$/;

        if (!data.studentName || !nameRegex.test(data.studentName.trim())) {
            return { valid: false, message: "Please enter a valid student name." };
        }

        if (!data.parentName || !nameRegex.test(data.parentName.trim())) {
            return { valid: false, message: "Please enter a valid parent name." };
        }

        if (!data.phoneNumber || !phoneRegex.test(data.phoneNumber.trim())) {
            return { valid: false, message: "Please enter a valid 10-digit phone number." };
        }

        if (!data.studentClass) {
            return { valid: false, message: "Please select a class." };
        }

        if (!data.tuitionType) {
            return { valid: false, message: "Please select tuition type." };
        }

        if (!data.subject) {
            return { valid: false, message: "Please select a subject." };
        }

        if (!data.preferredDate) {
            return { valid: false, message: "Please select a preferred date." };
        }

        return { valid: true };
    };

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();

        const validation = validateForm(formData);

        if (!validation.valid) {
            alert(validation.message);
            return;
        }

        const {
            studentName,
            parentName,
            phoneNumber,
            studentClass,
            tuitionType,
            subject,
            preferredDate,
            message,
        } = formData;

        // Your WhatsApp number (with country code, no + sign)
        const whatsappNumber = "918097253596";

        const whatsappMessage = `Hello Vision Academy,

I want to book a FREE Demo Class.

Student Name: ${studentName}
Parent Name: ${parentName}
Phone Number: ${phoneNumber}
Class: ${studentClass}
Tuition Type: ${tuitionType}
Subject: ${subject}
Preferred Date: ${preferredDate}
Message: ${message || "N/A"}`;

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <section className="pt-24 sm:pt-28 pb-14 sm:pb-16 bg-gradient-to-b from-white via-amber-50/40 to-white px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="max-w-4xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-amber-500 font-semibold uppercase tracking-[0.22em] text-sm"
                >
                    Our Demo Classes
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
                >
                    Book Your Free Demo Class
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
                >
                    Fill in the details below and send your request directly on WhatsApp to
                    book a free demo class with Vision Academy.
                </motion.p>
            </div>

            {/* Form Card */}
            <div className="max-w-5xl mx-auto mt-10 sm:mt-12">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="bg-white rounded-[28px] shadow-lg border border-amber-100 p-5 sm:p-7 md:p-8"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                        Demo Class Form
                    </h2>

                    <form onSubmit={handleWhatsAppSubmit} className="mt-7 space-y-5">
                        {/* Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-800 mb-2">
                                    Student Name
                                </label>
                                <input
                                    type="text"
                                    name="studentName"
                                    placeholder="Enter student name"
                                    value={formData.studentName}
                                    onChange={handleChange}
                                    className="w-full h-14 rounded-2xl border border-slate-200 px-4 sm:px-5 text-base outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-800 mb-2">
                                    Parent Name
                                </label>
                                <input
                                    type="text"
                                    name="parentName"
                                    placeholder="Enter parent name"
                                    value={formData.parentName}
                                    onChange={handleChange}
                                    className="w-full h-14 rounded-2xl border border-slate-200 px-4 sm:px-5 text-base outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition"
                                />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-800 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Enter phone number"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    maxLength={10}
                                    className="w-full h-14 rounded-2xl border border-slate-200 px-4 sm:px-5 text-base outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-800 mb-2">
                                    Select Class
                                </label>
                                <select
                                    name="studentClass"
                                    value={formData.studentClass}
                                    onChange={handleChange}
                                    className="w-full h-14 rounded-2xl border border-slate-200 px-4 sm:px-5 text-base outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition bg-white"
                                >
                                    <option value="">Choose Class</option>
                                    <option value="9th Standard">9th Standard</option>
                                    <option value="10th Standard">10th Standard</option>
                                    <option value="9th & 10th Combined (Mathematics)">
                                        9th & 10th Combined (Mathematics)
                                    </option>
                                    <option value="11th Standard">11th Standard</option>
                                    <option value="12th Standard">12th Standard</option>
                                    <option value="11th & 12th Combined (Physics + Mathematics)">
                                        11th & 12th Combined (Physics + Mathematics)
                                    </option>
                                    <option value="11th & 12th Combined (Physics Only)">
                                        11th & 12th Combined (Physics Only)
                                    </option>
                                    <option value="11th & 12th Combined (Mathematics Only)">
                                        11th & 12th Combined (Mathematics Only)
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-800 mb-2">
                                    Select Tuition Type
                                </label>
                                <select
                                    name="tuitionType"
                                    value={formData.tuitionType}
                                    onChange={handleChange}
                                    className="w-full h-14 rounded-2xl border border-slate-200 px-4 sm:px-5 text-base outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition bg-white"
                                >
                                    <option value="">Choose Tuition Type</option>
                                    <option value="Home Tuition">Home Tuition</option>
                                    <option value="Online Tuition">Online Tuition</option>
                                    <option value="Offline Batch">Offline Batch</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-800 mb-2">
                                    Select Subject
                                </label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full h-14 rounded-2xl border border-slate-200 px-4 sm:px-5 text-base outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition bg-white"
                                >
                                    <option value="">Choose Subject</option>
                                    {getSubjectOptions(formData.studentClass).map((subject) => (
                                        <option key={subject} value={subject}>
                                            {subject}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-800 mb-2">
                                    Preferred Date
                                </label>
                                <input
                                    type="date"
                                    name="preferredDate"
                                    value={formData.preferredDate}
                                    onChange={handleChange}
                                    className="w-full h-14 rounded-2xl border border-slate-200 px-4 sm:px-5 text-base outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-800 mb-2">
                                    Message (Optional)
                                </label>
                                <input
                                    type="text"
                                    name="message"
                                    placeholder="Any extra details..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full h-14 rounded-2xl border border-slate-200 px-4 sm:px-5 text-base outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition"
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full h-14 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            Book Free Demo
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}