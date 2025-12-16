export interface Donor {
  id: string;
  name: string;
  amount: number;
  message: string;
  timestamp: string;
}

export interface Expense {
  id: string;
  item: string;
  cost: number;
  category: 'Food' | 'Gear' | 'Health' | 'Entertainment' | 'Other';
  date: string;
  proof: string; // Funny proof description
}

export interface Stats {
  totalDonated: number;
  totalSpent: number;
  remaining: number;
  hungerLevel: number; // 0 to 100
}

export interface FeedItem {
  id: string;
  name: string;
  price: number;
  emoji: string;
  description: string;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  current: number;
  target: number;
}

export interface Commitment {
  id: string;
  title: string;
  description: string;
  icon: string;
}