'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'E-commerce Platform',
        category: 'Websites',
        image: 'bg-gradient-to-br from-purple-600 to-blue-500',
        description: 'A full-featured online store with payment gateway and admin panel.',
    },
    {
        id: 2,
        title: 'Fitness Tracker App',
        category: 'Apps',
        image: 'bg-gradient-to-br from-green-400 to-cyan-500',
        description: 'Mobile application for tracking workouts and nutrition.',
    },
    {
        id: 3,
        title: 'Corporate Dashboard',
        category: 'Software',
        image: 'bg-gradient-to-br from-orange-400 to-red-500',
        description: 'Internal tool for data visualization and employee management.',
    },
    {
        id: 4,
        title: 'Travel Agency Website',
        category: 'Websites',
        image: 'bg-gradient-to-br from-pink-500 to-rose-500',
        description: 'Booking platform for flights and hotels with search functionality.',
    },
    {
        id: 5,
        title: 'Food Delivery App',
        category: 'Apps',
        image: 'bg-gradient-to-br from-yellow-400 to-orange-500',
        description: 'Real-time delivery tracking and restaurant ordering system.',
    },
    {
        id: 6,
        title: 'SaaS Landing Page',
        category: 'Websites',
        image: 'bg-gradient-to-br from-indigo-500 to-purple-600',
        description: 'High-converting landing page for a B2B software product.',
    },
];

const categories = ['All', 'Websites', 'Apps', 'Software'];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">
                            Our <span className="text-electric-orange">Portfolio</span>
                        </h1>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Showcasing our best work across web, mobile, and software development.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                    ? 'bg-electric-orange text-white shadow-lg shadow-orange-500/20'
                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative rounded-2xl overflow-hidden aspect-video bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
                            >
                                {/* Background with Gradient & Pattern */}
                                <div className={`w-full h-full ${project.image} opacity-90 group-hover:opacity-100 transition-opacity duration-500 relative`}>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                                        <span className="inline-block px-3 py-1 rounded-full bg-electric-orange text-white text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white mb-2 shadow-black/50 drop-shadow-sm">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-gray-200 line-clamp-2 mb-4">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
                                        <button className="flex-1 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-colors flex items-center justify-center gap-2 backdrop-blur-md border border-white/20">
                                            <ExternalLink size={16} /> View Demo
                                        </button>
                                        <button className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors backdrop-blur-md border border-white/20">
                                            <Github size={20} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
