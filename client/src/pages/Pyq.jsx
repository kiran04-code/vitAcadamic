import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Megaphone, 
  Bell, 
  User, 
  Search, 
  BookOpen, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { dummypyqsubject } from '../assets/assets';

const Pyq = () => {
  const { modulespyq } = useParams();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const module = dummypyqsubject.find(item => item.ModuleName === modulespyq);
  const subjects = module?.subjects || [];
  const subjects2 = subjects.filter((item) => 
    item.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Navigation & Brand Header */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          <div className="bg-white px-8 py-6 rounded-[2rem] border border-slate-200/60 shadow-sm flex-grow lg:flex-grow-0">
            <div className="flex items-center gap-3">
              <div className="bg-[#33A491]/10 p-2 rounded-xl text-[#33A491]">
                <BookOpen size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#33A491]">Resources</p>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none uppercase">PYQs</h1>
              </div>
            </div>
          </div>

          <div className="bg-white px-6 py-4 rounded-[2rem] border border-slate-200/60 shadow-sm flex items-center justify-between gap-8">
            <div className="hidden md:flex gap-6 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
              <button className="flex items-center gap-2 hover:text-[#33A491] transition-colors">
                <Megaphone size={16} /> Announcement
              </button>
              <button className="flex items-center gap-2 hover:text-[#33A491] transition-colors">
                <Bell size={16} /> Notification
              </button>
            </div>
            <button 
              onClick={() => navigate('/profile')}
              className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-[#33A491] hover:text-white transition-all"
            >
              <User size={20} />
            </button>
          </div>
        </div>

        {/* Search Bento Bar */}
        <div className="bg-white p-3 rounded-[2rem] border border-slate-200/60 shadow-sm flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search Subject..."
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="w-full bg-slate-50 border-none px-12 py-4 rounded-2xl focus:ring-2 focus:ring-[#33A491]/20 font-medium text-slate-700 placeholder:text-slate-400"
            />
          </div>
          <button className="w-full sm:w-auto bg-[#33A491] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#2a8a7a] transition shadow-lg shadow-[#33a49133]">
            Filter
          </button>
        </div>

        {/* Subject Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects2.length > 0 ? (
            subjects2.map((subject, index) => (
              <div
                key={index}
                onClick={() => navigate(`/pyqs/${subject.name}`)}
                className="group bg-white rounded-[2.5rem] p-4 border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-[#33A491]/30 transition-all duration-500 cursor-pointer flex flex-col"
              >
                <div className="relative h-48 w-full mb-6 overflow-hidden rounded-[2rem]">
                  <img
                    src={subject.image}
                    alt={subject.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                      View Papers <ArrowRight size={14} />
                    </span>
                  </div>
                </div>

                <div className="px-4 pb-4 flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={14} className="text-[#33A491]" />
                    <span className="text-[10px] font-black text-[#33A491] uppercase tracking-[0.2em]">Subject Module</span>
                  </div>
                  <h2 className="text-xl font-black text-slate-900 mb-2 leading-tight uppercase tracking-tight">
                    {subject.name}
                  </h2>
                  <p className="text-slate-500 text-sm font-medium line-clamp-2">
                    {subject.text}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-white rounded-[3rem] border border-dashed border-slate-200">
              <Search size={48} className="mx-auto text-slate-200 mb-4" />
              <p className="text-slate-400 font-bold uppercase tracking-widest">No subjects found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pyq;