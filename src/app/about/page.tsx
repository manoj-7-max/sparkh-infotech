'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

const timeline = [
    { year: '2019', title: 'Inception', description: 'SPARKH INFOTECH was founded with a vision to revolutionize the digital landscape.' },
    { year: '2020', title: 'Expansion', description: 'Expanded our services to include mobile app development and cloud solutions.' },
    { year: '2022', title: 'Major Milestone', description: 'Completed 50+ successful projects and partnered with global clients.' },
    { year: '2024', title: 'Future Ready', description: 'Integrating AI and Blockchain into our core offerings, aiming for 100+ team size.' },
];

export default function About() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">
                            Our <span className="text-electric-orange">Story</span>
                        </h1>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            We are a team of passionate innovators dedicated to crafting digital excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-auto h-[400px] border border-gray-100 shadow-xl p-1 bg-white">
                                <div className="absolute inset-0 bg-gradient-to-br from-electric-orange/10 to-blue-500/10" />
                                <div className="w-full h-full bg-white/80 flex items-center justify-center p-8 backdrop-blur-sm">
                                    <h3 className="text-3xl font-bold font-display text-center text-gray-900">
                                        Powering Ideas with <br /><span className="text-electric-orange">Technology</span>
                                    </h3>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold text-gray-900">Mission & Vision</h2>
                            <p className="text-gray-600 leading-relaxed">
                                At SPARKH INFOTECH, our mission is to empower businesses with futuristic technology solutions that drive growth, efficiency, and innovation. We envision a world where every idea has the power to transform reality through digital excellence.
                            </p>
                            <div className="border-l-4 border-electric-orange pl-6 py-2 bg-gray-50 rounded-r-lg">
                                <p className="text-lg font-medium text-gray-800 italic">
                                    "Innovation distinguishes between a leader and a follower."
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block" />

                        <div className="space-y-12 relative z-10">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                        }`}
                                >
                                    <div className="flex-1 w-full md:w-auto p-6 bg-white border border-gray-100 rounded-2xl hover:border-electric-orange/50 transition-colors duration-300 shadow-md hover:shadow-lg">
                                        <span className="text-5xl font-bold text-gray-100 absolute -top-4 -right-4 z-0">{item.year}</span>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">{item.title}</h3>
                                        <p className="text-gray-600 relative z-10">{item.description}</p>
                                    </div>

                                    <div className="w-12 h-12 bg-white border-4 border-electric-orange rounded-full z-10 shrink-0 hidden md:flex items-center justify-center shadow-md">
                                        <div className="w-3 h-3 bg-electric-orange rounded-full" />
                                    </div>

                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
