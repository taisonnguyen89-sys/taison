import React from 'react';
import { Donor } from '../types';

interface DonationListProps {
  donors: Donor[];
}

const DonationList: React.FC<DonationListProps> = ({ donors }) => {
  // Sort by amount desc to highlight top donors
  const sortedDonors = [...donors].sort((a, b) => b.amount - a.amount);

  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 mb-8">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        💖 Bảng vàng "Nhà Hảo Tâm"
        <span className="text-xs font-normal text-slate-400">(Ai donate nhiều được lên đầu)</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedDonors.map((donor, index) => (
          <div 
            key={donor.id} 
            className={`
              relative p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg
              ${index === 0 ? 'bg-yellow-900/20 border-yellow-500/50' : 'bg-slate-700/30 border-slate-600'}
            `}
          >
            {index === 0 && (
              <div className="absolute -top-3 -right-3 bg-yellow-500 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                MVP 👑
              </div>
            )}
            <div className="flex justify-between items-start mb-2">
              <h4 className={`font-bold ${index === 0 ? 'text-yellow-400' : 'text-white'}`}>
                {donor.name}
              </h4>
              <span className="font-mono text-green-400 font-bold">
                +{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(donor.amount)}
              </span>
            </div>
            <div className="bg-black/20 p-2 rounded text-sm text-slate-300 italic mb-2">
              "{donor.message}"
            </div>
            <div className="text-xs text-slate-500 text-right">
              {donor.timestamp}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationList;