import React from 'react';
import { FeedItem } from '../types';

interface FeedMenuProps {
  items: FeedItem[];
  onSelect: (item: FeedItem) => void;
}

const FeedMenu: React.FC<FeedMenuProps> = ({ items, onSelect }) => {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 mb-8">
      <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
        🍔 Thực Đơn Nuôi Editor
      </h3>
      <p className="text-slate-400 text-sm mb-6">Chọn món ăn để tiếp sức cho Editor qua cơn đói.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item)}
            className="group relative flex flex-col items-center p-4 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 hover:border-blue-500 rounded-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
              {item.emoji}
            </div>
            <h4 className="font-bold text-white text-sm text-center mb-1">{item.name}</h4>
            <span className="text-xs text-green-400 font-mono font-bold bg-green-900/30 px-2 py-0.5 rounded mb-2">
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
            </span>
            <p className="text-[10px] text-slate-400 text-center leading-tight line-clamp-2">
              {item.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeedMenu;