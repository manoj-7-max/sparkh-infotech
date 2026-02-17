'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function LeadCapture() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Here you would integrate with your backend or WhatsApp API
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-electric-orange/20 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                            Let's Build Something <span className="text-electric-orange">Amazing</span>
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            Drop your details below and our team will get back to you with a free consultation and quote within 24 hours.
                        </p>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10"
                            >
                                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-300">We'll be in touch with you shortly.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-electric-orange focus:ring-1 focus:ring-electric-orange outline-none transition-all"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    required
                                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-electric-orange focus:ring-1 focus:ring-electric-orange outline-none transition-all"
                                />
                                <select className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-electric-orange focus:ring-1 focus:ring-electric-orange outline-none transition-all appearance-none">
                                    <option className="bg-gray-900 text-gray-500">Select Service Needed</option>
                                    <option className="bg-gray-900" value="website">Website Development</option>
                                    <option className="bg-gray-900" value="cctv">CCTV Installation</option>
                                    <option className="bg-gray-900" value="app">Mobile App</option>
                                    <option className="bg-gray-900" value="software">Custom Software</option>
                                    <option className="bg-gray-900" value="other">Other</option>
                                </select>
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-electric-orange text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2"
                                >
                                    Get Free Quote <Send size={18} />
                                </button>
                            </form>
                        )}

                        <p className="mt-6 text-xs text-gray-500">
                            Or WhatsApp us directly at <span className="text-electric-orange hover:underline cursor-pointer">+91 98765 43210</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
