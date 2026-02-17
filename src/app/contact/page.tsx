'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const [status, setStatus] = useState<'' | 'loading' | 'success' | 'error'>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <main className="bg-dark-navy min-h-screen">
            <Navbar />

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
                            Get in <span className="text-electric-orange">Touch</span>
                        </h1>
                        <p className="text-gray-400">
                            Ready to start your next project? Fill out the form below or contact us directly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-electric-orange/10 rounded-full blur-3xl" />

                                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-electric-orange/10 text-electric-orange">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">Visit Us</h4>
                                            <p className="text-gray-400 text-sm">
                                                123 Innovation Tower, Tech Park,<br />Tamil Nadu, India.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-electric-orange/10 text-electric-orange">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">Call Us</h4>
                                            <p className="text-gray-400 text-sm">+91 98765 43210</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-electric-orange/10 text-electric-orange">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">Email Us</h4>
                                            <p className="text-gray-400 text-sm">hello@sparkhinfotech.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="h-64 w-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789!2d77.0!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzAwLjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'grayscale(1) invert(1)' }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden">
                            {/* Form Fields */}
                            <div className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-electric-orange outline-none transition-colors"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-electric-orange outline-none transition-colors"
                                            placeholder="+91 98765 43210"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-electric-orange outline-none transition-colors"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Service Interested In</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-electric-orange outline-none transition-colors appearance-none"
                                        required
                                    >
                                        <option value="" className="bg-dark-navy">Select a Service</option>
                                        <option value="Web Development" className="bg-dark-navy">Web Development</option>
                                        <option value="App Development" className="bg-dark-navy">App Development</option>
                                        <option value="Digital Marketing" className="bg-dark-navy">Digital Marketing</option>
                                        <option value="Consulting" className="bg-dark-navy">Consulting</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-electric-orange outline-none transition-colors h-32 resize-none"
                                        placeholder="Tell us about your project..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full py-4 bg-electric-orange disabled:bg-gray-600 text-white rounded-lg font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-electric-orange/20 flex items-center justify-center gap-2"
                                >
                                    {status === 'loading' ? 'Sending...' : 'Send Message'} <Send className="w-5 h-5" />
                                </button>
                                {status === 'success' && (
                                    <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500 text-center">
                                        Message sent successfully! We will contact you soon.
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-center">
                                        Something went wrong. Please try again.
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
