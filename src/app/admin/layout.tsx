export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-deep-navy text-white">
            {/* Sidebar */}
            <aside className="w-64 bg-white/5 border-r border-white/10 hidden md:flex flex-col backdrop-blur-xl">
                <div className="p-6 border-b border-white/10">
                    <h1 className="text-xl font-bold text-white font-display">SPARKH <span className="text-electric-orange">ADMIN</span></h1>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    {['Dashboard', 'Leads', 'Portfolio', 'Posts', 'Settings'].map((item) => (
                        <a key={item} href={`/admin/${item.toLowerCase().replace(' ', '-')}`} className="block px-4 py-2 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white transition-colors">
                            {item}
                        </a>
                    ))}
                    <div className="pt-4 mt-4 border-t border-white/10">
                        <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Access</p>
                        <a href="/staff" className="block px-4 py-2 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white transition-colors">
                            Staff Portal
                        </a>
                        <a href="/" className="block px-4 py-2 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white transition-colors">
                            Live Website
                        </a>
                    </div>
                </nav>
                <div className="p-4 border-t border-white/10">
                    <button className="w-full py-2 bg-red-600/80 hover:bg-red-600 rounded-lg text-sm font-medium transition-colors">Logout</button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-deep-navy">
                <header className="bg-deep-navy/90 border-b border-white/10 p-4 flex justify-between items-center md:hidden sticky top-0 z-40 backdrop-blur-md">
                    <span className="font-bold">Menu</span>
                    <button className="p-2">☰</button>
                </header>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
