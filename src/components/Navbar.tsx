'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300`}
            >
                <div className={`
                    flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full transition-all duration-500
                    ${isScrolled
                        ? 'bg-white/90 backdrop-blur-xl border border-gray-200 shadow-lg'
                        : 'bg-white/50 backdrop-blur-sm border border-gray-100/50'
                    }
                `}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group z-50">
                        <img
                            src="/logo.png"
                            alt="SPARKH INFOTECH"
                            className="h-12 w-auto object-contain"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                document.getElementById('navbar-fallback-logo')?.classList.remove('hidden');
                            }}
                        />
                        <div id="navbar-fallback-logo" className="hidden flex items-center gap-2">
                            <div className="flex items-center justify-center w-10 h-10 bg-electric-orange text-white rounded-xl shadow-lg">
                                <Zap className="w-6 h-6 fill-current" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-gray-900 font-display">
                                SPARKH
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1 bg-white/50 p-1 rounded-full border border-gray-200/50 backdrop-blur-md">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`
                                        relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                                        ${isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}
                                    `}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-gray-100 rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </Link>
                            )
                        })}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="bg-electric-orange text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
                        >
                            Let's Talk
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-900 hover:text-electric-orange z-50"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8 p-4">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-3xl font-display font-bold text-gray-900 hover:text-electric-orange transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block mt-4 px-8 py-3 bg-electric-orange text-white rounded-full font-bold text-lg shadow-xl shadow-orange-500/20"
                                >
                                    Start Project
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
