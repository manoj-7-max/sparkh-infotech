'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Free Consultation',
        description: 'We discuss your business needs. You tell us what you want, and we suggest the best solution.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-100'
    },
    {
        number: '02',
        title: 'Project Proposal',
        description: 'We send a detailed plan with clear pricing and timelines. No hidden costs.',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
        border: 'border-purple-100'
    },
    {
        number: '03',
        title: 'Development',
        description: 'Our team starts building your website, app, or installing your security system.',
        color: 'text-yellow-600',
        bg: 'bg-yellow-50',
        border: 'border-yellow-100'
    },
    {
        number: '04',
        title: 'Launch & Support',
        description: 'We go live! Plus, we provide free support to ensure everything runs smoothly.',
        color: 'text-green-600',
        bg: 'bg-green-50',
        border: 'border-green-100'
    }
];

export default function Process() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="relative group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Connector Line (Desktop) */}
                            {index !== steps.length - 1 && (
                                <div className="hidden lg:block absolute top-16 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-100 to-transparent translate-x-1/2 -z-10" />
                            )}

                            <div className={`w-16 h-16 mb-6 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center text-xl font-bold ${step.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                {step.number}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-electric-blue transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
