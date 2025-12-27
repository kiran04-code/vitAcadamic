import React from 'react';
import { useAuth } from '../context/auth';
import { User, Mail, IdCard, LogOut, Settings, ShieldCheck, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { userdata, logout } = useAuth();
  console.log(userdata)
  const navi = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <div className="md:col-span-12 lg:col-span-8 bg-white border border-slate-200/60 rounded-[2.5rem] p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8 group hover:shadow-md transition-all duration-500">
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-50 rounded-[2rem] flex items-center justify-center text-[#33A491] border-2 border-slate-100 group-hover:border-[#33A491]/30 transition-colors duration-500">
                <User size={48} strokeWidth={1.5} />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#33A491] text-white p-2 rounded-xl shadow-lg">
                <ShieldCheck size={16} />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                  {userdata?.name || 'Guest User'}
                </h1>
              </div>
              <p className="text-slate-400 font-medium uppercase text-[10px] tracking-[0.2em] mb-4">Verified Student Member</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <button className="flex items-center gap-2 bg-[#33A491] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#2a8a7a] transition shadow-lg shadow-[#33a49133]">
                  <Settings size={16} /> Edit Profile
                </button>
                <button 
                  onClick={() => { logout(); navi("/"); }}
                  className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-4 bg-white border border-slate-200/60 rounded-[2.5rem] p-8 shadow-sm">
            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-[#33A491] mb-6">
              <Calendar size={20} />
            </div>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Joined Edunation</p>
            <p className="text-xl font-black text-slate-900">April 2025</p>
            <div className="mt-4 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#33A491] w-2/3 rounded-full"></div>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 font-bold uppercase">Profile Completion: 65%</p>
          </div>

          <div className="md:col-span-6 bg-white border border-slate-200/60 rounded-[2.5rem] p-8 shadow-sm flex items-center gap-6 group hover:border-[#33A491]/30 transition-colors">
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-[#33A491] transition-colors">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Email Address</p>
              <p className="text-lg font-bold text-slate-900 break-all">{userdata?.email || 'N/A'}</p>
            </div>
          </div>

          <div className="md:col-span-6 bg-white border border-slate-200/60 rounded-[2.5rem] p-8 shadow-sm flex items-center gap-6 group hover:border-[#33A491]/30 transition-colors">
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-[#33A491] transition-colors">
              <IdCard size={24} />
            </div>
            <div>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Student Identifier</p>
              <p className="text-lg font-bold text-slate-900">#{userdata?._id?.slice(-8) || '00000000'}</p>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-xs font-medium">
            Need help with your account? <span className="text-[#33A491] font-bold cursor-pointer hover:underline">Contact Support</span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Profile;