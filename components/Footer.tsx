import React, { useState } from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-900 py-10 px-4 text-white">
      <div className="mb-10">
        <h3 className="text-xl font-black text-center uppercase mb-6 text-gray-200">Soalan Lazim (FAQ)</h3>
        <div className="space-y-3">
          <FAQItem 
            question="Saya tak pandai English, boleh guna ke?" 
            answer="Boleh. Skrip kami ada versi Bahasa Melayu dan 'Simple English' yang mudah dihafal. Tak perlu grammar power." 
          />
          <FAQItem 
            question="Sesuai untuk kerja kerajaan?" 
            answer="Ya. Teknik psikologi dan body language ni universal. Panel temuduga kerajaan pun manusia biasa." 
          />
          <FAQItem 
            question="Macam mana nak dapatkan?" 
            answer="Tekan butang merah 'Download Sekarang'. Lepas bayar, anda akan terus dapat link download ke email." 
          />
        </div>
      </div>

      <div className="text-center border-t border-gray-800 pt-6">
        <p className="font-bold text-gray-400 text-sm">Kit Pukau Majikan &copy; 2026</p>
        <p className="text-xs text-gray-600 mt-2">Disclaimer: Results may vary. Hard work required.</p>
      </div>
    </footer>
  );
};

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-800 rounded overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left flex justify-between items-center font-bold text-sm hover:bg-slate-700"
      >
        {question}
        <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'} text-xs text-gray-400`}></i>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-gray-300 text-xs leading-relaxed border-t border-slate-700 pt-2">
          {answer}
        </div>
      )}
    </div>
  );
};

export default Footer;