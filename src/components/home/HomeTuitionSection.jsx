import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function HomeTuitionSection() {
    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-400/10 rounded-full translate-y-1/3 -translate-x-1/3"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <p className="text-amber-300 font-semibold uppercase tracking-wider">
                                Home Tuition in Mumbai
                            </p>
                            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
                                Personalized Home Tuition for Better Understanding & Results
                            </h2>
                            <p className="mt-5 text-blue-100 leading-8">
                                For students who need extra attention, one-to-one home tuition
                                is available in Mumbai. This helps improve focus, confidence,
                                concept clarity and academic performance.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "1-to-1 personalized learning",
                                "Flexible timings",
                                "Concept clarity",
                                "Regular revision",
                                "Board exam support",
                                "Progress tracking",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 rounded-2xl p-4 flex items-center gap-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-amber-300 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 mt-8 flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/home-tuition-mumbai"
                            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-amber-500 text-white font-semibold hover:bg-amber-600 transition"
                        >
                            Explore Home Tuition
                            <ArrowRight className="w-5 h-5" />
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-white/20 bg-white/10 text-white font-semibold hover:bg-white/20 transition"
                        >
                            Enquire Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}