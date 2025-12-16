import React from 'react';
import { Goal } from '../types';

interface GoalTrackerProps {
  goals: Goal[];
}

const GoalTracker: React.FC<GoalTrackerProps> = ({ goals }) => {
  return (
    <div className="space-y-4 mb-8">
      {goals.map((goal) => {
        const percent = Math.min(100, Math.round((goal.current / goal.target) * 100));
        
        return (
          <div key={goal.id} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 relative overflow-hidden">
             {/* Background decoration */}
             <div className="absolute top-0 right-0 p-4 opacity-5">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
             </div>

            <div className="relative z-10">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    🎯 Mục tiêu: {goal.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">{goal.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-green-400">{percent}%</span>
                </div>
              </div>

              <div className="w-full bg-slate-700 rounded-full h-6 mb-2 overflow-hidden border border-slate-600">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-green-400 h-full rounded-full transition-all duration-1000 flex items-center justify-end pr-2"
                  style={{ width: `${percent}%` }}
                >
                    {percent > 5 && <span className="text-[10px] font-bold text-slate-900 animate-pulse">Running...</span>}
                </div>
              </div>

              <div className="flex justify-between text-xs font-mono text-slate-400">
                <span>Đã có: {new Intl.NumberFormat('vi-VN').format(goal.current)} đ</span>
                <span>Cần: {new Intl.NumberFormat('vi-VN').format(goal.target)} đ</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GoalTracker;