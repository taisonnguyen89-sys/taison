import React, { useState } from 'react';
import { generateExcuse } from '../services/geminiService';

const ExcuseGenerator: React.FC = () => {
  const [excuse, setExcuse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateExcuse();
    setExcuse(result);
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-6 rounded-2xl shadow-xl border border-indigo-500/30 mb-8">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        🤖 AI Xin Tiền Online
        <span className="text-xs font-normal text-indigo-300 bg-indigo-900/50 px-2 py-1 rounded-full border border-indigo-500/50">Powered by Gemini</span>
      </h3>
      
      <p className="text-slate-300 mb-4 text-sm">
        Bấm nút bên dưới để tạo lý do xin donate "nghe cho lọt tai" nhất.
      </p>

      <div className="flex flex-col items-center">
        {excuse && (
          <div className="bg-white/10 p-4 rounded-xl w-full mb-4 relative">
             <div className="absolute -top-3 -left-2 text-4xl">❝</div>
             <p className="text-lg text-yellow-300 font-medium italic text-center px-4">
               {excuse}
             </p>
             <div className="absolute -bottom-5 -right-2 text-4xl transform rotate-180">❝</div>
          </div>
        )}

        <button
          onClick={handleGenerate}
          disabled={loading}
          className={`
            group relative px-6 py-3 font-bold text-white rounded-full 
            transition-all duration-300 transform hover:scale-105 active:scale-95
            ${loading ? 'bg-slate-600 cursor-not-allowed' : 'bg-gradient-to-r from-pink-500 to-orange-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]'}
          `}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Đang nghĩ lý do điêu điêu...
            </span>
          ) : (
             "Nghĩ lý do xin tiền hộ em"
          )}
        </button>
      </div>
    </div>
  );
};

export default ExcuseGenerator;