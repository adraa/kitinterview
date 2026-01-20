import React from 'react';
import { Wallet, Frown, Users } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section className="w-full py-8 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase leading-none tracking-tight">
            Rasa <span className="text-red-600 underline decoration-4 underline-offset-2 decoration-red-200">Terhimpit</span> Macam Ni?
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {/* Problem 1 */}
          <div className="bg-white p-5 rounded shadow-sm border border-gray-100 border-l-4 border-l-red-600 flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <Wallet className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 uppercase mb-1">Duit Habis</h3>
              <p className="text-gray-600 text-sm font-medium leading-snug">
                "Dah 6 bulan grad. Masih minta duit mak ayah. Rasa macam beban keluarga. Malu weh."
              </p>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="bg-white p-5 rounded shadow-sm border border-gray-100 border-l-4 border-l-red-600 flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <Frown className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 uppercase mb-1">Interview Gagal</h3>
              <p className="text-gray-600 text-sm font-medium leading-snug">
                "Bila HR speaking, otak blank. Gagap. Balik rumah rasa nak nangis sebab tahu dah fail."
              </p>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="bg-white p-5 rounded shadow-sm border border-gray-100 border-l-4 border-l-red-600 flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <Users className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 uppercase mb-1">Member Dah Kaya</h3>
              <p className="text-gray-600 text-sm font-medium leading-snug">
                "Kawan satu batch dah post gambar kereta baru kat IG. Kau masih scroll JobStreet cari kerja kosong."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Problem;