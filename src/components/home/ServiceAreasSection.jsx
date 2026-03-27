import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function ServiceAreasSection() {
    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="text-amber-500 font-semibold uppercase tracking-wider">
                            Service Areas
                        </p>
                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-blue-950">
                            Available for Home Tuition Across Mumbai
                        </h2>
                        <p className="mt-5 text-gray-700 leading-8">
                            Vision Academy provides coaching and home tuition support for
                            students across major areas in Mumbai depending on availability
                            and batch timings.
                        </p>

                        <div className="mt-8 grid sm:grid-cols-2 gap-4">
                            {[
                                "Vile Parle",
                                "Andheri",
                                "Santacruz",
                                "Juhu",
                                "Dadar",
                                "Other Nearby Areas",
                            ].map((area, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-2xl px-4 py-3"
                                >
                                    <MapPin className="w-5 h-5 text-blue-700" />
                                    <span className="font-medium text-gray-800">{area}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-blue-950 rounded-3xl p-8 text-white shadow-xl">
                        <h3 className="text-2xl font-bold">Admissions Open Now</h3>
                        <p className="mt-4 text-blue-100 leading-8">
                            Book a free demo class and get personalized guidance for Maths,
                            Physics and Science for 9th to 12th standard students.
                        </p>

                        <div className="mt-8 space-y-4">
                            <a
                                href="tel:+919999999999"
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-amber-500 text-white font-semibold hover:bg-amber-600 transition"
                            >
                                <Phone className="w-5 h-5" />
                                Call Now
                            </a>

                            <Link
                                href="/book-demo"
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-white/15 bg-white/10 text-white font-semibold hover:bg-white/20 transition"
                            >
                                Book Free Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}