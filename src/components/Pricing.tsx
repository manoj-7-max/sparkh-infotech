'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const plans = [
    {
        name: 'Starter',
        price: '₹4,999',
        description: 'Perfect for small shops and personal portfolios.',
        features: [
            '5 Page Website',
            'Mobile Responsive',
            'Contact Form',
            '1 Year Free Hosting',
            'WhatsApp Integration'
        ],
        color: 'bg-gray-50 border-gray-200',
        buttonColor: 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50',
    },
    {
        name: 'Business',
        price: '₹14,999',
        description: 'Best for growing businesses needing more power.',
        popular: true,
        features: [
            '10 Page Dynamic Website',
            'SEO Optimization',
            'Admin Dashboard',
            'Social Media Integration',
            '3 Months Free Support',
            'Google Maps Listing'
        ],
        color: 'bg-white border-electric-orange shadow-xl scale-105 z-10',
        buttonColor: 'bg-electric-orange text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20',
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For large-scale operations and custom software.',
        features: [
            'Unlimited Pages',
            'E-commerce / POS Functionality',
            'Custom Web App / Mobile App',
            'Priority 24/7 Support',
            'Advanced Security',
            'Cloud Server Setup'
        ],
        color: 'bg-gray-50 border-gray-200',
        buttonColor: 'bg-gray-900 text-white hover:bg-black',
    },
];

export default function Pricing() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">
                        Simple, Transparent <span className="text-electric-orange">Pricing</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Choose the plan that fits your business needs. No hidden charges.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`relative p-8 rounded-3xl border ${plan.color} flex flex-col`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-electric-orange text-white px-4 py-1 rounded-full text-sm font-bold shadow-md whitespace-nowrap">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8 text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                                <p className="text-sm text-gray-500">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-gray-600 text-sm">
                                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/contact"
                                className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${plan.buttonColor}`}
                            >
                                Get Started <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
