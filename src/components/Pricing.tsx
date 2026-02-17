'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: 'Starter',
        price: '₹4,999',
        description: 'Perfect for small shops and personal websites.',
        features: [
            '5 Page Website',
            '1 Year Free Domain',
            'Mobile Responsive',
            'WhatsApp Integration',
            'Basic SEO',
            '1 Month Support'
        ],
        highlight: false,
        button: 'Get Started'
    },
    {
        name: 'Business',
        price: '₹14,999',
        description: 'For growing businesses needing a professional online presence.',
        features: [
            '10 Page Dynamic Website',
            'Admin Dashboard',
            'Social Media Integration',
            'Google Map Listing',
            'Advanced SEO',
            '6 Months Support',
            'Email Integration'
        ],
        highlight: true,
        button: 'Best Value'
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Full-scale solutions for large organizations and specific needs.',
        features: [
            'E-commerce Store',
            'Custom Web Application',
            'Payment Gateway',
            'User Accounts & Login',
            'Cloud Hosting Setup',
            '1 Year Priority Support',
            'Mobile App (Android)'
        ],
        highlight: false,
        button: 'Contact Us'
    }
];

export default function Pricing() {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03]" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-dark-charcoal mb-4">
                        Transparent <span className="text-electric-blue">Pricing</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        No hidden charges. Choose the plan that fits your business stage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className={`relative p-8 rounded-3xl border transition-all duration-300 ${plan.highlight
                                    ? 'bg-white border-electric-blue shadow-xl scale-105 z-10'
                                    : 'bg-white border-gray-100 shadow-lg hover:border-blue-200'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-electric-blue text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-4xl font-bold text-dark-charcoal">{plan.price}</span>
                                {plan.price !== 'Custom' && <span className="text-gray-400">/one-time</span>}
                            </div>
                            <p className="text-gray-500 text-sm mb-8 pb-8 border-b border-gray-100">
                                {plan.description}
                            </p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                                        <div className={`mt-0.5 p-0.5 rounded-full ${plan.highlight ? 'bg-blue-100 text-electric-blue' : 'bg-gray-100 text-gray-500'}`}>
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlight
                                    ? 'bg-electric-blue text-white hover:bg-blue-600 shadow-lg hover:shadow-electric-blue/30'
                                    : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200'
                                }`}>
                                {plan.button}
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm">
                        Looking for CCTV or POS Hardware pricing? <a href="/contact" className="text-electric-blue font-bold hover:underline">Request a Custom Quote</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
