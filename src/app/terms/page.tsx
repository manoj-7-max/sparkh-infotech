'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Terms() {
    return (
        <main className="bg-deep-navy min-h-screen">
            <Navbar />
            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-4xl text-gray-300 space-y-6">
                    <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
                    <p>Last updated: February 17, 2026</p>
                    <p>Please read these terms and conditions carefully before using our service.</p>
                    <h2 className="text-2xl font-bold text-white mt-8">1. Acceptance of Terms</h2>
                    <p>By accessing or using our website, you agree to be bound by these Terms.</p>
                    <h2 className="text-2xl font-bold text-white mt-8">2. Use of Service</h2>
                    <p>You agree to use the service only for lawful purposes and in accordance with these Terms.</p>
                    {/* Add more placeholder content as needed */}
                </div>
            </section>
            <Footer />
        </main>
    );
}
