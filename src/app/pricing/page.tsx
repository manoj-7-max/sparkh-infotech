'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import { Check, Star, Zap, Crown } from 'lucide-react';
import Link from 'next/link';

const plans = [
    {
        name: 'Starter',
        price: '₹9,999',
        description: 'Perfect for small businesses and personal projects.',
        features: [
            'Responsive Website (5 Pages)',
            'Basic SEO Setup',
            'Contact Form Integration',
            '1 Month Support',
            'Fast Loading Speed',
        ],
        icon: Star,
        color: 'text-blue-400',
        buttonColor: 'bg-white/10 hover:bg-white/20',
    },
    {
        name: 'Professional',
        price: '₹24,999',
        description: 'Ideal for growing businesses needing dynamic features.',
        features: [
            'Dynamic Website (10 Pages)',
            'Advanced SEO & Analytics',
            'CMS Integration (Admin Panel)',
            'Social Media Integration',
            '3 Months Support',
            'Priority Email Support',
        ],
        icon: Zap,
        color: 'text-electric-orange',
        buttonColor: 'bg-electric-orange hover:bg-orange-600',
        popular: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Tailored solutions for large-scale applications.',
        features: [
            'Custom Web Application',
            'E-commerce Functionality',
            'Database Design & API',
            'Cloud Hosting Setup',
            '6 Months Support',
            'Dedicated Project Manager',
        ],
        icon: Crown,
        color: 'text-purple-400',
        buttonColor: 'bg-white/10 hover:bg-white/20',
    },
];

export default function Pricing() {
    return (
        <main className="bg-dark-navy min-h-screen">
            <Navbar />

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
                            Transparent <span className="text-electric-orange">Pricing</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Choose a plan that fits your needs. No hidden fees.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`relative p-8 rounded-2xl bg-white/5 border ${plan.popular ? 'border-electric-orange scale-105 shadow-2xl shadow-electric-orange/20 z-10' : 'border-white/10 hover:border-white/20'
                                    } backdrop-blur-sm transition-all duration-300 flex flex-col h-full`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-electric-orange text-white text-xs font-bold uppercase tracking-wide shadow-lg">
                                        Most Popular
                                    </div>
                                )}

                                <div className={`p-4 rounded-xl bg-white/5 w-fit mb-6 ${plan.color}`}>
                                    <plan.icon className="w-8 h-8" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold text-white mb-4 font-display">
                                    {plan.price}
                                    <span className="text-sm text-gray-400 font-normal ml-1">/ project</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-8">{plan.description}</p>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start text-sm text-gray-300">
                                            <Check className="w-5 h-5 text-electric-orange mr-3 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/contact"
                                    className={`w-full py-4 rounded-lg font-bold text-white text-center transition-colors ${plan.buttonColor}`}
                                >
                                    Get Started
                                </Link>
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
