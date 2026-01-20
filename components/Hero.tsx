import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full px-5 py-20 md:py-32 flex flex-col items-center text-center max-w-6xl mx-auto bg-white">
      <div className="space-y-6 animate-fade-in-up">
        {/* Super Headline */}
        <p className="text-red-600 font-bold tracking-widest uppercase text-sm md:text-base animate-pulse">
          AMARAN: TEKNIK INI UNTUK YANG SERIUS NAK KERJA SAHAJA
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight md:leading-[1.1]">
          SIAPA SANGKA CUMA UBAH <br className="hidden md:block"/>
          <span className="text-red-600 underline decoration-red-200 decoration-4 underline-offset-4">'SKRIP'</span> 
          BOLEH DAPAT GAJI <br className="hidden md:block"/>
          RM3,000+ SEBULAN?
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
          Tak Perlu Kabel. Tak Perlu English Power. <br/>
          <span className="font-bold underline decoration-yellow-400 text-slate-900">Tak Perlu Muka Hensem.</span>
        </p>

        {/* CTA Button */}
        <div className="pt-8 w-full flex flex-col items-center">
          <a 
            href="#pricing"
            className="w-full md:w-auto px-8 py-5 bg-red-600 hover:bg-red-700 text-white text-xl md:text-2xl font-bold rounded-xl shadow-xl hover:shadow-red-500/50 transition-all transform hover:-translate-y-1 animate-pulse-fast"
          >
            SAYA NAK RAHSIA NI (RM49)
          </a>
          <p className="mt-4 text-sm text-gray-500 italic">
            *Dah lebih 1,200 graduan 🇲🇾 berjaya guna teknik ni.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;