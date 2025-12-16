import React from 'react';
import { Commitment } from '../types';

interface CommitmentsProps {
  commitments: Commitment[];
}

const Commitments: React.FC<CommitmentsProps> = ({ commitments }) => {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 mb-8">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        🤝 Cam Kết Của "Chủ Trại"
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {commitments.map((item) => (
          <div key={item.id} className="flex gap-4 items-start p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors">
            <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-2xl border border-slate-600 shadow-sm">
              {item.icon}
            </div>
            <div>
              <h4 className="text-lg font-bold text-green-400 mb-1">{item.title}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
       <div className="mt-6 pt-4 border-t border-slate-700 text-center">
            <p className="text-xs text-slate-500 italic">
                * Lưu ý: Mọi cam kết chỉ có giá trị tại thời điểm viết và có thể thay đổi tùy theo độ đói của Editor.
            </p>
       </div>
    </div>
  );
};

export default Commitments;