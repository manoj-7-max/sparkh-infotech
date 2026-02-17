'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-navy pt-20">
            {/* Background Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-electric-orange/20 rounded-full blur-3xl opacity-50 animate-pulse" />
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
                <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl opacity-30 animate-pulse delay-2000" />
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium text-electric-orange mb-4">
                        <Zap className="w-4 h-4" />
                        <span>Powering Ideas with Technology</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight leading-tight">
                        Ignite Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-orange to-yellow-400">Digital Future</span> with SPARKH
                    </h1>

                    {/* Subtext */}
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We build futuristic, high-performance websites and apps that drive growth.
                        Transform your business with cutting-edge IT solutions.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-electric-orange text-white rounded-full font-semibold overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_40px_rgba(255,107,0,0.5)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get a Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>

                        <Link
                            href="/services"
                            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            Explore Services
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <ChevronDown className="w-6 h-6" />
                </div>
            </motion.div>
        </section>
    );
}
