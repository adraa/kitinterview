import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="w-full py-10 px-4 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
          Pilih Pakej Anda
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        
        {/* Option A: Decoy */}
        <div className="order-2 md:order-1 border-2 border-gray-300 rounded-lg p-6 bg-white opacity-70">
          <h3 className="text-lg font-black text-gray-500 mb-2 text-center uppercase">Ebook Sahaja</h3>
          <div className="text-center mb-4">
            <span className="text-3xl font-black text-gray-400">RM39</span>
          </div>
          
          <ul className="space-y-2 mb-6 text-sm">
            <li className="flex items-center text-gray-600 font-bold"><i className="fa-solid fa-check w-5 text-green-500"></i> Ebook Blueprint</li>
            <li className="flex items-center text-gray-400 font-medium"><i className="fa-solid fa-xmark w-5"></i> 30 Skrip Maut</li>
            <li className="flex items-center text-gray-400 font-medium"><i className="fa-solid fa-xmark w-5"></i> Bonus Realiti</li>
          </ul>

          <button className="w-full py-2 rounded border-2 border-gray-300 text-gray-400 font-bold uppercase bg-gray-50 text-sm">
            Beli Basic (Rugi)
          </button>
        </div>

        {/* Option B: Hero */}
        <div className="order-1 md:order-2 relative border-4 border-red-600 rounded-xl bg-red-50 p-6 shadow-2xl z-10 transform md:-translate-y-2">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow border-2 border-white">
            Paling Berbaloi
          </div>

          <div className="text-center mt-2 mb-4 border-b-2 border-dashed border-red-200 pb-3">
            <span className="text-5xl font-black text-slate-900 tracking-tighter">RM49</span>
            <p className="text-xs text-red-500 font-bold mt-1 uppercase">Harga Promosi (Asal RM299)</p>
          </div>

          <ul className="space-y-2 mb-6 text-sm">
            {[
              { t: "Blueprint Ebook", v: "RM99" },
              { t: "30 Skrip Jawapan", v: "RM59" },
              { t: "Checklist Anti-Gugup", v: "RM29" },
              { t: "Bonus: Nego Gaji", v: "Priceless" }
            ].map((item, i) => (
              <li key={i} className="flex items-center text-slate-900 font-bold">
                <i className="fa-solid fa-circle-check text-green-600 mr-2"></i>
                <span className="uppercase">{item.t} <span className="text-[10px] text-gray-500 font-normal">({item.v})</span></span>
              </li>
            ))}
          </ul>

          <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-black uppercase rounded shadow-lg animate-wiggle transition-all border-b-4 border-red-800 active:border-b-0 active:translate-y-1">
            Download Sekarang
          </button>
        </div>

      </div>
    </section>
  );
};

export default Pricing;