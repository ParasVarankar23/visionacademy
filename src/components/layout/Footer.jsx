import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    const whatsappNumber = "918097253596";
    const whatsappMessage = encodeURIComponent(
        "Hello Vishal Sir, I want to book a free demo class for Vision Academy."
    );

    return (
        <footer className="bg-blue-950 text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Changed from md:grid-cols-3 to lg:grid-cols-4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">Vision Academy</h2>
                        <p className="mt-4 text-blue-100 leading-7">
                            Expert coaching and home tuition for 9th, 10th, 11th and 12th
                            students in Mumbai. Special guidance for Maths, Physics and
                            personalized attention.
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
                                <Link href="/courses" className="hover:text-amber-300 transition">
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-amber-300 transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h3 className="text-lg font-semibold text-amber-400 mb-4">
                            Follow Us
                        </h3>

                        <p className="text-blue-100 leading-7 mb-4">
                            Connect with Vision Academy on social media for updates, demo
                            classes, results and educational content.
                        </p>

                        <div className="flex items-center gap-3 flex-wrap">
                            <a
                                href="https://instagram.com/visionacademyhometutor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 transition"
                                title="Follow Vision Academy on Instagram"
                                aria-label="Follow Vision Academy on Instagram"
                            >
                                <FaInstagram size={20} />
                            </a>

                            <a
                                href="https://facebook.com/visionacademyhometutor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition"
                                title="Follow Vision Academy on Facebook"
                                aria-label="Follow Vision Academy on Facebook"
                            >
                                <FaFacebookF size={20} />
                            </a>

                            <a
                                href="https://youtube.com/@visionacademyhometutor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition"
                                title="Subscribe to Vision Academy on YouTube"
                                aria-label="Subscribe to Vision Academy on YouTube"
                            >
                                <FaYoutube size={20} />
                            </a>

                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition"
                                title="Chat with Vision Academy on WhatsApp"
                                aria-label="Chat with Vision Academy on WhatsApp"
                            >
                                <FaWhatsapp size={20} />
                            </a>
                        </div>

                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 mt-5 text-white font-semibold hover:bg-green-600 transition"
                            title="Chat on WhatsApp"
                            aria-label="Chat with Vision Academy on WhatsApp"
                        >
                            <FaWhatsapp size={18} />
                            WhatsApp Now
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-amber-400 mb-4">
                            Contact Info
                        </h3>
                        <div className="space-y-4 text-blue-100">
                            <p className="flex items-center gap-3">
                                <Phone size={18} />
                                +91 80972 53596
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