'use client';

import { motion } from 'framer-motion';
import { Zap, Clock, ShieldCheck, Users, Code, Award, Rocket } from 'lucide-react';

const features = [
    {
        icon: Rocket,
        title: 'Futuristic Innovation',
        description: 'We leverage cutting-edge tech like AI, Blockchain, and IoT to build scalable solutions.',
        color: 'text-purple-500',
    },
    {
        icon: Clock,
        title: 'Lightning Fast Delivery',
        description: 'Agile methodologies ensure we deliver high-quality products within tight deadlines.',
        color: 'text-electric-orange',
    },
    {
        icon: ShieldCheck,
        title: 'Enterprise-Grade Security',
        description: 'Security-first approach with robust data protection and compliance standards.',
        color: 'text-green-500',
    },
    {
        icon: Users,
        title: 'Transparent Collaboration',
        description: 'We believe in open communication and detailed reporting at every stage.',
        color: 'text-blue-500',
    },
];

const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '30+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '24/7', label: 'Support' },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-50 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-gray-900 mb-4">
                        Why Choose <span className="text-electric-orange">SPARKH?</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        We are more than just a development agency. We are your partners in digital transformation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-electric-orange/30 shadow-md hover:shadow-xl transition-all duration-300 text-center group"
                        >
                            <div className={`p-4 rounded-full bg-gray-50 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform ${feature.color}`}>
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Counter */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-display">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-electric-orange uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
