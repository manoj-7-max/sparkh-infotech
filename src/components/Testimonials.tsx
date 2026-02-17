'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
    {
        id: 1,
        name: "Manoj",
        role: "Founder, Sparkh Infotech",
        content: "We are committed to delivering excellence. Our team works tirelessly to ensure every project meets the highest standards of quality and innovation.",
        initial: "M"
    },
    {
        id: 2,
        name: "Sarah Williams",
        role: "Marketing Director, EduSmart",
        content: "Working with Sparkh was a breeze. They understood our vision perfectly and executed it with precision. The UI/UX of our new app is top-notch!",
        initial: "S"
    },
    {
        id: 3,
        name: "David Chen",
        role: "Founder, GreenEarth",
        content: "Exceptional service and support. They didn't just build a website; they built a comprehensive digital solution that solved our core business problems. Highly recommended!",
        initial: "D"
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6">
                        Client <span className="text-electric-orange">Stories</span>
                    </h2>
                    <p className="text-gray-500">See what our partners have to say about working with us.</p>
                </div>

                <div className="relative h-[400px] md:h-[300px]">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{
                                opacity: activeIndex === index ? 1 : 0,
                                x: activeIndex === index ? 0 : (index < activeIndex ? -100 : 100),
                                scale: activeIndex === index ? 1 : 0.95
                            }}
                            transition={{ duration: 0.5 }}
                            className={`absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 rounded-3xl border border-gray-100 bg-white/80 backdrop-blur-sm shadow-xl ${activeIndex !== index ? 'pointer-events-none' : ''}`}
                        >
                            <Quote size={48} className="text-electric-orange/20 mb-6" />
                            <p className="text-lg md:text-xl text-gray-600 text-center italic mb-8 max-w-2xl leading-relaxed">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-orange to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                                    {testimonial.initial}
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-electric-orange font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-electric-orange' : 'bg-gray-200 hover:bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
