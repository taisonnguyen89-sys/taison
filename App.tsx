import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ExcuseGenerator from './components/ExcuseGenerator';
import ExpenseReport from './components/ExpenseReport';
import DonationList from './components/DonationList';
import FeedMenu from './components/FeedMenu';
import GoalTracker from './components/GoalTracker';
import DonateModal from './components/DonateModal';
import Commitments from './components/Commitments';
import { DONORS, EXPENSES, FEED_ITEMS, GOALS, COMMITMENTS } from './constants';
import { Stats, FeedItem } from './types';

function App() {
  const [stats, setStats] = useState<Stats>({
    totalDonated: 0,
    totalSpent: 0,
    remaining: 0,
    hungerLevel: 50
  });

  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [selectedFeedItem, setSelectedFeedItem] = useState<FeedItem | null>(null);

  useEffect(() => {
    // Calculate stats on mount
    const totalDonated = DONORS.reduce((sum, d) => sum + d.amount, 0);
    const totalSpent = EXPENSES.reduce((sum, e) => sum + e.cost, 0);
    const remaining = totalDonated - totalSpent;
    
    // Calculate humorous hunger level
    let hunger = 0;
    if (remaining < 50000) hunger = 95;
    else if (remaining < 200000) hunger = 75;
    else if (remaining < 500000) hunger = 50;
    else hunger = 20;

    setStats({
      totalDonated,
      totalSpent,
      remaining,
      hungerLevel: hunger
    });
  }, []);

  const handleFeedItemSelect = (item: FeedItem) => {
    setSelectedFeedItem(item);
    setIsDonateModalOpen(true);
  };

  const handleDonateClick = () => {
    setSelectedFeedItem(null);
    setIsDonateModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
             Cứu Đói Editor.vn
          </div>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            Mã nguồn
          </a>
        </header>

        <Hero 
          balance={stats.remaining} 
          hungerLevel={stats.hungerLevel} 
          onDonateClick={handleDonateClick}
        />

        <GoalTracker goals={GOALS} />

        <FeedMenu items={FEED_ITEMS} onSelect={handleFeedItemSelect} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                 <ExpenseReport expenses={EXPENSES} />
            </div>
            <div className="lg:col-span-1">
                 <ExcuseGenerator />
            </div>
        </div>
        
        <DonationList donors={DONORS} />

        <Commitments commitments={COMMITMENTS} />

        <footer className="mt-12 text-center text-slate-500 text-sm border-t border-slate-800 pt-8 pb-4">
          <p>© {new Date().getFullYear()} Media Hunonic. Trang web được làm trong lúc Editor đang đói.</p>
          <p className="mt-2 text-xs">Mọi số liệu chỉ mang tính chất giải trí (hoặc là thật, tùy bạn nghĩ).</p>
        </footer>
      </div>

      <DonateModal 
        isOpen={isDonateModalOpen} 
        onClose={() => setIsDonateModalOpen(false)}
        suggestedAmount={selectedFeedItem?.price}
        suggestedItemName={selectedFeedItem?.name}
      />
    </div>
  );
}

export default App;