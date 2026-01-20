import React from 'react';
import { Wallet, Frown, Users } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section className="w-full bg-[#FEF2F2] py-20 px-5 md:px-10 border-y border-red-100">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Adakah Anda Sedang Rasa <br/>
            <span className="text-red-600 bg-yellow-200 px-2 inline-block transform -rotate-1 shadow-sm mt-2">TERHIMPIT</span> Macam Ni?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Problem 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-red-100 flex flex-col items-center text-center hover:border-red-300 transition-all">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <Wallet className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Duit Habis</h3>
            <p className="text-gray-600 leading-relaxed">
              "Dah 6 bulan grad, tapi masih minta duit belanja kat mak ayah. Rasa macam beban keluarga. Malu weh."
            </p>
          </div>

          {/* Problem 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-red-100 flex flex-col items-center text-center hover:border-red-300 transition-all transform md:-translate-y-4 relative z-10">
            <div className="absolute -top-4 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
              Paling Sakit
            </div>
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <Frown className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Interview Gagal</h3>
            <p className="text-gray-600 leading-relaxed">
              "Bila HR tanya dalam English, terus gagap. Otak blank. Balik rumah rasa nak nangis sebab tahu dah fail."
            </p>
          </div>

          {/* Problem 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-red-100 flex flex-col items-center text-center hover:border-red-300 transition-all">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Member Dah Kaya</h3>
            <p className="text-gray-600 leading-relaxed">
              "Kawan satu batch dah post gambar kereta baru kat IG. Kau masih scroll JobStreet cari kerja kosong."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Problem;