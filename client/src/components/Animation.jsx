import React from 'react';
import { User, CheckCircle2, Quote, Star } from 'lucide-react';

/**
 * Component Name: Animation
 * Description: A static, premium grid showing genuine student feedback.
 * Design: White Bento style with #33A491 accents.
 */
const Animation = () => {
  // Genuine student feedback data focusing on VIT Pune resources
  const feedbacks = [
    {
      name: 'Jay Deshmukh',
      handle: '@jay_desh',
      text: "The PYQ archive is a lifesaver for Endsem prep. Found exactly what I needed for Applied Maths in seconds.",
      category: 'Exam Success'
    },
    {
      name: 'Vedant Polawar',
      handle: '@vedant_p',
      text: "No more hunting for YouTube links. Everything is organized unit-wise. Best thing to happen to my CGPA!",
      category: 'Lecture Library'
    },
    {
      name: 'Ganesh Rayphale',
      handle: '@ganesh_r',
      text: "The notes are incredibly clean and easy to follow. Perfect for last-minute revisions before the MSE.",
      category: 'Curated Notes'
    },
    {
      name: 'Karan Thombre',
      handle: '@karan_t',
      text: "Finally, a platform that understands VIT's curriculum. The interface is smooth and actually useful.",
      category: 'User Experience'
    }
  ];

  return (
    <div className="py-24 bg-slate-50 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#33A491]/10 text-[#33A491] px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4">
            <Star size={14} fill="currentColor" /> Student Feedback
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">
            Verified Student <span className="text-[#33A491]">Reviews</span>
          </h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {feedbacks.map((card, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-200/60 shadow-sm flex flex-col hover:border-[#33A491]/40 transition-all duration-500 group"
            >
  
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-[#33A491] group-hover:text-white transition-all duration-300">
                  <User size={24} />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1">
                    <p className="font-black text-slate-900 text-xs uppercase tracking-tight truncate">
                      {card.name}
                    </p>
                    <CheckCircle2 size={12} className="text-blue-500 fill-blue-50" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {card.handle}
                  </span>
                </div>
              </div>

     
              <div className="relative flex-grow">
                <Quote size={20} className="text-[#33A491]/10 absolute -top-3 -left-2" />
                <p className="text-sm leading-relaxed text-slate-600 font-medium italic relative z-10">
                  "{card.text}"
                </p>
              </div>

   
              <div className="mt-8 pt-6 border-t border-slate-50">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black text-[#33A491] uppercase tracking-[0.2em] bg-[#33A491]/5 px-3 py-1.5 rounded-lg">
                    {card.category}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="fill-[#33A491] text-[#33A491]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-16 text-center">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                Join our growing community of learners today.
            </p>
        </div>

      </div>
    </div>
  );
};

export default Animation;