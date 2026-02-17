'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Zap } from 'lucide-react';

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="bg-deep-navy/90 backdrop-blur-3xl border-t border-white/5 text-white relative flex flex-col items-center">
            {/* Background Orbs */}
            <div className="absolute inset-x-0 -top-40 overflow-hidden pointer-events-none">
                <div className="mx-auto w-[600px] h-[300px] bg-electric-orange/10 blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 w-full">
                {/* Brand */}
                <div className="space-y-6">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-10 h-10 flex items-center justify-center bg-electric-orange/10 rounded-full border border-electric-orange/20">
                            <Zap className="w-5 h-5 text-electric-orange" />
                        </div>
                        <span className="text-xl font-bold font-display tracking-wide">
                            SPARKH <span className="text-electric-orange">INFOTECH</span>
                        </span>
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Powering Ideas with Technology. We create futuristic digital solutions that drive innovation and growth for businesses worldwide.
                    </p>
                    <div className="flex space-x-4">
                        {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electric-orange hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-bold text-lg mb-6 text-white font-display">Quick Links</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        {[
                            { name: 'About Us', href: '/about' },
                            { name: 'Our Services', href: '/services' },
                            { name: 'Portfolio', href: '/portfolio' },
                            { name: 'Careers', href: '/careers' },
                            { name: 'Contact Us', href: '/contact' }
                        ].map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="hover:text-electric-orange transition-colors duration-300">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-bold text-lg mb-6 text-white font-display">Services</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        {[
                            { name: 'Web Development', href: '/services' },
                            { name: 'Mobile Apps', href: '/services' },
                            { name: 'Digital Marketing', href: '/services' },
                            { name: 'Cloud Solutions', href: '/services' },
                            { name: 'UI/UX Design', href: '/services' }
                        ].map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="hover:text-electric-orange transition-colors duration-300">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-bold text-lg mb-6">Contact Us</h3>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-electric-orange shrink-0 mt-0.5" />
                            <span>123 Innovation Tower, Tech Park,<br />Tamil Nadu, India.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-electric-orange" />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-electric-orange" />
                            <span>hello@sparkhinfotech.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-full border-t border-white/5 bg-black/20 backdrop-blur-sm py-6">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© {currentYear} SPARKH INFOTECH. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/admin" className="hover:text-white transition-colors">Admin Panel</Link>
                        <Link href="/staff" className="hover:text-white transition-colors">Staff Panel</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
