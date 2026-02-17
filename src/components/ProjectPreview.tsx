'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const projects = [
    {
        title: 'Retail CCTV Network',
        category: 'Security System',
        description: 'Complete surveillance setup for a 3-story textile showroom in T. Nagar.',
        color: 'bg-red-500',
        tags: ['16 Cameras', 'Remote View', '2 Weeks Recording']
    },
    {
        title: 'E-Commerce App',
        category: 'Mobile Application',
        description: 'Flutter-based grocery delivery app for a local chain in Chengalpattu.',
        color: 'bg-blue-500',
        tags: ['Android', 'iOS', 'Admin Panel']
    },
    {
        title: 'GST Billing Software',
        category: 'Desktop Software',
        description: 'Custom offline billing solution for a hardware store with inventory.',
        color: 'bg-emerald-500',
        tags: ['Offline', 'Barcode', 'GST Reports']
    }
];

export default function ProjectPreview() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">
                            Featured <span className="text-electric-orange">Projects</span>
                        </h2>
                        <p className="text-gray-500 max-w-md">
                            A glimpse of what we've built for businesses like yours.
                        </p>
                    </div>
                    <Link
                        href="/portfolio"
                        className="group flex items-center gap-2 font-bold text-gray-900 hover:text-electric-orange transition-colors"
                    >
                        View All Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Placeholder Image Area */}
                            <div className={`h-48 w-full ${project.color} opacity-90 group-hover:opacity-100 transition-opacity relative`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white font-bold opacity-50 text-2xl uppercase tracking-widest">{project.category}</span>
                                </div>
                            </div>

                            <div className="p-8 bg-white">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-sm text-gray-500 mb-6">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <button className="w-full py-3 rounded-xl border border-gray-200 text-gray-900 font-bold hover:bg-gray-50 hover:border-electric-orange hover:text-electric-orange transition-all flex items-center justify-center gap-2">
                                    View Case Study <ExternalLink size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
