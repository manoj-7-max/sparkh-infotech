'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const locations = [
    'Chennai', 'Chengalpattu', 'Madurantakam', 'Kancheepuram', 'Tambaram', 'Tirukalukundram'
];

export default function LocalAuthority() {
    return (
        <section className="py-20 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
                        Trusted by Businesses Across <span className="text-electric-orange">Tamil Nadu</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
                        {locations.map((location, index) => (
                            <motion.div
                                key={location}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full border border-gray-200 text-gray-700 font-semibold shadow-sm hover:shadow-md hover:border-electric-orange/30 transition-all cursor-default"
                            >
                                <MapPin className="w-4 h-4 text-electric-orange" />
                                {location}
                            </motion.div>
                        ))}
                    </div>

                    <p className="mt-8 text-gray-500 max-w-2xl mx-auto">
                        We understand the local market. Our team is just a call away for on-site support and installations.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
