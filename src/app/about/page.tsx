'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const timeline = [
    { year: '2019', title: 'Inception', description: 'SPARKH INFOTECH was founded with a vision to revolutionize the digital landscape.' },
    { year: '2020', title: 'Expansion', description: 'Expanded our services to include mobile app development and cloud solutions.' },
    { year: '2022', title: 'Major Milestone', description: 'Completed 50+ successful projects and partnered with global clients.' },
    { year: '2024', title: 'Future Ready', description: 'Integrating AI and Blockchain into our core offerings, aiming for 100+ team size.' },
];

export default function About() {
    return (
        <main className="bg-dark-navy min-h-screen">
            <Navbar />

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
                            Our <span className="text-electric-orange">Story</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We are a team of passionate innovators dedicated to crafting digital excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-auto h-[400px] border border-white/10 glass-card p-1">
                                <div className="absolute inset-0 bg-gradient-to-br from-electric-orange/20 to-blue-500/20 mix-blend-overlay" />
                                <div className="w-full h-full bg-dark-navy/80 flex items-center justify-center p-8">
                                    <h3 className="text-3xl font-bold font-display text-center">
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
                            <h2 className="text-3xl font-bold text-white">Mission & Vision</h2>
                            <p className="text-gray-400 leading-relaxed">
                                At SPARKH INFOTECH, our mission is to empower businesses with futuristic technology solutions that drive growth, efficiency, and innovation. We envision a world where every idea has the power to transform reality through digital excellence.
                            </p>
                            <div className="border-l-4 border-electric-orange pl-6 py-2 bg-white/5 rounded-r-lg">
                                <p className="text-lg font-medium text-white italic">
                                    "Innovation distinguishes between a leader and a follower."
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-white/10 hidden md:block" />

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
                                    <div className="flex-1 w-full md:w-auto p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-electric-orange/50 transition-colors duration-300">
                                        <span className="text-5xl font-bold text-electric-orange/20 absolute -top-4 -right-4 z-0">{item.year}</span>
                                        <h3 className="text-xl font-bold text-white mb-2 relative z-10">{item.title}</h3>
                                        <p className="text-gray-400 relative z-10">{item.description}</p>
                                    </div>

                                    <div className="w-12 h-12 bg-dark-navy border-4 border-electric-orange rounded-full z-10 shrink-0 hidden md:flex items-center justify-center">
                                        <div className="w-3 h-3 bg-white rounded-full" />
                                    </div>

                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
