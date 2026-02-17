'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-electric-orange/10" />

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark-navy via-dark-navy/90 to-electric-orange/20" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-white leading-tight">
                        Ready to <span className="text-electric-orange">Ignite</span> Your Digital Presence?
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Join hundreds of successful businesses who have transformed their ideas into reality with Sparkh Infotech.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="/contact"
                            className="group px-8 py-4 bg-electric-orange text-white rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,107,0,0.4)] hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] transition-all hover:scale-105"
                        >
                            <span className="flex items-center gap-2">
                                Start Your Project <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link
                            href="/portfolio"
                            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            View Our Work
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
