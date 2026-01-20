import React from 'react';
import { Check, X, Clock } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="w-full py-20 px-5 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2 uppercase">
            Pilih Pakej Anda
          </h2>
          <p className="text-gray-500">Jangan salah pilih. Tengok betul-betul offer ni.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Card 1: Decoy (The Loser) */}
          <div className="order-2 md:order-1 border border-gray-200 rounded-xl p-8 bg-gray-50 opacity-90 hover:opacity-100 transition-opacity">
            <h3 className="text-2xl font-bold text-gray-700 mb-2 text-center uppercase">Ebook Sahaja</h3>
            <div className="text-center my-6">
              <span className="text-4xl font-bold text-gray-800">RM39</span>
            </div>
            
            <ul className="space-y-4 mb-8 text-sm">
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 mr-3 text-green-500" />
                Blueprint Interview
              </li>
              <li className="flex items-center text-gray-400">
                <X className="w-5 h-5 mr-3" />
                30 Skrip Jawapan
              </li>
              <li className="flex items-center text-gray-400">
                <X className="w-5 h-5 mr-3" />
                Checklist Anti-Gugup
              </li>
              <li className="flex items-center text-gray-400">
                <X className="w-5 h-5 mr-3" />
                Bonus Realiti Malaysia
              </li>
            </ul>

            <button className="w-full py-3 rounded-lg bg-gray-200 text-gray-700 font-bold hover:bg-gray-300 transition-colors">
              Beli Ebook Saja
            </button>
          </div>

          {/* Card 2: The Winner (The Hero) */}
          <div className="order-1 md:order-2 border-4 border-red-600 rounded-xl p-8 bg-white shadow-2xl relative transform scale-105 z-10">
            {/* Ribbon */}
            <div className="absolute top-0 right-0">
               <div className="bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider shadow-sm">
                 Paling Laris
               </div>
            </div>

            <h3 className="text-2xl font-extrabold text-red-600 mb-2 text-center uppercase tracking-tight">Full Kit Bundle + Bonus</h3>
            
            <div className="text-center my-6">
              <span className="text-lg text-gray-400 line-through mr-2 font-medium">RM299</span>
              <span className="text-5xl font-extrabold text-red-600">RM49</span>
            </div>

            {/* Countdown Mockup */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 mb-6 flex items-center justify-center space-x-2 text-yellow-800 font-semibold text-sm animate-pulse">
              <Clock className="w-4 h-4" />
              <span>Harga naik RM99 dalam masa 23:59:00</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                "Blueprint Pukau Interviewer",
                "30 Skrip Jawapan Maut (Copy Paste)",
                "Checklist Anti-Gugup",
                "Hacks Body Language",
                "7-Hari Crash Course",
                "BONUS: Realiti Malaysia & Nego Gaji"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-slate-800 font-medium">
                  <div className="bg-green-100 rounded-full p-0.5 mr-3 mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-lg bg-red-600 text-white text-xl font-bold shadow-lg hover:bg-red-700 hover:shadow-red-500/40 transition-all transform hover:-translate-y-1">
              DOWNLOAD SEKARANG (RM49)
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">
              Jaminan Pulangan Wang 30 Hari. Risiko Kosong.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;