import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-blue-950 text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">Vision Academy</h2>
                        <p className="mt-4 text-blue-100 leading-7">
                            Expert coaching and home tuition for 9th, 10th, 11th and 12th
                            students in Mumbai. Special guidance for Maths, Physics and
                            Science with personalized attention.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-amber-400 mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-blue-100">
                            <li>
                                <Link href="/" className="hover:text-amber-300 transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-amber-300 transition">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/courses"
                                    className="hover:text-amber-300 transition"
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-amber-300 transition"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-amber-400 mb-4">
                            Contact Info
                        </h3>
                        <div className="space-y-4 text-blue-100">
                            <p className="flex items-center gap-3">
                                <Phone size={18} />
                                +91 99999 99999
                            </p>
                            <p className="flex items-center gap-3">
                                <Mail size={18} />
                                visionacademy@gmail.com
                            </p>
                            <p className="flex items-center gap-3">
                                <MapPin size={18} />
                                Mumbai, Maharashtra
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-blue-800 mt-10 pt-6 text-center text-sm text-blue-200">
                    © {new Date().getFullYear()} Vision Academy. All rights reserved.
                </div>
            </div>
        </footer>
    );
}