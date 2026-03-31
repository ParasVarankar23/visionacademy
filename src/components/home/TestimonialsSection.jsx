"use client";

import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        name: "Mrs. Sharma",
        role: "Parent of 10th Std Student",
        rating: 5,
        message:
            "Very good teaching style. My child improved a lot in Maths with clear explanations, regular practice and chapter-wise revision support.",
    },
    {
        name: "Rahul Patil",
        role: "12th Std Student",
        rating: 5,
        message:
            "Physics concepts became easy to understand. Numerical solving and board preparation helped me gain confidence before exams.",
    },
    {
        name: "Mr. Mehta",
        role: "Parent Feedback",
        rating: 5,
        message:
            "Best personal attention and home tuition support. Teacher explains patiently and tracks progress properly every week.",
    },
    {
        name: "Sneha Joshi",
        role: "11th Std Student",
        rating: 5,
        message:
            "Maths became much easier after joining. Doubts are solved properly and practice tests really help before school exams.",
    },
    {
        name: "Mrs. Khan",
        role: "Parent of 9th Std Student",
        rating: 5,
        message:
            "Very disciplined teaching with regular updates. My son has improved in confidence, speed and accuracy in Maths.",
    },
];

export default function TestimonialsSection() {
    const [startIndex, setStartIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCardsToShow(1);
            } else if (window.innerWidth < 1024) {
                setCardsToShow(2);
            } else {
                setCardsToShow(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(testimonials.length - cardsToShow, 0);

    const nextSlide = () => {
        setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 4500);

        return () => clearInterval(interval);
    }, [maxIndex]);

    const visibleTestimonials = testimonials.slice(
        startIndex,
        startIndex + cardsToShow
    );

    return (
        <section
            className="py-12 md:py-16 bg-amber-50 overflow-hidden"
            aria-label="Testimonials section"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <p className="text-amber-500 font-semibold uppercase tracking-wider text-sm md:text-base">
                            Testimonials
                        </p>

                        <h2 className="mt-2 text-3xl md:text-2xl lg:text-4xl font-bold text-blue-950 leading-tight">
                            What Parents & Students Say About Vision Academy in Vile Parle
                        </h2>

                        <p className="mt-4 text-gray-600 leading-8 text-base md:text-lg">
                            Trusted by parents and students in Vile Parle, Mumbai for
                            personalized teaching, regular practice, board exam preparation and
                            better academic results in 9th, 10th, 11th and 12th Maths &
                            Physics.
                        </p>
                    </motion.div>

                    {/* Arrows */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                    >
                        <button
                            onClick={prevSlide}
                            className="w-14 h-14 rounded-full bg-white border border-amber-200 text-blue-900 flex items-center justify-center shadow-sm hover:bg-blue-900 hover:text-white transition duration-300"
                            aria-label="Previous testimonials"
                            title="Previous Testimonials"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="w-14 h-14 rounded-full bg-white border border-amber-200 text-blue-900 flex items-center justify-center shadow-sm hover:bg-blue-900 hover:text-white transition duration-300"
                            aria-label="Next testimonials"
                            title="Next Testimonials"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </motion.div>
                </div>

                {/* Cards */}
                <div className="mt-10 overflow-hidden">
                    <div
                        className={`grid gap-6 ${cardsToShow === 1
                                ? "grid-cols-1"
                                : cardsToShow === 2
                                    ? "grid-cols-2"
                                    : "grid-cols-3"
                            }`}
                    >
                        <AnimatePresence mode="wait">
                            {visibleTestimonials.map((item, index) => (
                                <motion.div
                                    key={`${startIndex}-${index}`}
                                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.96 }}
                                    transition={{ duration: 0.5, delay: index * 0.08 }}
                                    whileHover={{ y: -8 }}
                                    className="bg-white rounded-3xl p-6 md:p-7 shadow-md border border-amber-100 hover:shadow-xl transition duration-300 min-h-[320px] flex flex-col"
                                >
                                    {/* Top */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                                            <User className="w-8 h-8" />
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-blue-900 leading-tight">
                                                {item.name}
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-500 mt-1">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Stars */}
                                    <div className="flex items-center gap-1 text-amber-500 mt-5">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-current" />
                                        ))}
                                    </div>

                                    {/* Message */}
                                    <p className="mt-5 text-gray-700 leading-9 text-base md:text-lg flex-grow">
                                        “{item.message}”
                                    </p>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Dots */}
                <div className="mt-8 flex justify-center gap-3">
                    {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setStartIndex(index)}
                            className={`h-3 rounded-full transition-all duration-300 ${startIndex === index
                                    ? "w-8 bg-blue-900"
                                    : "w-3 bg-blue-200 hover:bg-blue-400"
                                }`}
                            aria-label={`Go to testimonial group ${index + 1}`}
                            title={`Go to testimonial group ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}