import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full pt-8 pb-6 px-4 bg-white flex flex-col items-center text-center border-b border-gray-100">
      <div className="max-w-3xl w-full flex flex-col items-center">
        {/* Top Badge */}
        <div className="bg-red-600 text-white px-3 py-1 text-xs font-black uppercase tracking-widest rounded mb-4 shadow-sm animate-pulse">
          Amaran: Teknik Ini Untuk Yang Serius Sahaja
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] uppercase mb-4 tracking-tight">
          Siapa Sangka Cuma Ubah <span className="bg-red-600 text-white px-2 shadow-sm inline-block transform -rotate-1">SKRIP</span> Boleh Dapat Gaji RM3,000+?
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-xl text-gray-700 font-bold max-w-xl mx-auto leading-snug mb-6">
          Tak Perlu Kabel. Tak Perlu English Power. <br/>
          <span className="text-slate-900 underline decoration-red-500 decoration-4">Tak Perlu Muka Hensem.</span>
        </p>

        {/* Hero Image */}
        <div className="w-full max-w-2xl mb-6 relative group">
          <div className="absolute -inset-1 bg-red-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
          <img 
            src="https://placehold.co/600x400/f8f9fa/1d1d1f?text=PREVIEW+KIT+PUKAU" 
            alt="Interview Guide Preview" 
            className="relative w-full rounded-lg border-4 border-white shadow-xl"
          />
        </div>

        {/* CTA Button */}
        <div className="w-full md:w-auto flex flex-col items-center">
          <a 
            href="#pricing"
            className="w-full md:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg md:text-2xl font-black uppercase rounded shadow-xl shadow-red-600/20 transition-all transform hover:-translate-y-0.5 animate-pulse-fast"
          >
            Saya Nak Rahsia Ni (RM49)
          </a>
          <p className="mt-2 text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wide">
            *Dah lebih 1,200 graduan 🇲🇾 berjaya guna teknik ni.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;