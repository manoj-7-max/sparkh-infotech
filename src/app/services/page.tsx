'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import { Monitor, Smartphone, Cloud, PenTool, Database, BarChart3, ShieldCheck, Server } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: Monitor,
        title: 'Website Development',
        description: 'Custom, high-performance websites built with Next.js and React tailored to your brand.',
        price: '₹9,999',
        features: ['Responsive Design', 'SEO Optimized', 'CMS Integration', 'Fast Loading'],
        color: 'text-blue-500',
    },
    {
        icon: Smartphone,
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile apps for iOS and Android using Flutter and React Native.',
        price: '₹19,999',
        features: ['iOS & Android', 'Push Notifications', 'API Integration', 'App Store Submission'],
        color: 'text-green-500',
    },
    {
        icon: Cloud,
        title: 'Cloud Solutions',
        description: 'Secure, scalable cloud infrastructure and migration services on AWS, Azure, and Google Cloud.',
        price: '₹14,999',
        features: ['AWS / Azure', 'Server Setup', 'CI/CD Pipelines', 'Security Audits'],
        color: 'text-purple-500',
    },
    {
        icon: PenTool,
        title: 'UI/UX Design',
        description: 'User-centric design that enhances engagement and delivers intuitive digital experiences.',
        price: '₹4,999',
        features: ['Prototyping', 'Wireframing', 'User Research', 'Figma Files'],
        color: 'text-pink-500',
    },
    {
        icon: Database,
        title: 'Software Development',
        description: 'Enterprise-grade software solutions to streamline operations and boost productivity.',
        price: 'Custom',
        features: ['Custom Logic', 'Database Design', 'API Development', 'Maintenance'],
        color: 'text-orange-500',
    },
    {
        icon: BarChart3,
        title: 'Digital Marketing',
        description: 'Data-driven marketing strategies to increase visibility, leads, and conversions.',
        price: '₹7,999',
        features: ['SEO / SEM', 'Social Media', 'Content Strategy', 'Analytics'],
        color: 'text-yellow-500',
    },
];

export default function Services() {
    return (
        <main className="bg-dark-navy min-h-screen">
            <Navbar />

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
                            Our <span className="text-electric-orange">Expertise</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Solutions designed to scale with your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-electric-orange/50 transition-all duration-300 hover:bg-white/10 flex flex-col h-full"
                            >
                                <div className={`p-4 rounded-xl bg-white/5 w-fit mb-6 group-hover:bg-electric-orange/10 transition-colors ${service.color}`}>
                                    <service.icon className="w-8 h-8" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-orange transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {service.description}
                                </p>

                                <div className="mb-6 space-y-2">
                                    {service.features.map((feature) => (
                                        <div key={feature} className="flex items-center text-sm text-gray-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-electric-orange mr-2" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                                    <div>
                                        <span className="text-xs text-gray-500 uppercase tracking-wide">Starting from</span>
                                        <div className="text-lg font-bold text-white">{service.price}</div>
                                    </div>
                                    <Link href="/contact" className="px-4 py-2 rounded-lg bg-white/5 hover:bg-electric-orange text-white text-sm font-medium transition-colors">
                                        Book Now
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQ />
            <CTA />
            <Footer />
        </main>
    );
}
