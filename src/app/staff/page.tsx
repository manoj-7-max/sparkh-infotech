'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, Clock, AlertCircle, CalendarDays } from 'lucide-react';

const tasks = [
    { id: 1, title: 'Process client requirements for Project Alpha', priority: 'High', due: 'Today', status: 'Pending' },
    { id: 2, title: 'Update portfolio images', priority: 'Medium', due: 'Tomorrow', status: 'In Progress' },
    { id: 3, title: 'Weekly team meeting', priority: 'Low', due: 'Feb 20', status: 'Scheduled' },
];

const stats = [
    { label: 'Pending Tasks', value: '5', icon: ClipboardCheck, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { label: 'Hours Logged', value: '32.5', icon: Clock, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { label: 'Urgent Items', value: '2', icon: AlertCircle, color: 'text-red-400', bg: 'bg-red-400/10' },
    { label: 'Meetings', value: '3', icon: CalendarDays, color: 'text-purple-400', bg: 'bg-purple-400/10' },
];

export default function StaffDashboard() {
    return (
        <div className="space-y-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold font-display text-white">Welcome back, <span className="text-electric-orange">Alex</span></h1>
                <p className="text-gray-400 mt-2">Here's what's happening today.</p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-electric-orange/30 transition-all group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</span>
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            {/* Task List */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">My Tasks</h2>
                        <button className="text-sm text-electric-orange hover:text-white transition-colors">View All</button>
                    </div>

                    <div className="space-y-4">
                        {tasks.map((task, index) => (
                            <motion.div
                                key={task.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex items-center justify-between group"
                            >
                                <div className="flex items-center gap-4">
                                    <input type="checkbox" className="w-5 h-5 rounded border-gray-600 text-electric-orange focus:ring-electric-orange bg-transparent" />
                                    <div>
                                        <h3 className="font-medium text-white group-hover:text-electric-orange transition-colors">{task.title}</h3>
                                        <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                                            <span>Due: {task.due}</span>
                                            <span className={`px-2 py-0.5 rounded-full bg-white/5 ${task.priority === 'High' ? 'text-red-400' :
                                                    task.priority === 'Medium' ? 'text-yellow-400' : 'text-blue-400'
                                                }`}>
                                                {task.priority}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300">
                                    {task.status}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Notices / Sidebar widget */}
                <div className="bg-gradient-to-br from-electric-orange/20 to-purple-600/10 rounded-2xl p-6 border border-white/10">
                    <h3 className="font-bold text-white mb-4">Team Announcements</h3>
                    <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-deep-navy/50 backdrop-blur-sm border border-white/5">
                            <span className="text-xs font-bold text-electric-orange uppercase mb-1 block">New Policy</span>
                            <p className="text-sm text-gray-300">Updated work-from-home guidelines are now available in the portal.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-deep-navy/50 backdrop-blur-sm border border-white/5">
                            <span className="text-xs font-bold text-blue-400 uppercase mb-1 block">Event</span>
                            <p className="text-sm text-gray-300">Team lunch this Friday at 1:00 PM. Don't forget to RSVP!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
