'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Privacy() {
    return (
        <main className="bg-deep-navy min-h-screen">
            <Navbar />
            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-4xl text-gray-300 space-y-6">
                    <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
                    <p>Last updated: February 17, 2026</p>
                    <p>At Sparkh Infotech, we respect your privacy and are committed to protecting your personal data.</p>
                    <h2 className="text-2xl font-bold text-white mt-8">1. Information We Collect</h2>
                    <p>We may collect personal information such as your name, email address, and phone number when you contact us.</p>
                    <h2 className="text-2xl font-bold text-white mt-8">2. How We Use Your Information</h2>
                    <p>We use your information to provide and improve our services, respond to inquiries, and communicate with you.</p>
                    {/* Add more placeholder content as needed */}
                </div>
            </section>
            <Footer />
        </main>
    );
}
