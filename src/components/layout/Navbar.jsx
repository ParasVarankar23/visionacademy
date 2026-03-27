"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, GraduationCap } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Home Tuition", href: "/home-tuition-mumbai" },
    { name: "Results", href: "/results" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Top Info Bar */}
            <div className="w-full bg-blue-900 text-white text-sm hidden md:block">
                <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="font-medium">
                            📍 Mumbai | Home Tuition & Coaching Classes
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="bg-amber-400 text-blue-950 font-semibold px-3 py-1 rounded-full text-xs">
                            Admissions Open
                        </span>
                        <a
                            href="tel:+919999999999"
                            className="flex items-center gap-2 hover:text-amber-300 transition"
                        >
                            <Phone size={14} />
                            +91 99999 99999
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <header
                className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                        ? "bg-white/95 backdrop-blur-md shadow-lg"
                        : "bg-white shadow-sm"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo / Brand */}
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center shadow-md">
                                <GraduationCap size={26} />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="text-lg sm:text-xl font-bold text-blue-900">
                                    Vision Academy
                                </span>
                                <span className="text-xs sm:text-sm text-gray-600 font-medium">
                                    Maths • Physics • Science
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-700 font-medium hover:text-blue-700 transition duration-200 relative group"
                                >
                                    {link.name}
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop Buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            <a
                                href="tel:+919999999999"
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-blue-200 text-blue-800 font-semibold hover:bg-blue-50 transition"
                            >
                                <Phone size={18} />
                                Call Now
                            </a>

                            <Link
                                href="/book-demo"
                                className="inline-flex items-center px-5 py-2.5 rounded-xl bg-amber-500 text-white font-semibold shadow-md hover:bg-amber-600 transition"
                            >
                                Book Demo
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-lg text-blue-900 hover:bg-blue-50 transition"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="bg-white border-t border-gray-100 shadow-md px-4 py-4">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-4 flex flex-col gap-3">
                            <a
                                href="tel:+919999999999"
                                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-blue-200 text-blue-800 font-semibold hover:bg-blue-50 transition"
                            >
                                <Phone size={18} />
                                Call Now
                            </a>

                            <Link
                                href="/book-demo"
                                onClick={() => setIsOpen(false)}
                                className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-amber-500 text-white font-semibold shadow-md hover:bg-amber-600 transition"
                            >
                                Book Free Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}