'use client';

import {
    LayoutDashboard,
    ClipboardList,
    MessageSquare,
    Calendar,
    Settings,
    LogOut,
    User
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarItems = [
    { name: 'Dashboard', href: '/staff', icon: LayoutDashboard },
    { name: 'My Tasks', href: '/staff/tasks', icon: ClipboardList },
    { name: 'Messages', href: '/staff/messages', icon: MessageSquare },
    { name: 'Schedule', href: '/staff/schedule', icon: Calendar },
    { name: 'Profile', href: '/staff/profile', icon: User },
];

export default function StaffLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-deep-navy text-white font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-white/5 border-r border-white/10 hidden md:flex flex-col backdrop-blur-xl fixed inset-y-0 left-0 z-50">
                <div className="p-6 border-b border-white/10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-electric-orange flex items-center justify-center font-bold text-white">S</div>
                    <h1 className="text-xl font-bold font-display tracking-wide">
                        Sparkh <span className="text-electric-orange">Staff</span>
                    </h1>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                                    flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                                    ${isActive
                                        ? 'bg-electric-orange text-white shadow-lg shadow-electric-orange/20'
                                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                    }
                                `}
                            >
                                <item.icon size={20} className={isActive ? 'text-white' : 'text-gray-500 group-hover:text-white'} />
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-red-500/10 hover:text-red-500 rounded-xl transition-colors">
                        <LogOut size={20} />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 relative bg-deep-navy">
                {/* Mobile Header */}
                <header className="md:hidden h-16 bg-deep-navy/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 sticky top-0 z-40">
                    <span className="font-bold font-display">Staff Portal</span>
                    <button className="p-2 text-gray-400">☰</button>
                </header>

                <div className="p-6 md:p-10 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
