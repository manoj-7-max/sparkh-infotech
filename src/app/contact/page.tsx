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
        <main className="bg-white min-h-screen">
            <Navbar />

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">
                            Get in <span className="text-electric-orange">Touch</span>
                        </h1>
                        <p className="text-gray-500">
                            Ready to start your next project? Fill out the form below or contact us directly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="relative p-8 rounded-3xl bg-white border border-gray-100 shadow-xl overflow-hidden group hover:shadow-2xl transition-all">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-electric-orange/5 rounded-full blur-3xl" />

                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-electric-orange/10 text-electric-orange">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-gray-900 font-medium mb-1">Visit Us</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                123 Innovation Tower, Tech Park,<br />Tamil Nadu, India.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-electric-orange/10 text-electric-orange">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-gray-900 font-medium mb-1">Call Us</h4>
                                            <p className="text-gray-500 text-sm">+91 98765 43210</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-electric-orange/10 text-electric-orange">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-gray-900 font-medium mb-1">Email Us</h4>
                                            <p className="text-gray-500 text-sm">hello@sparkhinfotech.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="h-64 w-full rounded-3xl bg-gray-100 border border-gray-200 overflow-hidden relative shadow-inner">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789!2d77.0!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzAwLjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white border border-gray-100 shadow-xl relative overflow-hidden">
                            {/* Form Fields */}
                            <div className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:border-electric-orange focus:ring-1 focus:ring-electric-orange outline-none transition-colors placeholder:text-gray-400"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:border-electric-orange focus:ring-1 focus:ring-electric-orange outline-none transition-colors placeholder:text-gray-400"
                                            placeholder="+91 98765 43210"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:border-electric-orange focus:ring-1 focus:ring-electric-orange outline-none transition-colors placeholder:text-gray-400"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                                    <div className="relative">
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:border-electric-orange focus:ring-1 focus:ring-electric-orange outline-none transition-colors appearance-none"
                                            required
                                        >
                                            <option value="" className="text-gray-500">Select a Service</option>
                                            <option value="Web Development" className="text-gray-900">Web Development</option>
                                            <option value="App Development" className="text-gray-900">App Development</option>
                                            <option value="Digital Marketing" className="text-gray-900">Digital Marketing</option>
                                            <option value="Consulting" className="text-gray-900">Consulting</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:border-electric-orange focus:ring-1 focus:ring-electric-orange outline-none transition-colors h-32 resize-none placeholder:text-gray-400"
                                        placeholder="Tell us about your project..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full py-4 bg-electric-orange disabled:bg-gray-400 text-white rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-electric-orange/20 flex items-center justify-center gap-2"
                                >
                                    {status === 'loading' ? 'Sending...' : 'Send Message'} <Send className="w-5 h-5" />
                                </button>
                                {status === 'success' && (
                                    <div className="mt-4 p-4 bg-green-50/50 border border-green-200 rounded-xl text-green-700 text-center font-medium">
                                        Message sent successfully! We will contact you soon.
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="mt-4 p-4 bg-red-50/50 border border-red-200 rounded-xl text-red-600 text-center font-medium">
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
