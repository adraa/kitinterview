import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="w-full py-8 px-4 bg-gray-50 border-t border-b border-gray-200">
      <h2 className="text-2xl md:text-3xl font-black text-center text-slate-900 uppercase mb-6 tracking-tight leading-none">
        Bukan Cakap Kosong. <br/><span className="text-red-600 underline decoration-4 underline-offset-4">Tengok Bukti.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-3 rounded shadow-sm border border-gray-200">
          <img src="https://placehold.co/400x300/e5e7eb/555?text=WhatsApp+Offer+Letter" alt="Bukti WhatsApp" className="w-full rounded mb-3 border border-gray-100" />
          <p className="text-sm font-black text-slate-800"><i className="fa-brands fa-whatsapp text-green-500 mr-1"></i> Farid (UiTM): <br/><span className="font-medium text-gray-600">"Dapat offer RM2,800 lepas guna skrip!"</span></p>
        </div>
        <div className="bg-white p-3 rounded shadow-sm border border-gray-200">
          <img src="https://placehold.co/400x300/e5e7eb/555?text=Email+Salary+Nego" alt="Bukti Email" className="w-full rounded mb-3 border border-gray-100" />
          <p className="text-sm font-black text-slate-800"><i className="fa-regular fa-envelope text-blue-500 mr-1"></i> Sarah: <br/><span className="font-medium text-gray-600">"Berjaya nego gaji naik RM500!"</span></p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;