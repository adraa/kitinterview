import React from 'react';
import { BookOpen, FileText, CheckCircle, User, Mail, Star } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section className="w-full py-10 px-4 bg-gray-50 border-t border-b border-gray-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase mb-1 tracking-tight">
            Ini Jalan Pintas Dia
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-wide text-[10px]">Pakej lengkap untuk 'hack' interview</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <FeatureCard 
            icon={<BookOpen className="w-5 h-5 text-red-600" />}
            title="Blueprint Pukau"
            desc="Kitab rahsia HR simpan."
          />
          <FeatureCard 
            icon={<FileText className="w-5 h-5 text-red-600" />}
            title="30 Skrip Maut"
            desc="Copy, paste, hafal je."
          />
          <FeatureCard 
            icon={<CheckCircle className="w-5 h-5 text-red-600" />}
            title="Checklist Anti-Gugup"
            desc="Hilang gemuruh 5 minit."
          />
          <FeatureCard 
            icon={<User className="w-5 h-5 text-red-600" />}
            title="Body Language Hack"
            desc="Nampak confident gila."
          />
          <FeatureCard 
            icon={<Mail className="w-5 h-5 text-red-600" />}
            title="7-Hari Crash Course"
            desc="Bimbingan direct email."
          />
          <FeatureCard 
            icon={<Star className="w-5 h-5 text-yellow-600" />}
            title="BONUS: Nego Gaji"
            desc="Jangan terima offer rendah!"
            highlight
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, desc: string, highlight?: boolean }> = ({ icon, title, desc, highlight }) => {
  return (
    <div className={`p-3 rounded border-2 ${highlight ? 'bg-yellow-50 border-yellow-400' : 'bg-white border-gray-200'} flex items-center space-x-3`}>
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-black text-slate-900 text-sm uppercase leading-none mb-1">{title}</h3>
        <p className="text-gray-600 text-xs font-bold leading-none">{desc}</p>
      </div>
    </div>
  );
};

export default Solution;