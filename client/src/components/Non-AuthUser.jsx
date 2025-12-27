import React from 'react';
import { ShieldAlert, ArrowLeft, Lock, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NonAuthUser = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="relative mb-8 flex justify-center">
          <div className="w-32 h-32 bg-[#33A491]/10 rounded-[2.5rem] flex items-center justify-center text-[#33A491] animate-pulse">
            <ShieldAlert size={60} />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 text-rose-500">
            <Lock size={24} />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
          Error 403: Restricted Access
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter uppercase mb-4">
          Unauthorized <br /> 
          <span className="text-[#33A491]">Entry</span>
        </h1>

        <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10 px-4">
          It looks like you've reached a restricted area of the VIT Portal. 
          Only administrators have permission to access these resources.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-400 hover:text-slate-900 font-bold text-xs uppercase tracking-widest transition-colors px-6 py-4"
          >
            <ArrowLeft size={16} /> Go Back
          </button>

          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-900/20 group"
          >
            <Home size={18} /> Return Home
          </button>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200/60">
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">
            VIT Pune Excellence Portal • Edunation
          </p>
        </div>
      </div>
    </div>
  );
};

export default NonAuthUser; 