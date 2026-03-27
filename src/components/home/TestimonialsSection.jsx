import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Parent Review",
        text: "Very good teaching style. My child improved in Maths and Science with clear explanations and regular practice.",
    },
    {
        name: "Student Review",
        text: "Physics concepts became easy to understand. Numerical solving and test preparation helped a lot before exams.",
    },
    {
        name: "Parent Feedback",
        text: "Best personal attention and home tuition support. Teacher explains patiently and tracks progress properly.",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-16 md:py-20 bg-amber-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-amber-500 font-semibold uppercase tracking-wider">
                        Testimonials
                    </p>
                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-blue-950">
                        What Parents & Students Say
                    </h2>
                    <p className="mt-4 text-gray-600 leading-8">
                        Trust, personal attention and result-oriented teaching are the
                        biggest reasons parents and students choose Vision Academy.
                    </p>
                </div>

                <div className="mt-12 grid md:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-6 shadow-md border border-amber-100"
                        >
                            <div className="flex items-center gap-1 text-amber-500 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 leading-8">“{item.text}”</p>
                            <p className="mt-5 font-semibold text-blue-900">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}