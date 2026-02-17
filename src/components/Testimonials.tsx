'use client';

import { motion } from 'framer-motion';
import { Quote, Camera } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
    {
        id: 1,
        name: "Ramesh Kumar",
        role: "Owner, RK Electronics",
        content: "Sparkh Infotech installed 8 CCTVs in my showroom. Very neat work and mobile view is crystal clear. Highly recommended for Kancheepuram businesses.",
        initial: "R"
    },
    {
        id: 2,
        name: "Priya Lakshmi",
        role: "Director, EduRise Academy",
        content: "We got our website developed by Manoj and team. It looks very professional and we are getting new admissions through Google now.",
        initial: "P"
    },
    {
        id: 3,
        name: "Karthik Raja",
        role: "Founder, GreenOrganics",
        content: "Their POS software made my billing very easy. Now I can track stock from my home. Best support team!",
        initial: "K"
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
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6">
                        Real Work. <span className="text-electric-orange">Real Results.</span>
                    </h2>
                    <p className="text-gray-500">Don't just take our word for it. See our installations and happy clients.</p>
                </div>

                {/* Real Proof Grid (Placeholders) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="relative group rounded-2xl overflow-hidden aspect-video bg-gray-200">
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                                <div className="text-center">
                                    <Camera size={32} className="mx-auto mb-2 opacity-50" />
                                    <span className="text-sm font-medium">Site Installation Photo {item}</span>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-bold">View Project</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonial Carousel */}
                <div className="relative h-[300px] max-w-4xl mx-auto">
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
                            className={`absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 rounded-3xl border border-gray-100 bg-white shadow-xl text-center ${activeIndex !== index ? 'pointer-events-none' : ''}`}
                        >
                            <Quote size={40} className="text-electric-orange/20 mb-4" />
                            <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-bold text-lg">
                                    {testimonial.initial}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">{testimonial.role}</p>
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
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-electric-orange w-6' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
