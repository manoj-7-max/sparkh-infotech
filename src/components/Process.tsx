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
        title: 'Design',
        description: 'We create stunning, user-centric designs that blend aesthetics with functionality for an immersive experience.',
        icon: Palette,
        color: 'text-pink-500',
        bg: 'bg-pink-500/10',
        border: 'border-pink-500/20',
    },
    {
        id: 4,
        title: 'Development',
        description: 'Our developers bring the design to life with clean, scalable, and high-performance code.',
        icon: Code2,
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
    },
    {
        id: 5,
        title: 'Launch & Scale',
        description: 'We deploy your solution and provide ongoing support to help your business grow and evolve.',
        icon: Rocket,
        color: 'text-electric-orange',
        bg: 'bg-electric-orange/10',
        border: 'border-electric-orange/20',
    },
];

export default function Process() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6"
                    >
                        Our <span className="text-electric-orange">Process</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-500 max-w-2xl mx-auto text-lg"
                    >
                        From concept to reality, we follow a streamlined workflow to deliver excellence.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden lg:block" />

                    {/* Connecting Line (Mobile) */}
                    <div className="absolute top-0 left-8 w-1 h-full bg-gray-200 -translate-x-1/2 lg:hidden" />

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="relative flex flex-row lg:flex-col items-start lg:items-center gap-6 lg:gap-4 lg:text-center group"
                            >
                                {/* Step Indicator */}
                                <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${step.bg} ${step.color} border ${step.border} backdrop-blur-xl shadow-lg`}>
                                    <step.icon size={32} />
                                    <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-sm font-bold text-gray-900 shadow-md`}>
                                        {step.id}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-2 pt-2">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-electric-orange transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-electric-orange/5 blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
}
