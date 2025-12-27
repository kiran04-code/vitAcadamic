import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Play, FileText, ChevronDown, Lock, 
  ArrowLeft, GraduationCap, CheckCircle2, Info
} from 'lucide-react';
import { dummyLectureData } from '../assets/assets';
import { useAuth } from '../context/auth';

import Footer from '../components/Footer';
import VideoModal from '../components/VideoModal';
import Notes from '../utils/Notes';

const DashboardPage = () => {
  const { sub } = useParams();
  const { userdata, setshowUserLogin } = useAuth();
  const navigate = useNavigate();

  const filteredData = dummyLectureData.find(
    item => item.subject.toLowerCase() === sub.toLowerCase()
  );

  const [openUnitIndex, setOpenUnitIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');
  const [currentVideoTitle, setCurrentVideoTitle] = useState('');

  const toggleUnit = (index) => {
    setOpenUnitIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const openVideoModal = (videoUrl, title) => {
    setCurrentVideoUrl(videoUrl);
    setCurrentVideoTitle(title);
    setIsVideoModalOpen(true);
  };

  if (!filteredData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-md p-8 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm text-center">
            <Info className="mx-auto text-red-500 mb-4" size={48} />
            <h1 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Subject Not Found</h1>
            <p className="text-slate-500 mb-6 text-sm">We couldn't find resources for "{sub}".</p>
            <button 
              onClick={() => navigate(-1)} 
              className="w-full bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-200"
            >
              Go Back
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-400 hover:text-[#33A491] transition font-bold text-[10px] md:text-xs uppercase tracking-widest mb-6 md:mb-10"
          >
            <ArrowLeft size={16} /> Back to Modules
          </button>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-[#33A491] mb-3 md:mb-5">
                <GraduationCap size={20} />
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">Curriculum Dashboard</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter uppercase break-words leading-none">
                {filteredData.subject}
              </h1>
            </div>
            
            <div className="bg-slate-50 p-5 md:p-6 rounded-[2rem] border border-slate-100 self-start lg:self-end">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="text-[#33A491]" size={20} />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-black uppercase text-slate-400">Total Progress</p>
                  <p className="text-base md:text-lg font-black text-slate-900">{filteredData.units.length} Core Units</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 w-full flex-grow">
       
        
        {filteredData.mainTittle && (
          <div className="mb-10 p-5 md:p-7 bg-[#33A491]/5 border border-[#33A491]/10 rounded-3xl shadow-sm">
            <div className="flex gap-3">
              <div className="w-1 h-12 bg-[#33A491] rounded-full hidden md:block" />
              <p className="text-[#33A491] font-bold italic text-sm md:text-base leading-relaxed">
                "{filteredData.mainTittle}"
              </p>
            </div>
          </div>
        )}

        <div className="grid gap-6">
          {filteredData.units.map((unit, unitIndex) => {
            const isOpen = openUnitIndex === unitIndex;
            return (
              <div 
                key={unitIndex} 
                className={`bg-white rounded-[2rem] md:rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
                  isOpen ? 'border-[#33A491]/30 shadow-xl' : 'border-slate-200/60 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleUnit(unitIndex)}
                  className={`w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors ${
                    isOpen ? 'bg-[#33A491]/5' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-4 md:gap-8">
                    <span className={`text-2xl md:text-4xl font-black transition-colors ${isOpen ? 'text-[#33A491]/40' : 'text-slate-100'}`}>
                      0{unitIndex + 1}
                    </span>
                    <h3 className={`text-lg md:text-xl font-black tracking-tight leading-tight ${isOpen ? 'text-[#33A491]' : 'text-slate-900'}`}>
                      {unit.unit}
                    </h3>
                  </div>
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#33A491] text-white rotate-180' : 'bg-slate-100 text-slate-400'
                  }`}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 md:px-8 md:mt-10 pb-8 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="flex flex-col sm:flex-row items-center justify-between p-5 md:p-6 bg-slate-50 rounded-3xl mb-8 border border-slate-100 gap-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white rounded-2xl shadow-sm text-[#33A491]">
                          <FileText size={20} />
                        </div>
                        <p className="font-bold text-slate-700 text-sm md:text-base">Unit Repository & Notes</p>
                      </div>
                      <a
                        href={unit?.notesLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto text-center bg-[#33A491] text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-[#2a8a7a] transition-all shadow-lg shadow-[#33a49133] active:scale-95 text-sm"
                      >
                        Download PDF
                      </a>
                    </div>

                    <div className="space-y-3">
                      {unit.subtopics.map((lecture, i) => (
                        <div
                          key={i}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white border border-slate-100 rounded-2xl hover:border-[#33A491]/30 hover:shadow-md transition-all group gap-4"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#33A491] transition-colors shrink-0" />
                            <p className="font-bold text-slate-700 text-xs md:text-sm">{lecture.title}</p>
                          </div>

                          {userdata ? (
                            <button
                              onClick={() => openVideoModal(lecture.videoLink, lecture.title)}
                              className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#33A491] hover:text-slate-900 transition-colors bg-[#33A491]/5 sm:bg-transparent px-4 py-2 sm:p-0 rounded-xl"
                            >
                              <Play size={14} fill="currentColor" /> Watch Video
                            </button>
                          ) : (
                            <button
                              onClick={() => setshowUserLogin(true)}
                              className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-red-500 transition-colors bg-slate-100 sm:bg-transparent px-4 py-2 sm:p-0 rounded-xl"
                            >
                              <Lock size={14} /> Unlock Access
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      <Footer />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={currentVideoUrl}
        title={currentVideoTitle}
      />
    </div>
  );
};

export default DashboardPage;