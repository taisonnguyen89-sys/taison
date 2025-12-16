import { Donor, Expense, FeedItem, Goal, Commitment } from './types';

export const DONORS: Donor[] = [
  { id: '1', name: 'Người yêu cũ (giấu tên)', amount: 50000, message: 'Ăn đi cho béo', timestamp: '2023-10-25' },
  { id: '2', name: 'Sếp Hunonic', amount: 20000, message: 'Tạm ứng lương tháng sau nhé', timestamp: '2023-10-26' },
  { id: '3', name: 'Fan cuồng 20 năm', amount: 100000, message: 'Mua thuốc nhỏ mắt đi anh', timestamp: '2023-10-26' },
  { id: '4', name: 'Anh hàng xóm', amount: 15000, message: 'Trả tiền mì tôm hôm qua', timestamp: '2023-10-27' },
  { id: '5', name: 'Hội anti Trần Đức', amount: 5000, message: 'Donate để có sức làm video dở hơn', timestamp: '2023-10-27' },
  { id: '6', name: 'Mẹ ở quê', amount: 500000, message: 'Về quê nuôi cá đi con', timestamp: '2023-10-28' },
];

export const EXPENSES: Expense[] = [
  { id: '1', item: 'Mì Hảo Hảo (Thùng)', cost: 115000, category: 'Food', date: '2023-10-25', proof: 'Hóa đơn tạp hóa cô Tư' },
  { id: '2', item: 'Thuốc đau lưng', cost: 250000, category: 'Health', date: '2023-10-26', proof: 'Đơn thuốc bệnh viện chấn thương chỉnh hình' },
  { id: '3', item: 'Nạp game Genshin', cost: 109000, category: 'Entertainment', date: '2023-10-26', proof: 'Sao kê ngân hàng (Lỡ tay)' },
  { id: '4', item: 'Trà sữa Full Topping', cost: 65000, category: 'Food', date: '2023-10-27', proof: 'Ảnh check-in Facebook' },
  { id: '5', item: 'Redbull (2 lon)', cost: 24000, category: 'Food', date: '2023-10-28', proof: 'Vỏ lon dưới gầm bàn' },
  { id: '6', item: 'Chuột máy tính mới', cost: 150000, category: 'Gear', date: '2023-10-29', proof: 'Shopee (Hàng 2nd hand)' },
];

export const FEED_ITEMS: FeedItem[] = [
  { id: '1', name: 'Trà Đá Vỉa Hè', price: 5000, emoji: '🧊', description: 'Giải khát qua ngày' },
  { id: '2', name: 'Gói Mì Tôm', price: 10000, emoji: '🍜', description: 'Món ăn quen thuộc của Editor' },
  { id: '3', name: 'Ly Cafe Sữa', price: 25000, emoji: '☕', description: 'Để tỉnh táo render video' },
  { id: '4', name: 'Bát Phở Bò', price: 40000, emoji: '🍲', description: 'Xa xỉ phẩm (Chỉ dám mơ)' },
  { id: '5', name: 'Vỉ Thuốc Đau Lưng', price: 100000, emoji: '💊', description: 'Bệnh nghề nghiệp mãn tính' },
  { id: '6', name: 'Massage (Lành mạnh)', price: 200000, emoji: '💆‍♂️', description: 'Hồi phục công lực' },
];

export const GOALS: Goal[] = [
  {
    id: '1',
    title: 'Mua Ổ Cứng SSD 1TB',
    description: 'Ổ cứng hiện tại đã đỏ lòm vì chứa quá nhiều source footage.',
    current: 450000,
    target: 2000000
  }
];

export const COMMITMENTS: Commitment[] = [
  {
    id: '1',
    title: 'Minh Bạch (Tương Đối)',
    description: 'Sao kê đầy đủ từ gói mì tôm đến ly trà đá. Trừ những khoản "quỹ đen" và "tình phí" thì xin phép giấu vợ.',
    icon: '🧾'
  },
  {
    id: '2',
    title: 'Sử Dụng Đúng Mục Đích',
    description: '100% tiền donate dùng để duy trì sự sống cho Editor. Cam kết không dùng tiền để bao gái (vì chưa có gái để bao).',
    icon: '🎯'
  },
  {
    id: '3',
    title: 'Chính Sách "No Refund"',
    description: 'Tiền đã donate như bát nước hắt đi. Vui lòng không đòi lại dưới mọi hình thức (kể cả khi chia tay hoặc cãi nhau).',
    icon: '💸'
  },
  {
    id: '4',
    title: 'Quyền Lợi Nhà Tài Trợ',
    description: 'Được vinh danh trên bảng vàng. Được quyền hối thúc deadline nhưng Editor có làm hay không thì tùy tâm trạng.',
    icon: '👑'
  }
];

export const EDITOR_NAME = "Trần Đức";
export const ORGANIZATION = "Media Hunonic";
export const AVATAR_URL = "https://picsum.photos/200/200"; // Placeholder
export const BANK_INFO = {
  bankName: "MB Bank",
  accountName: "TRAN DUC",
  accountNumber: "12345678888",
  momo: "0987654321"
};