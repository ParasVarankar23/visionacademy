import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-amber-300 font-semibold uppercase tracking-wider">
                    Start Today
                </p>
                <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
                    Give Your Child the Right Academic Support
                </h2>
                <p className="mt-5 text-blue-100 text-lg leading-8 max-w-3xl mx-auto">
                    Strong concepts, regular practice, personal attention and
                    result-oriented teaching for school students in Mumbai. Enquire now
                    for home tuition or coaching classes.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/book-demo"
                        className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-amber-500 text-white font-semibold text-lg hover:bg-amber-600 transition"
                    >
                        Book Free Demo
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    <a
                        href="tel:+919999999999"
                        className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-white/20 bg-white/10 text-white font-semibold text-lg hover:bg-white/20 transition"
                    >
                        <Phone className="w-5 h-5" />
                        Call Now
                    </a>
                </div>
            </div>
        </section>
    );
}