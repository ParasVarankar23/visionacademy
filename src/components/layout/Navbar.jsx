"use client";

import { GraduationCap, MapPin, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
    { name: "Home", href: "/", label: "Vision Academy Home" },
    { name: "About", href: "/about", label: "About Vision Academy" },
    { name: "Courses", href: "/courses", label: "Maths and Physics Courses" },
    { name: "Teacher", href: "/teacher", label: "Meet Vishal Sir" },
    { name: "Results", href: "/results", label: "Student Results" },
    { name: "Contact", href: "/contact", label: "Contact Vision Academy" },
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
                    <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-amber-300" />
                        <span className="font-medium">
                            Vile Parle, Mumbai | Home Tuition for Maths & Physics
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="bg-amber-400 text-blue-950 font-semibold px-3 py-1 rounded-full text-xs">
                            Admissions Open
                        </span>

                        <a
                            href="tel:+918097253596"
                            className="flex items-center gap-2 hover:text-amber-300 transition"
                            aria-label="Call Vision Academy at 8097253596"
                            title="Call Vision Academy"
                        >
                            <Phone size={14} />
                            +91 80972 53596
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
                        <Link
                            href="/"
                            className="flex items-center gap-3"
                            aria-label="Go to Vision Academy Home page"
                            title="Vision Academy Home Tutor"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center shadow-md">
                                <GraduationCap size={26} />
                            </div>

                            <div className="flex flex-col leading-tight">
                                <span className="text-lg sm:text-xl font-bold text-blue-900">
                                    Vision Academy
                                </span>
                                <span className="text-xs sm:text-sm text-gray-600 font-medium">
                                    Vile Parle Home Tutor | Maths & Physics
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav
                            className="hidden lg:flex items-center gap-8"
                            aria-label="Main navigation"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    aria-label={link.label}
                                    title={link.label}
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
                                href="tel:+918097253596"
                                aria-label="Call Vision Academy now"
                                title="Call Vision Academy"
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-blue-200 text-blue-800 font-semibold hover:bg-blue-50 transition"
                            >
                                <Phone size={18} />
                                Call Now
                            </a>

                            <Link
                                href="/book-demo"
                                aria-label="Book free demo class"
                                title="Book Free Demo Class"
                                className="inline-flex items-center px-5 py-2.5 rounded-xl bg-amber-500 text-white font-semibold shadow-md hover:bg-amber-600 transition"
                            >
                                Book Free Demo
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-lg text-blue-900 hover:bg-blue-50 transition"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            title={isOpen ? "Close menu" : "Open menu"}
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
                        <div className="mb-4 rounded-xl bg-blue-50 p-3 text-sm text-blue-900 font-medium">
                            Vision Academy | Home Tuition in Vile Parle for Maths & Physics
                        </div>

                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    aria-label={link.label}
                                    title={link.label}
                                    className="px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-4 flex flex-col gap-3">
                            <a
                                href="tel:+918097253596"
                                aria-label="Call Vision Academy now"
                                title="Call Vision Academy"
                                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-blue-200 text-blue-800 font-semibold hover:bg-blue-50 transition"
                            >
                                <Phone size={18} />
                                Call Now
                            </a>

                            <Link
                                href="/book-demo"
                                onClick={() => setIsOpen(false)}
                                aria-label="Book free demo class"
                                title="Book Free Demo Class"
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