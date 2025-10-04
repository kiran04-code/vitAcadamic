import React from 'react';
import { User, Mail, IdCard } from 'lucide-react';
const Feedbackcontainer = () => {
  return (
    <div className="flex flex-col items-center text-center mb-16 px-4">
      <h1 className="text-3xl md:text-[45px] mb-6 font-bold text-[#33A491] drop-shadow-lg tracking-wide">
        Hear from Our First-Year Students
      </h1>

      <div className="flex flex-wrap gap-8 items-center justify-center">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="group flex flex-col items-center py-10 px-6 bg-white border border-gray-300/60 w-72 rounded-tl-3xl rounded-br-3xl shadow-lg transition duration-300 ease-in-out hover:border-[#33A491] hover:bg-[#33A491] hover:shadow-xl hover:scale-105"
          >
            <h2 className="text-gray-700 group-hover:text-white text-xl font-semibold mt-2">
              Donald Jackman
            </h2>
            <p className="text-gray-500 group-hover:text-white/80 mt-1 font-medium">
              CSE (ALML)
            </p>
            <p className="text-center text-gray-500/70 group-hover:text-white/70 mt-4 text-sm leading-relaxed">
              This platform is very helpful for all First Year Students. It makes academic tasks easier and builds confidence.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedbackcontainer;
