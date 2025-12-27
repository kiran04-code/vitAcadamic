import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FileText, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowLeft, 
  History,
  Download,
  BookOpenCheck
} from 'lucide-react';
import { dummyPyqs } from '../assets/assets';

const PYQDashBord = () => {
  const { subs } = useParams();
  const navigate = useNavigate();
  
  const filteredData = dummyPyqs.find(
    item => item.subject.toLowerCase() === subs.toLowerCase()
  );

  const [openUnitIndex, setOpenUnitIndex] = useState(0);

  const toggleUnit = (index) => {
    setOpenUnitIndex(prevIndex => (prevIndex === index ? null : index));
  };

  if (!filteredData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6">
        <div className="w-full max-w-md p-10 bg-white rounded-[3rem] border border-slate-200 shadow-sm text-center">
            <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle size={40} />
            </div>
            <h1 className="text-2xl font-black text-slate-900 mb-2 tracking-tight uppercase">Data Missing</h1>
            <p className="text-slate-500 mb-8 text-sm">Question bank for "{subs}" is currently being updated.</p>
            <button 
              onClick={() => navigate(-1)} 
              className="w-full bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition shadow-lg"
            >
              Return to Catalog
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 md:py-12">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-400 hover:text-[#33A491] transition font-bold text-[10px] md:text-xs uppercase tracking-widest mb-6"
          >
            <ArrowLeft size={16} /> Back to Repository
          </button>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-[#33A491] mb-3">
                <History size={20} className="shrink-0" />
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">Previous Year Archive</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">
                {filteredData.subject}
              </h1>
            </div>
            
            <div className="bg-[#33A491]/5 p-4 md:p-6 rounded-[2rem] border border-[#33A491]/10 self-start lg:self-end shrink-0">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <BookOpenCheck className="text-[#33A491]" size={20} />
                  </div>
                  <p className="text-[10px] font-black uppercase text-[#33A491] leading-tight">
                    Quality Assured<br/><span className="text-slate-400">Question Bank</span>
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-16 w-full flex-grow">
        <div className="grid gap-4 md:gap-6">
          {filteredData.units.map((unit, unitIndex) => {
            const isOpen = openUnitIndex === unitIndex;
            return (
              <div 
                key={unitIndex} 
                className={`bg-white rounded-[1.5rem] md:rounded-[2.5rem] border transition-all duration-500 ${
                  isOpen ? 'border-[#33A491]/30 shadow-xl' : 'border-slate-200/60 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleUnit(unitIndex)}
                  className={`w-full flex items-center justify-between p-5 md:p-8 text-left transition-colors ${
                    isOpen ? 'bg-[#33A491]/5' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-4 md:gap-8 min-w-0">
                    <span className={`text-xl md:text-4xl font-black shrink-0 transition-colors ${isOpen ? 'text-[#33A491]/40' : 'text-slate-100'}`}>
                      {String(unitIndex + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`text-sm sm:text-base md:text-xl font-black tracking-tight leading-tight truncate uppercase ${isOpen ? 'text-[#33A491]' : 'text-slate-900'}`}>
                      {unit.unit}
                    </h3>
                  </div>
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    isOpen ? 'bg-[#33A491] text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 md:px-8 pb-8 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="space-y-3 mt-4 md:mt-6">
                      {unit.subtopics.map((lecture, i) => (
                        <div
                          key={i}
                          className="flex flex-col md:flex-row md:items-center justify-between p-4 md:p-5 bg-slate-50/50 border border-slate-100 rounded-xl md:rounded-2xl hover:border-[#33A491]/30 transition-all group gap-4"
                        >
                          <div className="flex items-center gap-3">
                             <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-slate-400 group-hover:text-[#33A491] shadow-sm transition-colors">
                               <FileText size={16} />
                             </div>
                             <p className="font-bold text-slate-700 text-xs md:text-sm uppercase tracking-tight">{lecture.title}</p>
                          </div>

                          <div className="flex items-center gap-2">
                            <a
                              href={lecture.practiceQuestion}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-slate-800 transition shadow-md active:scale-95"
                            >
                              Practice
                            </a>
                            <a
                              href={lecture.notesLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#33A491] text-white px-4 py-2.5 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-[#2a8a7a] transition shadow-md active:scale-95"
                            >
                              <Download size={12} /> View PYQ
                            </a>
                          </div>
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
    </div>
  );
};

export default PYQDashBord;