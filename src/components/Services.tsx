'use client';

import { motion } from 'framer-motion';
import { Monitor, Smartphone, Globe, Code, PenTool, Database } from 'lucide-react';

const services = [
    {
        title: 'Websites',
        description: 'Blazing fast, SEO-optimized web experiences.',
        icon: Globe,
        color: 'text-blue-400'
    },
    {
        title: 'Mobile Apps',
        description: 'Native & cross-platform apps for iOS and Android.',
        icon: Smartphone,
        color: 'text-green-400'
    },
    {
        title: 'Custom Software',
        description: 'Tailored solutions to automate your business.',
        icon: Code,
        color: 'text-electric-orange'
    },
    {
        title: 'UI/UX Design',
        description: 'Intuitive designs that users fall in love with.',
        icon: PenTool,
        color: 'text-pink-400'
    }
];

export default function Services() {
    return (
        <section className="py-32 bg-deep-navy relative">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">
                            Our <span className="text-electric-orange">Expertise</span>
                        </h2>
                        <p className="text-gray-500 max-w-md">
                            Comprehensive digital solutions designed to help your business grow and succeed in the modern era.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-electric-orange/30 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className={`mb-6 p-4 rounded-2xl bg-gray-50 w-fit ${service.color}`}>
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed text-balance">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
