import React from 'react';

const UrgencyBar: React.FC = () => {
  return (
    <div className="w-full px-4 mb-8">
      <div className="max-w-3xl mx-auto bg-red-50 border-2 border-dashed border-red-300 rounded p-3 text-center shadow-sm">
        <p className="text-red-700 font-bold text-sm md:text-base uppercase">
          🔥 Harga Promosi Tamat Dalam: <span className="text-red-900 font-black">11 Jam 45 Minit</span>
        </p>
      </div>
    </div>
  );
};

export default UrgencyBar;