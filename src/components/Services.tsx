'use client';

import { motion } from 'framer-motion';
import { Monitor, Smartphone, Cloud, PenTool, Database, BarChart3, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: Monitor,
        title: 'Website Development',
        description: 'Custom, high-performance websites built with Next.js and React tailored to your brand.',
        color: 'text-blue-500',
    },
    {
        icon: Smartphone,
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile apps for iOS and Android using Flutter and React Native.',
        color: 'text-green-500',
    },
    {
        icon: Cloud,
        title: 'Cloud Solutions',
        description: 'Secure, scalable cloud infrastructure and migration services on AWS, Azure, and Google Cloud.',
        color: 'text-purple-500',
    },
    {
        icon: PenTool,
        title: 'UI/UX Design',
        description: 'User-centric design that enhances engagement and delivers intuitive digital experiences.',
        color: 'text-pink-500',
    },
    {
        icon: Database,
        title: 'Software Development',
        description: 'Enterprise-grade software solutions to streamline operations and boost productivity.',
        color: 'text-orange-500',
    },
    {
        icon: BarChart3,
        title: 'Digital Marketing',
        description: 'Data-driven marketing strategies to increase visibility, leads, and conversions.',
        color: 'text-yellow-500',
    },
];

export default function Services() {
    return (
        <section className="py-24 bg-dark-navy relative overflow-hidden" id="services">
            <div className="absolute top-0 right-0 w-96 h-96 bg-electric-orange/5 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-20" />

            <div className="container mx-auto px-4 z-10 relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white mb-4">
                        Our Core <span className="text-electric-orange">Services</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive digital solutions designed to propel your business forward in the digital age.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-electric-orange/50 transition-all duration-300 hover:bg-white/10"
                        >
                            <div className={`p-4 rounded-xl bg-white/5 w-fit mb-6 group-hover:bg-electric-orange/10 transition-colors ${service.color}`}>
                                <service.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-orange transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <Link
                                href="/services"
                                className="inline-flex items-center text-sm font-medium text-electric-orange hover:text-white transition-colors"
                            >
                                Learn More <CheckCircle className="w-4 h-4 ml-2" />
                            </Link>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric-orange/0 via-transparent to-transparent group-hover:from-electric-orange/5 transition-all duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
