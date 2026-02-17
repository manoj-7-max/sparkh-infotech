'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const locations = [
    'Chennai', 'Chengalpattu', 'Madurantakam', 'Kancheepuram', 'Tambaram', 'Tirukalukundram', 'Vandalur', 'Guduvanchery'
];

export default function LocalAuthority() {
    return (
        <section className="py-20 bg-white border-y border-gray-100 relative overflow-hidden">
            {/* Map Background Pattern */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('/grid.svg')] pointer-events-none" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-electric-blue font-bold text-sm mb-6">
                        <MapPin size={16} /> Serving All of Tamil Nadu
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold font-display text-dark-charcoal mb-4">
                        Trusted by Businesses Across <span className="text-electric-blue">Your City</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-10">
                        We are not a faceless online agency. We are your local technology partner. Our team provides on-site installation and support in:
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
                        {locations.map((location, index) => (
                            <motion.div
                                key={location}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                className="px-5 py-2.5 bg-white rounded-lg border border-gray-200 text-gray-700 font-semibold shadow-sm hover:shadow-md hover:border-electric-blue hover:text-electric-blue transition-all cursor-default"
                            >
                                {location}
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-left">
                            <h4 className="font-bold text-gray-900 text-lg">Need a site visit?</h4>
                            <p className="text-gray-600 text-sm">Our engineers can visit your shop or office for a free survey.</p>
                        </div>
                        <a
                            href="tel:+919876543210"
                            className="px-6 py-3 bg-dark-charcoal text-white font-bold rounded-xl hover:bg-black transition-colors shadow-lg"
                        >
                            Call for Site Visit
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
