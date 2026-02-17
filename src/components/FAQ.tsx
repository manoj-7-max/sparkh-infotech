'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'How long does it take to build a website?',
        answer: 'The timeline depends on the complexity of the project. A standard business website typically takes 2-4 weeks, while a custom web application or e-commerce store may take 4-8 weeks or more. We provide a detailed timeline during the discovery phase.',
    },
    {
        question: 'Do you offer post-launch support?',
        answer: 'Yes! We offer various support and maintenance packages. Our standard plans include 1-6 months of free support depending on the package. We also provide ongoing maintenance for security updates, content changes, and performance optimization.',
    },
    {
        question: 'Can you help with SEO and digital marketing?',
        answer: 'Absolutely. All our websites are built with SEO best practices in mind (fast loading, mobile-friendly, proper structure). We also offer dedicated digital marketing services including SEO, social media management, and content strategy to help you grow.',
    },
    {
        question: 'What technologies do you use?',
        answer: 'We specialize in modern, high-performance technologies. Our core stack includes Next.js (React), Node.js, MongoDB, and Tailwind CSS. accessible. For mobile apps, we use React Native and Flutter.',
    },
    {
        question: 'What is your payment structure?',
        answer: 'Typically, we require a 40% deposit to start the project, 30% after the design approval, and the final 30% before the official launch. We are open to discussing milestones for larger projects.',
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 relative overflow-hidden bg-dark-navy/50">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
                        Frequently Asked <span className="text-electric-orange">Questions</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Got questions? We've got answers.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 ${activeIndex === index
                                ? 'bg-white/10 border-electric-orange/50 shadow-lg shadow-electric-orange/10'
                                : 'bg-white/5 border-white/10 hover:bg-white/10'
                                }`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`text-lg font-bold transition-colors ${activeIndex === index ? 'text-electric-orange' : 'text-white'}`}>
                                    {faq.question}
                                </span>
                                {activeIndex === index ? (
                                    <Minus className="text-electric-orange shrink-0" />
                                ) : (
                                    <Plus className="text-gray-400 shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
