'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Careers() {
    return (
        <main className="bg-deep-navy min-h-screen">
            <Navbar />

            <section className="pt-32 pb-20 px-4 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
                        Join Our <span className="text-electric-orange">Team</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-12">
                        We are always looking for talented individuals to join our mission of powering ideas with technology.
                    </p>

                    <div className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="text-6xl mb-6">🚀</div>
                        <h2 className="text-2xl font-bold text-white mb-4">No Openings Right Now</h2>
                        <p className="text-gray-400 mb-8">
                            We don't have any specific positions open at the moment, but we're always interested in meeting great people.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-3 bg-electric-orange text-white rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-electric-orange/20"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
