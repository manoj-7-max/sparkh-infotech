export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 border-r border-gray-700 hidden md:flex flex-col">
                <div className="p-6 border-b border-gray-700">
                    <h1 className="text-xl font-bold text-white">SPARKH <span className="text-orange-500">ADMIN</span></h1>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    {['Dashboard', 'Leads', 'Portfolio', 'Posts', 'Settings'].map((item) => (
                        <a key={item} href="#" className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors">
                            {item}
                        </a>
                    ))}
                </nav>
                <div className="p-4 border-t border-gray-700">
                    <button className="w-full py-2 bg-red-600 hover:bg-red-700 rounded text-sm font-medium transition-colors">Logout</button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <header className="bg-gray-800 border-b border-gray-700 p-4 flex justify-between items-center md:hidden">
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
