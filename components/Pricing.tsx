import React from 'react';
import { Check, X } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="w-full py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Pilih Pakej Anda
          </h2>
          <p className="text-gray-500 font-bold text-sm uppercase tracking-wide">Jangan buang masa. Ambil yang berbaloi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          
          {/* Option A: Decoy */}
          <div className="order-2 md:order-1 border-2 border-gray-200 rounded p-6 bg-white opacity-60 hover:opacity-100 transition-opacity">
            <h3 className="text-lg font-black text-gray-500 mb-2 text-center uppercase">Ebook Sahaja</h3>
            <div className="text-center mb-4">
              <span className="text-3xl font-black text-gray-400">RM39</span>
            </div>
            
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center text-gray-600 font-bold">
                <Check className="w-4 h-4 mr-2" /> Blueprint Interview
              </li>
              <li className="flex items-center text-gray-300 font-medium">
                <X className="w-4 h-4 mr-2" /> 30 Skrip Jawapan
              </li>
              <li className="flex items-center text-gray-300 font-medium">
                <X className="w-4 h-4 mr-2" /> Checklist Anti-Gugup
              </li>
            </ul>

            <button className="w-full py-2 rounded border-2 border-gray-300 text-gray-400 font-bold uppercase hover:bg-gray-50 text-sm">
              Beli Basic (Rugi)
            </button>
          </div>

          {/* Option B: Winner */}
          <div className="order-1 md:order-2 relative border-4 border-red-600 rounded-lg bg-red-50 p-6 shadow-2xl z-10">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded text-xs font-black uppercase tracking-widest shadow border-2 border-white">
              Paling Berbaloi
            </div>

            <h3 className="text-xl font-black text-red-600 mb-1 text-center uppercase mt-2">Full Kit + Bonus</h3>
            
            <div className="text-center mb-4 border-b-2 border-dashed border-red-200 pb-3">
              <span className="text-base text-red-400 line-through mr-2 font-bold">RM299</span>
              <span className="text-5xl font-black text-slate-900 tracking-tighter">RM49</span>
            </div>

            <ul className="space-y-2 mb-6">
              {[
                "Blueprint Pukau Interviewer",
                "30 Skrip Jawapan Maut",
                "Checklist Anti-Gugup",
                "Hacks Body Language",
                "BONUS: Realiti Malaysia & Nego Gaji"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-slate-900 font-bold text-sm">
                  <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                  <span className="uppercase leading-tight">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white text-lg font-black uppercase rounded shadow-lg animate-wiggle transition-all border-b-4 border-red-800 active:border-b-0 active:translate-y-1">
              Download Sekarang
            </button>
            <p className="text-center text-[10px] text-red-500 mt-2 font-bold uppercase">
              Jaminan Pulangan Wang 30 Hari
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;