import React from 'react';
import { useAuth } from '../context/auth';
import { useNavigate, Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const { setfeedbackon } = useAuth();
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-5">
            <img src="/VIT2.png" alt="Logo" className="h-10 mb-6" />
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              The premium digital ecosystem for VIT Pune students. 
              Bridging the gap between resources and results through 
              curated technology and community-driven content.
            </p>
            <div className="flex gap-5 mt-8">
              <a href="#" className="p-2 rounded-full bg-slate-50 text-slate-400 hover:text-[#33A491] transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 rounded-full bg-slate-50 text-slate-400 hover:text-[#33A491] transition-colors"><Github size={18} /></a>
              <a href="#" className="p-2 rounded-full bg-slate-50 text-slate-400 hover:text-[#33A491] transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6">Resources</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li><Link to="/module1" className="hover:text-[#33A491] transition">Lectures</Link></li>
                <li><Link to="/pyq/module1" className="hover:text-[#33A491] transition">Archives</Link></li>
                <li><a href="#" className="hover:text-[#33A491] transition">Cheat Sheets</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6">Community</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li><button onClick={() => setfeedbackon(true)} className="hover:text-[#33A491] transition">Feedback</button></li>
                <li><button onClick={() => navigate("/contact")} className="hover:text-[#33A491] transition">Support</button></li>
                <li><a href="#" className="hover:text-[#33A491] transition">Developers</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6">Actions</h4>
              <button 
                onClick={() => setfeedbackon(true)}
                className="w-full flex items-center justify-between bg-slate-50 hover:bg-[#33A491]/10 border border-slate-200 p-4 rounded-2xl group transition-all"
              >
                <span className="text-xs font-bold text-slate-900">Send Feedback</span>
                <ArrowRight size={14} className="text-[#33A491] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-50 py-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            © 2025 Edunation • Built by <span className="text-slate-900">Kiran.dev & Team</span>
          </p>
          <div className="flex gap-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;