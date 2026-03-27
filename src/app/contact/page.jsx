"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        studentClass: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();

        const { name, email, phone, studentClass, message } = formData;

        if (!name || !email || !phone || !studentClass || !message) {
            alert("Please fill all fields.");
            return;
        }

        const whatsappNumber = "918097253596";

        const whatsappMessage =
            `Hello Vision Academy,%0A%0A` +
            `I want to inquire about tuition classes.%0A%0A` +
            `Name: ${name}%0A` +
            `Email: ${email}%0A` +
            `Contact Number: ${phone}%0A` +
            `Class: ${studentClass}%0A` +
            `Message: ${message}`;

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <section className="bg-gradient-to-b from-white via-amber-50/40 to-white px-4 sm:px-6 lg:px-8 py-4 md:py-10">
            {/* Heading */}
            <div className="max-w-4xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-amber-500 font-semibold uppercase tracking-[0.22em] text-sm"
                >
                    Contact Us
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
                >
                    Get in Touch with Vision Academy
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
                >
                    Fill in your details and send your inquiry directly on WhatsApp for
                    quick response regarding tuition classes.
                </motion.p>
            </div>

            {/* Form Card */}
            <div className="max-w-4xl mx-auto mt-10 sm:mt-12">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="bg-white rounded-[28px] shadow-lg border border-amber-100 p-5 sm:p-7 md:p-8"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                        Send Your Inquiry
                    </h2>

                    <form onSubmit={handleWhatsAppSubmit} className="mt-7 space-y-5">
                        {/* Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-800 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full h-13 sm:h-14 rounded-2xl border border-slate-200 px-4 sm:px-5 text-base outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-800 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full h-13 sm:h-14 rounded-2xl border border-slate-200 px-4 sm:px-5 text-base outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition"
                                />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-800 mb-2">
                                    Contact Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your contact number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full h-13 sm:h-14 rounded-2xl border border-slate-200 px-4 sm:px-5 text-base outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition"
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
                                    className="w-full h-13 sm:h-14 rounded-2xl border border-slate-200 px-4 sm:px-5 text-base outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition bg-white"
                                >
                                    <option value="">Choose Class</option>
                                    <option value="9th Standard">9th Standard</option>
                                    <option value="10th Standard">10th Standard</option>
                                    <option value="11th Standard">11th Standard</option>
                                    <option value="12th Standard">12th Standard</option>
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-800 mb-2">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full rounded-2xl border border-slate-200 px-4 sm:px-5 py-4 text-base outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition resize-none"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full h-13 sm:h-14 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            Send on WhatsApp
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}