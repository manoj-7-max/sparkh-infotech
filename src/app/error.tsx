'use client';

import { useEffect } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-dark-navy flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/20 rounded-full blur-[100px] opacity-70 animate-pulse" />
            </div>

            <div className="relative z-10 space-y-8 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-xl">
                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                    <AlertCircle className="w-10 h-10 text-red-500" />
                </div>

                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-white">Something went wrong!</h2>
                    <p className="text-gray-400 max-w-md mx-auto">
                        We encountered an unexpected error. Our team has been notified.
                    </p>
                </div>

                <button
                    onClick={() => reset()}
                    className="px-8 py-3 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-all shadow-lg hover:shadow-red-500/40 flex items-center justify-center gap-2 mx-auto"
                >
                    <RefreshCw className="w-5 h-5" /> Try Again
                </button>
            </div>
        </div>
    );
}
