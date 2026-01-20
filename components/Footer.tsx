import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">Soalan Lazim (FAQ)</h3>
          <div className="space-y-4">
            <FAQItem 
              question="Saya tak pandai English, boleh guna ke?" 
              answer="Boleh. Dalam kit ni kami sediakan skrip English yang simple tapi power. Anda cuma perlu hafal je. Kami dah simplify ayat-ayat tu supaya bunyi natural." 
            />
            <FAQItem 
              question="Format apa ebook ni?" 
              answer="Semua material adalah digital (PDF & Video). Anda boleh terus download dan baca kat phone atau laptop serta-merta lepas pembayaran disahkan." 
            />
            <FAQItem 
              question="Kalau tak menjadi macam mana?" 
              answer="Kami ada 30-day money back guarantee. Kalau anda dah baca dan rasa tak berbaloi, email je kami. Kami refund 100% duit anda tanpa banyak soal." 
            />
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-slate-900 font-bold text-lg mb-2">Kit Pukau Majikan</p>
          <p className="text-gray-500 text-sm">
            Designed for Malaysian Talents. &copy; 2026. <br/>
            Penafian: Ini adalah produk pendidikan untuk tujuan kerjaya.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center font-bold text-slate-800 hover:bg-gray-50 transition-colors"
      >
        {question}
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-600 leading-relaxed bg-gray-50 border-t border-gray-100">
          {answer}
        </div>
      )}
    </div>
  );
};

export default Footer;