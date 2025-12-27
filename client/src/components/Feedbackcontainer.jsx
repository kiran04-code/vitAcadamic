import React from 'react';
import { Quote, MessageSquare, Star } from 'lucide-react';

const Feedbackcontainer = () => {
  const testimonials = [
    {
      name: "Donald Jackman",
      dept: "CSE (AI & ML)",
      text: "This platform is a lifesaver for First Year Students. It simplifies the chaotic academic schedule and keeps all resources just one click away.",
      size: "md:col-span-7" 
    },
    {
      name: "Sneha Patil",
      dept: "Information Technology",
      text: "The PYQ archive is the best feature. The solutions are accurate and very easy to follow.",
      size: "md:col-span-5" 
    },
    {
      name: "Rahul Mehta",
      dept: "Mechanical Eng.",
      text: "I love the clean UI. No distractions, just pure study material. Highly recommended!",
      size: "md:col-span-12" // Wide card
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#33A491] font-black uppercase tracking-[0.2em] text-[10px] mb-4">
              <MessageSquare size={14} /> 
              Student Voices
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter">
              Trusted by the <br />
              <span className="text-[#33A491]">Freshman Community.</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-600 ml-2">4.9/5 Average Rating</span>
          </div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`${item.size} bg-white border border-slate-200/60 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-[#33A491]/30 transition-all duration-500 group flex flex-col justify-between`}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#33A491] text-[#33A491]" />
                    ))}
                  </div>
                  <Quote size={32} className="text-slate-100 group-hover:text-[#33A491]/20 transition-colors" />
                </div>
                <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-8">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-slate-50 pt-8">
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 font-bold group-hover:bg-[#33A491] group-hover:text-white transition-all">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">
                    {item.name}
                  </h4>
                  <p className="text-xs font-bold text-[#33A491] mt-1">
                    {item.dept}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedbackcontainer;