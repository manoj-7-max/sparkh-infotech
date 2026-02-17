'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck, MapPin, Users, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax effects
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-blue-100/50 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] bg-orange-100/50 rounded-full blur-[100px]"
                />
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm backdrop-blur-sm"
                    >
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-orange opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-orange"></span>
                        </span>
                        <span className="text-xs font-bold text-gray-900 tracking-wide uppercase">Tamil Nadu's #1 Tech Partner</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight leading-[1.1] text-gray-900"
                    >
                        Build Smart. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-orange to-orange-600">Stay Secure.</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        From advanced <strong>CCTV Security</strong> to high-performance <strong>Websites & Apps</strong>, we power businesses across Chennai, Chengalpattu, and beyond.
                    </motion.p>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="flex flex-wrap justify-center gap-4 md:gap-8 py-4"
                    >
                        <div className="flex items-center gap-2 text-gray-700 font-medium">
                            <MapPin className="text-electric-orange w-5 h-5" /> Tamil Nadu Based
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 font-medium">
                            <Users className="text-electric-orange w-5 h-5" /> 100+ Happy Clients
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 font-medium">
                            <ShieldCheck className="text-electric-orange w-5 h-5" /> 24/7 Support
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-gray-900 text-white rounded-full font-bold overflow-hidden transition-all hover:bg-black hover:scale-105 shadow-xl"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get Free Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:bg-[#20bd5a] transition-all shadow-sm flex items-center gap-2"
                        >
                            <MessageCircle className="w-5 h-5" /> WhatsApp Now
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Scroll</span>
            </motion.div>
        </section>
    );
}
