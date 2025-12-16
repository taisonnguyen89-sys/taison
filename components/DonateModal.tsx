import React from 'react';
import { BANK_INFO } from '../constants';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  suggestedAmount?: number;
  suggestedItemName?: string;
}

const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose, suggestedAmount, suggestedItemName }) => {
  if (!isOpen) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Đã sao chép: ${text}`);
  };

  // Generate a fake QR code URL for demo purposes (using VietQR format)
  const qrUrl = `https://img.vietqr.io/image/MB-0343354452-compact.jpg?amount=${suggestedAmount || 0}&addInfo=${encodeURIComponent(suggestedItemName ? 'Mua ' + suggestedItemName : 'Nuoi Editor')}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-slate-800 rounded-2xl w-full max-w-md border border-slate-600 shadow-2xl overflow-hidden animate-[float_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex justify-between items-center">
          <h3 className="text-white font-bold text-lg">💰 Cổng Donate (Không hoàn lại)</h3>
          <button onClick={onClose} className="text-white/80 hover:text-white text-2xl leading-none">&times;</button>
        </div>
        
        <div className="p-6">
          {suggestedItemName && (
            <div className="bg-blue-900/30 border border-blue-500/30 p-3 rounded-lg mb-6 text-center">
              <p className="text-blue-200 text-sm">Bạn đang chọn tài trợ:</p>
              <p className="text-xl font-bold text-white">{suggestedItemName}</p>
              <p className="text-lg font-mono text-yellow-400">
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(suggestedAmount || 0)}
              </p>
            </div>
          )}

          <div className="flex flex-col items-center mb-6">
            <div className="bg-white p-2 rounded-lg mb-4">
              <img 
                src={qrUrl} 
                alt="QR Code Donate" 
                className="w-48 h-48 object-contain" 
              />
            </div>
            <p className="text-slate-400 text-xs italic">Quét mã để ting ting nhanh hơn người yêu cũ trở mặt</p>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-900 p-3 rounded-lg flex justify-between items-center border border-slate-700">
              <div>
                <p className="text-xs text-slate-500">Ngân hàng MB Bank</p>
                <p className="font-mono font-bold text-white tracking-wider">{BANK_INFO.accountNumber}</p>
                <p className="text-xs text-slate-400 uppercase">{BANK_INFO.accountName}</p>
              </div>
              <button 
                onClick={() => copyToClipboard(BANK_INFO.accountNumber)}
                className="bg-slate-700 hover:bg-slate-600 text-white text-xs px-3 py-2 rounded transition-colors"
              >
                Copy
              </button>
            </div>

            <div className="bg-pink-900/20 p-3 rounded-lg flex justify-between items-center border border-pink-500/20">
              <div>
                <p className="text-xs text-pink-400">MoMo</p>
                <p className="font-mono font-bold text-white tracking-wider">{BANK_INFO.momo}</p>
              </div>
              <button 
                onClick={() => copyToClipboard(BANK_INFO.momo)}
                className="bg-pink-600 hover:bg-pink-500 text-white text-xs px-3 py-2 rounded transition-colors"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-slate-900/50 text-center border-t border-slate-700">
          <p className="text-slate-400 text-xs">
            "Nội dung: [Tên bạn] + Lời nhắn nhủ yêu thương"
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonateModal;