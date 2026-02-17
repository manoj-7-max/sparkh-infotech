'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-orange/10 rounded-full blur-[100px] opacity-70 animate-pulse" />
            </div>

            <div className="relative z-10 space-y-8">
                <h1 className="text-9xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-br from-electric-orange to-red-500 drop-shadow-2xl animate-bounce">
                    404
                </h1>
                <h2 className="text-3xl font-bold text-gray-900">Page Not Found</h2>
                <p className="text-gray-500 max-w-md mx-auto text-lg">
                    Oops! The page you are looking for has vanished into the digital void.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <Link
                        href="/"
                        className="px-8 py-3 bg-electric-orange text-white rounded-full font-medium hover:bg-orange-600 transition-all shadow-lg hover:shadow-electric-orange/40 flex items-center justify-center gap-2"
                    >
                        <Home className="w-5 h-5" /> Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="px-8 py-3 bg-white border border-gray-200 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-5 h-5" /> Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
