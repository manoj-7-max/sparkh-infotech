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
        <main className="bg-dark-navy min-h-screen">
            <Navbar />

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
                            Our <span className="text-electric-orange">Portfolio</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
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
                                        ? 'bg-electric-orange text-white'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
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
                                className="group relative rounded-2xl overflow-hidden aspect-video bg-white/5 border border-white/10"
                            >
                                {/* Image Placeholder */}
                                <div className={`w-full h-full ${project.image} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-xs font-bold text-electric-orange uppercase tracking-wider mb-2">{project.category}</span>
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-sm text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                                    <div className="flex gap-4">
                                        <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                                            <ExternalLink size={18} />
                                        </button>
                                        <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                                            <Github size={18} />
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
