'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function StaffPage() {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'staff123') { // Simple hardcoded password for demo
            setIsAuthenticated(true);
        } else {
            alert('Incorrect Password');
        }
    };

    if (!isAuthenticated) {
        return (
            <main className="min-h-screen bg-white">
                <Navbar />
                <div className="flex items-center justify-center min-h-[60vh] pt-20">
                    <form onSubmit={handleLogin} className="p-8 bg-white border border-gray-200 rounded-2xl shadow-xl max-w-md w-full">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Staff Login</h1>
                        <input
                            type="password"
                            placeholder="Enter Staff Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-electric-orange"
                        />
                        <button type="submit" className="w-full py-3 bg-electric-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-colors">
                            Login
                        </button>
                    </form>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="container mx-auto px-4 pt-32 pb-20">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Staff Portal</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">My Tasks</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>• Review new design mockups</li>
                            <li>• Update client status report</li>
                            <li>• Team meeting at 3 PM</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Announcements</h3>
                        <p className="text-gray-600">New project 'GreenEarth' kickoff next Monday.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
