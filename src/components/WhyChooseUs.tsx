'use client';

import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Users, Banknote, MapPin, Zap } from 'lucide-react';

const features = [
    {
        icon: Banknote,
        title: 'Affordable Pricing',
        description: 'Premium tech solutions that fit your budget. No hidden costs, just honest pricing.',
        color: 'text-green-600',
        bg: 'bg-green-50'
    },
    {
        icon: MapPin,
        title: 'Local Support',
        description: 'We are based in Tamil Nadu. Our team is available for face-to-face meetings and on-site support.',
        color: 'text-blue-600',
        bg: 'bg-blue-50'
    },
    {
        icon: Zap,
        title: 'Fast Delivery',
        description: 'We value your time. Get your website or app live in record time without compromising quality.',
        color: 'text-electric-orange',
        bg: 'bg-orange-50'
    },
    {
        icon: ShieldCheck,
        title: 'Reliable Security',
        description: 'From CCTV to cyber security, we ensure your business assets are always protected.',
        color: 'text-red-600',
        bg: 'bg-red-50'
    },
];

const stats = [
    { value: '100+', label: 'Projects Completed' },
    { value: '50+', label: 'Local Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '24/7', label: 'Support' },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-gray-900 mb-4">
                        Why Choose <span className="text-electric-orange">SPARKH?</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        We combine the expertise of a big tech agency with the care and trust of a local partner.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-electric-orange/30 shadow-sm hover:shadow-xl transition-all duration-300 text-center group"
                        >
                            <div className={`p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform ${feature.bg} ${feature.color}`}>
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
