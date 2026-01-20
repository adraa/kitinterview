import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full pt-6 pb-6 px-4 bg-white flex flex-col items-center text-center">
        {/* Top Badge */}
        <div className="bg-red-600 text-white px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest rounded mb-4 animate-pulse">
          Amaran: Teknik Ini Untuk Yang Serius Nak Kerja Sahaja
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] uppercase mb-4 tracking-tight">
          Siapa Sangka Cuma Ubah <span className="bg-red-600 text-white px-2 inline-block transform -rotate-1">SKRIP</span> Boleh Dapat Gaji RM3,000+?
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-gray-700 font-bold leading-snug mb-6">
          Tak Perlu Kabel. Tak Perlu English Power. <br/>
          <span className="text-slate-900 underline decoration-red-600 decoration-4">Tak Perlu Muka Hensem.</span>
        </p>

        {/* Hero Image */}
        <div className="w-full max-w-lg mb-6 relative">
          <img 
            src="https://placehold.co/600x400/eee/333?text=EBOOK+COVER+3D" 
            alt="Kit Pukau Cover" 
            className="relative w-full rounded-lg border-4 border-white shadow-2xl"
          />
        </div>

        {/* CTA Button */}
        <div className="w-full">
          <a 
            href="#pricing"
            className="block w-full px-6 py-4 bg-red-600 hover:bg-red-700 text-white text-xl md:text-2xl font-black uppercase rounded shadow-xl shadow-red-600/30 transition-all transform hover:-translate-y-0.5 animate-pulse-fast"
          >
            Saya Nak Rahsia Ni (RM49)
          </a>
        </div>
    </section>
  );
};

export default Hero;