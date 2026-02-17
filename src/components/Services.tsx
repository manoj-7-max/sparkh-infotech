'use client';

import { motion } from 'framer-motion';
import { Monitor, Smartphone, Globe, Code, PenTool, Database, ShieldCheck, ShoppingBag, Cpu } from 'lucide-react';

const services = [
    {
        title: 'CCTV Installation',
        description: 'Protect your shop and home with HD cameras. View everything on your mobile from anywhere.',
        icon: ShieldCheck,
        color: 'text-blue-600'
    },
    {
        title: 'Website Development',
        description: 'Get a professional business website that builds trust and brings in new customers from Google.',
        icon: Globe,
        color: 'text-cyan-600'
    },
    {
        title: 'POS Billing Software',
        description: 'Fast, easy billing for retail shops. Manage stock, print bills, and track daily sales effortlessly.',
        icon: ShoppingBag,
        color: 'text-green-600'
    },
    {
        title: 'Mobile Apps',
        description: 'Launch your own Android/iOS app. Send notifications and sell directly to customers\' phones.',
        icon: Smartphone,
        color: 'text-purple-600'
    },
    {
        title: 'E-commerce Store',
        description: 'Start selling online with your own shopping website. Payment gateway and delivery integration included.',
        icon: ShoppingBag,
        color: 'text-orange-600'
    },
    {
        title: 'AI Automation',
        description: 'Save time with smart bots. Automate customer replies and repetitive office tasks.',
        icon: Cpu,
        color: 'text-indigo-600'
    },
];

export default function Services() {
    return (
        <section className="py-32 bg-gray-50 relative">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">
                            Our <span className="text-electric-orange">Solutions</span>
                        </h2>
                        <p className="text-gray-500 max-w-md">
                            From securing your premises to digitizing your operations, we provide end-to-end support.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
