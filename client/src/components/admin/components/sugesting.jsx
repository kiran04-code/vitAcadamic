import { useEffect, useState } from 'react';
import React from 'react';
import { useAuth } from '../../../context/auth';
import { User, Mail, Calendar, Hash } from 'lucide-react';

const Sug = () => {
    const [sugesiondata, setsuggesiondata] = useState([]);
    const { axios } = useAuth();

    const alluSugesion = async () => {
        try {
            const { data } = await axios.get("/api/AllSugesion");
            if (data.success) setsuggesiondata(data.sugData);
        } catch (error) { console.error(error); }
    };

    useEffect(() => { alluSugesion(); }, []);

    return (
        <div className="space-y-4">
            {sugesiondata.length > 0 ? (
                sugesiondata.map((data, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="h-14 w-14 bg-[#33A491]/10 rounded-2xl flex items-center justify-center text-[#33A491]">
                                    <User size={24} />
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-900 text-sm uppercase tracking-tight">{data.name}</h4>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1 leading-none tracking-widest">
                                            <Mail size={12} className="text-slate-300" /> {data.email}
                                        </span>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1 leading-none tracking-widest">
                                            <Hash size={12} className="text-slate-300" /> ID-{idx + 101}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-colors">Archive</button>
                                <button className="px-4 py-2 bg-[#33A491]/10 text-[#33A491] rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#33A491] hover:text-white transition-all">Reply</button>
                            </div>
                        </div>
                        <div className="mt-6 p-5 bg-slate-50/50 rounded-2xl border border-slate-100">
                            <p className="text-slate-600 text-sm font-medium leading-relaxed italic">
                                "{data.suggestions}"
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <div className="p-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-200 text-center">
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No entries found</p>
                </div>
            )}
        </div>
    );
};

export default Sug;