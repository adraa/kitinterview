import React from 'react';

const RiskReversal: React.FC = () => {
  return (
    <section className="w-full px-4 pb-10 pt-2 bg-white">
      <div className="border-2 border-dashed border-gray-400 rounded-xl p-6 bg-gray-50 text-center relative mt-6">
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white px-3 text-3xl text-green-600">
            <i className="fa-solid fa-shield-halved"></i>
        </div>
        <h3 className="text-lg font-black text-slate-900 uppercase mb-2 mt-2">Jaminan Pulangan Wang 30 Hari</h3>
        <p className="text-gray-700 font-medium text-sm leading-relaxed">
            Kalau tak berkesan, email saya. Saya refund 100% duit anda. <br/>
            <span className="font-bold">Risiko atas saya, bukan awak.</span>
        </p>
      </div>
    </section>
  );
};

export default RiskReversal;