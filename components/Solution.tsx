import React from 'react';

const Solution: React.FC = () => {
  return (
    <section className="w-full py-8 px-4 bg-white">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase mb-1 tracking-tight">
          Ini Jalan Pintas Dia
        </h2>
        <p className="text-gray-500 font-bold uppercase tracking-wide text-[10px]">Pakej lengkap untuk 'hack' interview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <FeatureCard 
          icon="fa-book-open"
          title="Blueprint Ebook"
          desc="Kitab rahsia HR simpan."
        />
        <FeatureCard 
          icon="fa-file-lines"
          title="30 Skrip Maut"
          desc="Copy, paste, hafal je."
        />
        <FeatureCard 
          icon="fa-list-check"
          title="Checklist Anti-Gugup"
          desc="Hilang gemuruh 5 minit."
        />
        <FeatureCard 
          icon="fa-user-tie"
          title="Body Language Hack"
          desc="Nampak confident gila."
        />
        <FeatureCard 
          icon="fa-paper-plane"
          title="Email Crash Course"
          desc="Bimbingan direct 7 hari."
        />
        <FeatureCard 
          icon="fa-star"
          title="BONUS: Realiti Malaysia"
          desc="Nego gaji style jalanan."
          highlight
        />
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ icon: string, title: string, desc: string, highlight?: boolean }> = ({ icon, title, desc, highlight }) => {
  return (
    <div className={`p-3 rounded border-2 ${highlight ? 'bg-yellow-50 border-yellow-400' : 'bg-white border-gray-200'} flex items-center space-x-3`}>
      <div className={`flex-shrink-0 w-8 text-center ${highlight ? 'text-yellow-600' : 'text-red-600'}`}>
        <i className={`fa-solid ${icon} text-lg`}></i>
      </div>
      <div>
        <h3 className="font-black text-slate-900 text-sm uppercase leading-none mb-1">{title}</h3>
        <p className="text-gray-600 text-xs font-bold leading-none">{desc}</p>
      </div>
    </div>
  );
};

export default Solution;