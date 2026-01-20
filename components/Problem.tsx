import React from 'react';

const Problem: React.FC = () => {
  return (
    <section className="w-full py-6 px-4 bg-white">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase leading-none tracking-tight">
            Rasa <span className="text-red-600 underline decoration-4 underline-offset-2 decoration-red-200">Terhimpit</span> Macam Ni?
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {/* Item 1 */}
          <div className="bg-white p-4 rounded shadow border border-gray-100 border-l-4 border-l-red-600 flex items-start gap-3">
            <div className="flex-shrink-0 mt-1 text-red-600 text-xl">
               <i className="fa-solid fa-wallet"></i>
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 uppercase mb-1">Duit Habis</h3>
              <p className="text-gray-700 text-sm font-semibold leading-snug">
                Masih minta mak ayah duit topup. Malu weh. Rasa macam beban keluarga.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white p-4 rounded shadow border border-gray-100 border-l-4 border-l-red-600 flex items-start gap-3">
            <div className="flex-shrink-0 mt-1 text-red-600 text-xl">
               <i className="fa-solid fa-face-frown"></i>
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 uppercase mb-1">Interview Gagal</h3>
              <p className="text-gray-700 text-sm font-semibold leading-snug">
                Gagap bila speaking. HR tanya, otak blank. Balik rumah rasa nak nangis.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-white p-4 rounded shadow border border-gray-100 border-l-4 border-l-red-600 flex items-start gap-3">
            <div className="flex-shrink-0 mt-1 text-red-600 text-xl">
               <i className="fa-solid fa-car"></i>
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 uppercase mb-1">Member Kaya</h3>
              <p className="text-gray-700 text-sm font-semibold leading-snug">
                Kawan dah pakai Honda, kau masih scroll JobStreet cari kerja kosong.
              </p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Problem;