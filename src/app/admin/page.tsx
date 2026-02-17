'use client';

import { Users, FileText, Briefcase, Activity } from 'lucide-react';

const stats = [
    { label: 'Total Leads', value: '142', icon: Users, color: 'text-blue-500' },
    { label: 'Active Projects', value: '12', icon: Briefcase, color: 'text-green-500' },
    { label: 'Blog Posts', value: '24', icon: FileText, color: 'text-purple-500' },
    { label: 'Visits Today', value: '1,204', icon: Activity, color: 'text-orange-500' },
];

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-display text-white">Dashboard Overview</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-electric-orange/50 transition-colors group">
                        <div className="flex items-center justify-between mb-4">
                            <span className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </span>
                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Last 7 Days</span>
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white/5 rounded-2xl border border-white/10 p-6 backdrop-blur-sm">
                <h2 className="text-xl font-bold text-white mb-6 font-display">Recent Inquiries</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-400">
                        <thead className="bg-white/5 uppercase text-xs text-gray-300 font-bold tracking-wider">
                            <tr>
                                <th className="px-6 py-4 rounded-l-xl">Name</th>
                                <th className="px-6 py-4">Service</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4 rounded-r-xl">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4 font-medium text-white group-hover:text-electric-orange transition-colors">Example Client {i}</td>
                                    <td className="px-6 py-4">Web Development</td>
                                    <td className="px-6 py-4">Feb 16, 2026</td>
                                    <td className="px-6 py-4 text-electric-orange hover:underline cursor-pointer font-medium">View</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
