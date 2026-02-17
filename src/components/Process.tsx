'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Target, Palette, Code2, Rocket } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: 'Discovery',
        description: 'We dive deep into your vision, understanding your goals, audience, and challenges to build a solid foundation.',
        icon: Lightbulb,
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
        border: 'border-yellow-400/20',
    },
    {
        id: 2,
        title: 'Strategy',
        description: 'Our team crafts a tailored roadmap, selecting the right technologies and approach to ensure success.',
        icon: Target,
        color: 'text-red-500',
        bg: 'bg-red-500/10',
        border: 'border-red-500/20',
    },
    {
        id: 3,
        number: '01',
        title: 'Free Consultation',
        description: 'We discuss your business needs. You tell us what you want, and we suggest the best solution.',
        color: 'text-blue-600',
        bg: 'bg-blue-50'
    },
    {
        number: '02',
        title: 'Project Proposal',
        description: 'We send a detailed plan with clear pricing and timelines. No hidden costs.',
        color: 'text-purple-600',
        bg: 'bg-purple-50'
    },
    {
        number: '03',
        title: 'Development',
        description: 'Our team starts building your website, app, or installing your security system.',
        color: 'text-yellow-600',
        bg: 'bg-yellow-50'
    },
    {
        number: '04',
        title: 'Launch & Support',
        description: 'We go live! Plus, we provide free support to ensure everything runs smoothly.',
        color: 'text-green-600',
        bg: 'bg-green-50'
    }
];

export default function Process() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold font-display text-dark-charcoal mb-4"
                    >
                        How We <span className="text-electric-blue">Work</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-500 max-w-2xl mx-auto"
                    >
                        Simple, transparent, and fast. We don’t complicate things.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden lg:block" />

                    {/* Connecting Line (Mobile) */}
                    <div className="absolute top-0 left-8 w-1 h-full bg-gray-200 -translate-x-1/2 lg:hidden" />

                </p>
            </div>
        </motion.div>
    ))
}
                    </div >
                </div >
            </div >
    {/* Background Glow */ }
    < div className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-electric-orange/5 blur-[100px] rounded-full pointer-events-none" />
        </section >
    );
}
