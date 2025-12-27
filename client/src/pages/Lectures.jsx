import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Search, Bell, Megaphone, ArrowLeft, BookOpen, Layers } from 'lucide-react';
import { lectureData } from '../assets/assets';
import { useAuth } from '../context/auth';
import Footer from '../components/Footer';

const Lectures = () => {
  const { setMenuOpen } = useAuth();
  const { modules } = useParams();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const module = lectureData.find(item => item.ModuleName === modules);
  const subjects = module?.subjects || [];
  const filteredSubjects = subjects.filter((item) => 
    item.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 1. Header Navigation Bar */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={() => { navigate("/"); setMenuOpen(false); }}
            className="flex items-center gap-2 text-slate-500 hover:text-[#33A491] transition group font-bold text-sm"
          >
            <div className="p-2 rounded-xl bg-slate-50 group-hover:bg-[#33A491]/10 transition">
              <ArrowLeft size={18} />
            </div>
            Back to Home
          </button>
          
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-400 hover:text-[#33A491] transition">
              <Megaphone size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="p-2 text-slate-400 hover:text-[#33A491] transition">
              <Bell size={20} />
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* 2. Top Bento Row: Title & Search */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          <div className="lg:col-span-7 bg-white p-10 rounded-[2.5rem] border border-slate-200/60 shadow-sm flex flex-col justify-center">
            <div className="flex items-center gap-3 text-[#33A491] mb-4">
              <Layers size={20} />
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">{modules}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Subject <span className="text-[#33A491]">Lectures</span>
            </h1>
          </div>

          <div className="lg:col-span-5 bg-[#33A491] p-10 rounded-[2.5rem] shadow-lg shadow-[#33a49122] flex flex-col justify-center">
            <p className="text-white/80 text-sm font-bold mb-4 uppercase tracking-widest">Quick Filter</p>
            <div className="relative">
              <input
                type="text"
                placeholder="Search your subject..."
                onChange={(e) => setInput(e.target.value)}
                value={input}
                className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 px-5 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/30 transition-all font-medium"
              />
              <Search className="absolute right-5 top-4 text-white/50" size={20} />
            </div>
          </div>
        </div>

        {/* 3. Subject Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSubjects.length > 0 ? (
            filteredSubjects.map((subject, index) => (
              <div
                key={index}
                onClick={() => navigate(`${subject.name}`)}
                className="group bg-white border border-slate-200/60 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
              >
                {/* Image Section */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={subject.image}
                    alt={subject.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-sm">
                    <BookOpen size={16} className="text-[#33A491]" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h2 className="text-xl font-black text-slate-900 mb-3 group-hover:text-[#33A491] transition-colors">
                    {subject.name}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {subject.text || "Comprehensive video lectures and detailed study notes curated for university exams."}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">View Module</span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#33A491] group-hover:bg-[#33A491] group-hover:text-white transition-all">
                      <ArrowLeft size={14} className="rotate-180" />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-white rounded-[2.5rem] border border-dashed border-slate-200">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">No subjects found matching "{input}"</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Lectures;