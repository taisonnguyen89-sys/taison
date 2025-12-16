import React from 'react';
import { EDITOR_NAME, ORGANIZATION, AVATAR_URL } from '../constants';

interface HeroProps {
  balance: number;
  hungerLevel: number;
  onDonateClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ balance, hungerLevel, onDonateClick }) => {
  const getHungerColor = (level: number) => {
    if (level > 80) return 'bg-red-600';
    if (level > 50) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getHungerText = (level: number) => {
    if (level > 80) return 'SẮP HẸO 💀';
    if (level > 50) return 'Đang cồn cào 😵';
    return 'Vẫn sống tốt 😎';
  };

  return (
    <div className="relative overflow-hidden bg-slate-900 rounded-3xl p-8 mb-8 shadow-2xl border border-slate-700">
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-blue-600 opacity-20 blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <img 
            src={AVATAR_URL} 
            alt={EDITOR_NAME} 
            className="relative w-40 h-40 rounded-full object-cover border-4 border-slate-800 animate-float"
          />
          <div className="absolute bottom-0 right-0 bg-yellow-400 text-slate-900 text-xs font-bold px-2 py-1 rounded-full">
            EDITOR
          </div>
        </div>

        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {EDITOR_NAME}
          </h1>
          <p className="text-xl text-purple-400 mb-4">{ORGANIZATION} - "Làm vì đam mê, nợ vì sinh tồn"</p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
             <div className="flex-1 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
               <div className="flex justify-between items-center mb-2">
                 <p className="text-slate-400 text-sm">Độ đói</p>
                 <span className="text-xs font-bold text-white bg-slate-600 px-2 py-0.5 rounded">
                   {getHungerText(hungerLevel)}
                 </span>
               </div>
               <div className="w-full bg-slate-700 rounded-full h-4">
                  <div 
                    className={`${getHungerColor(hungerLevel)} h-4 rounded-full transition-all duration-1000`} 
                    style={{ width: `${hungerLevel}%` }}
                  ></div>
               </div>
            </div>

            <button 
              onClick={onDonateClick}
              className="flex-none bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform transition hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>💸</span>
              DONATE CỨU ĐÓI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;