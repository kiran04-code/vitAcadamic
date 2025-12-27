import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/auth';
import { GraduationCap, Quote, CheckCircle2, MoreVertical } from 'lucide-react';

const Fedu = () => {
    const [datafeedback, setdatafeedback] = useState([]);
    const { axios } = useAuth();

    const fetchAllFeedback = async () => {
        try {
            const { data } = await axios.get("/api/getallfeedback");
            if (data.success) setdatafeedback(data.fedData);
        } catch (error) { setdatafeedback([]); }
    };

    useEffect(() => { fetchAllFeedback(); }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {datafeedback && datafeedback.length > 0 ? (
                datafeedback.map((data, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-200/60 shadow-sm flex flex-col hover:border-[#33A491]/30 transition-all group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center">
                                    <GraduationCap size={20} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5">
                                        <h4 className="font-black text-slate-900 text-[11px] uppercase tracking-tight leading-none">{data.name}</h4>
                                        <CheckCircle2 size={12} className="text-blue-500 fill-blue-50" />
                                    </div>
                                    <p className="text-[10px] font-black text-[#33A491] uppercase tracking-[0.15em] mt-1 leading-none">{data.branch}</p>
                                </div>
                            </div>
                            <button className="text-slate-300 hover:text-slate-600 transition-colors">
                                <MoreVertical size={18} />
                            </button>
                        </div>

                        <div className="relative flex-grow">
                            <Quote size={24} className="text-slate-100 absolute -top-4 -left-2 -z-0" />
                            <p className="text-sm leading-relaxed text-slate-600 font-medium italic relative z-10">
                                "{data.feedbacks}"
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-1 h-4 rounded-full bg-[#33A491]/20"></div>
                                ))}
                            </div>
                            <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Public Review</span>
                        </div>
                    </div>
                ))
            ) : (
                <div className="col-span-full p-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-200 text-center">
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No feedback data available</p>
                </div>
            )}
        </div>
    );
};

export default Fedu;