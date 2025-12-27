import React from 'react';
import { ArrowRight, BookOpen, Video, FileText, Sparkles, LayoutDashboard, History } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../context/auth';

const HeroSection = () => {
  const { setshowUserLogin, user } = useAuth(); 
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-20 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">

  
        <div className="md:col-span-8 bg-white border border-slate-200/60 rounded-[2.5rem] p-10 md:p-16 shadow-sm flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-[#33A491]/10 text-[#33A491] px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest mb-6 w-fit">
            <Sparkles size={14} /> VIT Pune Excellence
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6">
            Everything you need <br />
            <span className="text-[#33A491]">to Ace Exams.</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-md mb-8 leading-relaxed">
            Curated notes, video tutorials, and previous year papers organized for the modern student.
          </p>


          {!setshowUserLogin ? (
        
            <button 
              onClick={() => setshowUserLogin(true)} 
              className="flex items-center gap-2 bg-slate-900 text-white w-fit px-8 py-4 rounded-2xl font-bold hover:bg-black transition-all group shadow-xl shadow-slate-900/20"
            >
              Start Learning <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
           
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/module1')}
                className="flex items-center gap-3 bg-[#33A491] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#2a8a7a] transition-all shadow-lg shadow-[#33a49133] group"
              >
                <LayoutDashboard size={18} /> Video Lectures 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => navigate('/pyq/module1')}
                className="flex items-center gap-3 bg-slate-100 text-slate-700 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all border border-slate-200"
              >
                <History size={18} /> Question Bank
              </button>
            </div>
          )}
        </div>

   
        <div className="md:col-span-4 bg-white border border-slate-200/60 rounded-[2.5rem] overflow-hidden shadow-sm relative group">
          <img src="/istockphoto-1475102488-612x612.jpg" alt="Student" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="text-xs font-black uppercase tracking-widest text-slate-900">
              {user ? `Welcome Back, ${user.name || 'Student'}` : 'Join 1,000+ Students'}
            </p>
          </div>
        </div>
    <div onClick={() => navigate('/dashboard')} className="md:col-span-4 lg:col-span-3 bg-white border border-slate-200/60 rounded-[2.5rem] p-8 hover:border-[#33A491]/40 transition-colors cursor-pointer group shadow-sm">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <BookOpen size={24} />
          </div>
          <h3 className="font-bold text-xl text-slate-900 mb-2">Lecture Notes</h3>
          <p className="text-sm text-slate-500 leading-relaxed">Chapter-wise PDF notes curated by toppers.</p>
        </div>

        <div onClick={() => navigate('/dashboard')} className="md:col-span-4 lg:col-span-3 bg-white border border-slate-200/60 rounded-[2.5rem] p-8 hover:border-[#33A491]/40 transition-colors cursor-pointer group shadow-sm">
          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
            <Video size={24} />
          </div>
          <h3 className="font-bold text-xl text-slate-900 mb-2">Video Guides</h3>
          <p className="text-sm text-slate-500 leading-relaxed">Visual concepts explained through YouTube links.</p>
        </div>

        <div onClick={() => navigate('/pyq')} className="md:col-span-4 lg:col-span-6 bg-[#33A491] rounded-[2.5rem] p-8 flex items-center justify-between text-white shadow-lg shadow-[#33a49122] cursor-pointer hover:bg-[#2a8a7a] transition-all group">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center">
              <FileText size={32} />
            </div>
            <div>
              <h3 className="font-bold text-2xl tracking-tight uppercase">Paper Archives</h3>
              <p className="text-white/70 text-sm">Last 5 Year Solved PYQs</p>
            </div>
          </div>
          <div className="bg-white/10 p-4 rounded-full group-hover:translate-x-2 transition-transform">
            <ArrowRight />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;