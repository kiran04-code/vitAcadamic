import React, { useState } from 'react';

import { LayoutDashboard, MessageSquare, Heart, ShieldCheck, Mail, LogOut, Bell } from 'lucide-react';
import Sug from './components/sugesting';
import Fedu from './components/Fedu';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('suggestions');

    return (
        <div className="flex min-h-screen bg-[#F8FAFC]">
            <aside className="w-20 lg:w-72 bg-white border-r border-slate-200 flex flex-col p-6 sticky top-0 h-screen">
                <div className="flex items-center gap-3 mb-12 px-2">
                    <div className="bg-[#33A491] p-2.5 rounded-2xl text-white shadow-lg shadow-[#33a49140]">
                        <ShieldCheck size={24} />
                    </div>
                    <h1 className="hidden lg:block font-black text-xl text-slate-900 tracking-tighter uppercase">Admin</h1>
                </div>

                <nav className="flex-grow space-y-2">
                    <button 
                        onClick={() => setActiveTab('suggestions')}
                        className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all font-bold text-[11px] uppercase tracking-[0.15em] ${activeTab === 'suggestions' ? 'bg-[#33A491] text-white shadow-xl shadow-[#33a49130]' : 'text-slate-400 hover:bg-slate-50'}`}
                    >
                        <MessageSquare size={20} />
                        <span className="hidden lg:block">Suggestions</span>
                    </button>

                    <button 
                        onClick={() => setActiveTab('feedback')}
                        className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all font-bold text-[11px] uppercase tracking-[0.15em] ${activeTab === 'feedback' ? 'bg-[#33A491] text-white shadow-xl shadow-[#33a49130]' : 'text-slate-400 hover:bg-slate-50'}`}
                    >
                        <Heart size={20} />
                        <span className="hidden lg:block">Feedbacks</span>
                    </button>
                </nav>

                <div className="pt-6 border-t border-slate-100">
                    <button className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-rose-500 font-bold text-[11px] uppercase tracking-widest hover:bg-rose-50 transition-all">
                        <LogOut size={20} />
                        <span className="hidden lg:block">Sign Out</span>
                    </button>
                </div>
            </aside>

            <main className="flex-grow p-6 lg:p-12 overflow-y-auto">
                <div className="max-w-6xl mx-auto">
                    <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase">
                                {activeTab === 'suggestions' ? 'Incoming Suggestions' : 'Student Feedback'}
                            </h2>
                            <p className="text-slate-500 font-medium text-sm mt-1">Manage and respond to student contributions</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="h-12 w-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 relative cursor-pointer hover:bg-slate-50 transition-colors">
                                <Bell size={20} />
                                <span className="absolute top-3 right-3 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
                            </div>
                            <button className="h-12 bg-slate-900 text-white px-6 rounded-2xl font-bold text-[11px] uppercase tracking-widest hover:bg-black transition-all flex items-center gap-2">
                                <Mail size={16} /> Broadcast
                            </button>
                        </div>
                    </header>

                    <div className="bg-transparent">
                        {activeTab === 'suggestions' ? <Sug /> : <Fedu />}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Admin;