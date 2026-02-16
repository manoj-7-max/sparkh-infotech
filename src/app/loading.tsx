export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-dark-navy z-[9999] fixed inset-0">
            <div className="relative w-24 h-24">
                {/* Outer Ring */}
                <div className="absolute inset-0 border-4 border-white/10 rounded-full animate-[spin_3s_linear_infinite]" />

                {/* Middle Ring */}
                <div className="absolute inset-2 border-4 border-t-electric-orange border-r-electric-orange/50 border-b-transparent border-l-transparent rounded-full animate-[spin_1.5s_linear_infinite]" />

                {/* Inner Ring */}
                <div className="absolute inset-6 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-[spin_1s_linear_infinite_reverse]" />

                {/* Glow */}
                <div className="absolute inset-0 bg-electric-orange/5 blur-xl rounded-full animate-pulse" />
            </div>
        </div>
    );
}
