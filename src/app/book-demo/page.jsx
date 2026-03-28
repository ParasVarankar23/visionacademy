"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

    const [errors, setErrors] = useState({});

    // Handle normal fields
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    // Only alphabets for names
    const handleNameChange = (e) => {
        const { name, value } = e.target;

        if (/^[A-Za-z\s]*$/.test(value)) {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));

            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    // Only numbers for phone, max 10 digits
    const handlePhoneChange = (e) => {
        const value = e.target.value;

        if (/^\d*$/.test(value) && value.length <= 10) {
            setFormData((prev) => ({
                ...prev,
                phoneNumber: value,
            }));

            setErrors((prev) => ({
                ...prev,
                phoneNumber: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        const nameRegex = /^[A-Za-z\s]+$/;

        if (!formData.studentName.trim()) {
            newErrors.studentName = "Student name is required.";
        } else if (!nameRegex.test(formData.studentName.trim())) {
            newErrors.studentName = "Student name should contain only alphabets.";
        }

        if (!formData.parentName.trim()) {
            newErrors.parentName = "Parent name is required.";
        } else if (!nameRegex.test(formData.parentName.trim())) {
            newErrors.parentName = "Parent name should contain only alphabets.";
        }

        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = "Phone number is required.";
        } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Phone number must be exactly 10 digits.";
        }

        if (!formData.studentClass) {
            newErrors.studentClass = "Please select a class.";
        }

        if (!formData.tuitionType) {
            newErrors.tuitionType = "Please select tuition type.";
        }

        if (!formData.subject) {
            newErrors.subject = "Please select a subject.";
        }

        if (!formData.preferredDate) {
            newErrors.preferredDate = "Please select a preferred date.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

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

        const whatsappNumber = "918097253596";

        const whatsappMessage =
            `Hello Vision Academy,%0A%0A` +
            `I want to book a FREE Demo Class.%0A%0A` +
            `Student Name: ${studentName}%0A` +
            `Parent Name: ${parentName}%0A` +
            `Phone Number: ${phoneNumber}%0A` +
            `Class: ${studentClass}%0A` +
            `Tuition Type: ${tuitionType}%0A` +
            `Subject: ${subject}%0A` +
            `Preferred Date: ${preferredDate}%0A` +
            `Message: ${message || "N/A"}`;

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <section className="pt-24 sm:pt-28 pb-14 sm:pb-16 bg-gradient-to-b from-white via-amber-50/40 to-white px-4 sm:px-6 lg:px-8 py-4 md:py-10">
            {/* Heading */}
            <div className="max-w-4xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-amber-500 font-semibold uppercase tracking-[0.22em] text-sm"
                >
                    Book Free Demo
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
                    Fill in the details below and send your request directly on WhatsApp
                    to book a free demo class with Vision Academy.
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
                                    onChange={handleNameChange}
                                    className={`w-full h-14 rounded-2xl border px-4 sm:px-5 text-base outline-none transition ${errors.studentName
                                            ? "border-red-400 focus:ring-4 focus:ring-red-100"
                                            : "border-slate-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                                        }`}
                                />
                                {errors.studentName && (
                                    <p className="text-red-500 text-sm mt-2">{errors.studentName}</p>
                                )}
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
                                    onChange={handleNameChange}
                                    className={`w-full h-14 rounded-2xl border px-4 sm:px-5 text-base outline-none transition ${errors.parentName
                                            ? "border-red-400 focus:ring-4 focus:ring-red-100"
                                            : "border-slate-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                                        }`}
                                />
                                {errors.parentName && (
                                    <p className="text-red-500 text-sm mt-2">{errors.parentName}</p>
                                )}
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
                                    placeholder="Enter 10-digit phone number"
                                    value={formData.phoneNumber}
                                    onChange={handlePhoneChange}
                                    className={`w-full h-14 rounded-2xl border px-4 sm:px-5 text-base outline-none transition ${errors.phoneNumber
                                            ? "border-red-400 focus:ring-4 focus:ring-red-100"
                                            : "border-slate-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                                        }`}
                                />
                                {errors.phoneNumber && (
                                    <p className="text-red-500 text-sm mt-2">{errors.phoneNumber}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-800 mb-2">
                                    Select Class
                                </label>
                                <select
                                    name="studentClass"
                                    value={formData.studentClass}
                                    onChange={handleChange}
                                    className={`w-full h-14 rounded-2xl border px-4 sm:px-5 text-base outline-none transition bg-white ${errors.studentClass
                                            ? "border-red-400 focus:ring-4 focus:ring-red-100"
                                            : "border-slate-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                                        }`}
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
                                {errors.studentClass && (
                                    <p className="text-red-500 text-sm mt-2">{errors.studentClass}</p>
                                )}
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
                                    className={`w-full h-14 rounded-2xl border px-4 sm:px-5 text-base outline-none transition bg-white ${errors.tuitionType
                                            ? "border-red-400 focus:ring-4 focus:ring-red-100"
                                            : "border-slate-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                                        }`}
                                >
                                    <option value="">Choose Tuition Type</option>
                                    <option value="Home Tuition">Home Tuition</option>
                                    <option value="Online Tuition">Online Tuition</option>
                                    <option value="Offline Batch">Offline Batch</option>
                                </select>
                                {errors.tuitionType && (
                                    <p className="text-red-500 text-sm mt-2">{errors.tuitionType}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-800 mb-2">
                                    Select Subject
                                </label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full h-14 rounded-2xl border px-4 sm:px-5 text-base outline-none transition bg-white ${errors.subject
                                            ? "border-red-400 focus:ring-4 focus:ring-red-100"
                                            : "border-slate-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                                        }`}
                                >
                                    <option value="">Choose Subject</option>
                                    <option value="Mathematics">Mathematics</option>
                                    <option value="Physics">Physics</option>
                                    <option value="Physics + Mathematics">Physics + Mathematics</option>
                                </select>
                                {errors.subject && (
                                    <p className="text-red-500 text-sm mt-2">{errors.subject}</p>
                                )}
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
                                    className={`w-full h-14 rounded-2xl border px-4 sm:px-5 text-base outline-none transition ${errors.preferredDate
                                            ? "border-red-400 focus:ring-4 focus:ring-red-100"
                                            : "border-slate-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                                        }`}
                                />
                                {errors.preferredDate && (
                                    <p className="text-red-500 text-sm mt-2">{errors.preferredDate}</p>
                                )}
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