import React from 'react';
import { BookOpen, FileText, CheckCircle, User, Mail, Star } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section className="w-full py-20 px-5 max-w-6xl mx-auto bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Berhenti Stress. Ini Jalan Pintas Dia.
        </h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Kami dah pakejkan semua benda yang anda perlu untuk 'hack' interview ni.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard 
          icon={<BookOpen className="w-6 h-6 text-white" />}
          title="Blueprint Pukau Interviewer"
          desc="Ebook Utama. Kitab rahsia yang HR tak nak anda tahu."
        />
        <FeatureCard 
          icon={<FileText className="w-6 h-6 text-white" />}
          title="30 Skrip Jawapan Maut"
          desc="Tak payah fikir. Copy, paste, hafal, dan luahkan masa interview."
        />
        <FeatureCard 
          icon={<CheckCircle className="w-6 h-6 text-white" />}
          title="Checklist Anti-Gugup"
          desc="Baca 5 minit sebelum masuk bilik. Hilang terus gemuruh."
        />
        <FeatureCard 
          icon={<User className="w-6 h-6 text-white" />}
          title="Hacks Body Language"
          desc="Cara duduk & pandang mata yang buat anda nampak confident."
        />
        <FeatureCard 
          icon={<Mail className="w-6 h-6 text-white" />}
          title="7-Hari Crash Course"
          desc="Email series bimbingan straight to the point."
        />
        <FeatureCard 
          icon={<Star className="w-6 h-6 text-white" />}
          title="BONUS: Realiti Malaysia"
          desc="Cara nego gaji style jalanan. Jangan terima je offer rendah!"
          isBonus
        />
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, desc: string, isBonus?: boolean }> = ({ icon, title, desc, isBonus }) => {
  return (
    <div className={`p-6 rounded-xl border ${isBonus ? 'bg-yellow-50 border-yellow-200' : 'bg-white border-gray-100'} shadow-lg flex items-start space-x-4 hover:shadow-xl transition-shadow`}>
      <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${isBonus ? 'bg-yellow-500' : 'bg-green-500'}`}>
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg text-slate-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

export default Solution;