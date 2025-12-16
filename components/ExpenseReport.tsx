import React from 'react';
import { Expense } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface ExpenseReportProps {
  expenses: Expense[];
}

const COLORS = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'];

const ExpenseReport: React.FC<ExpenseReportProps> = ({ expenses }) => {
  // Aggregate data for chart
  const chartData = expenses.reduce((acc, curr) => {
    const existing = acc.find(item => item.name === curr.category);
    if (existing) {
      existing.value += curr.cost;
    } else {
      acc.push({ name: curr.category, value: curr.cost });
    }
    return acc;
  }, [] as { name: string; value: number }[]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      {/* Chart Section */}
      <div className="lg:col-span-1 bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
        <h3 className="text-xl font-bold text-white mb-4">Biểu đồ nghèo khổ</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
                formatter={(value: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)}
              />
              <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: '12px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-xs text-slate-500 mt-2 italic">
          *Số liệu chính xác 99.9% (trừ phần mua bim bim)
        </p>
      </div>

      {/* List Section */}
      <div className="lg:col-span-2 bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
        <h3 className="text-xl font-bold text-white mb-4 flex justify-between items-center">
          <span>📜 Sao Kê Minh Bạch</span>
          <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded border border-red-500/50">VAR Check: Uy tín</span>
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-300">
            <thead className="text-xs text-slate-400 uppercase bg-slate-700/50">
              <tr>
                <th scope="col" className="px-4 py-3 rounded-l-lg">Ngày</th>
                <th scope="col" className="px-4 py-3">Hạng mục</th>
                <th scope="col" className="px-4 py-3">Chi tiết</th>
                <th scope="col" className="px-4 py-3">Bằng chứng</th>
                <th scope="col" className="px-4 py-3 text-right rounded-r-lg">Số tiền</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id} className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors">
                  <td className="px-4 py-3 font-medium text-slate-400">{expense.date}</td>
                  <td className="px-4 py-3">
                    <span className={`
                      px-2 py-1 rounded text-xs font-bold
                      ${expense.category === 'Food' ? 'bg-orange-900 text-orange-300' : ''}
                      ${expense.category === 'Gear' ? 'bg-blue-900 text-blue-300' : ''}
                      ${expense.category === 'Health' ? 'bg-red-900 text-red-300' : ''}
                      ${expense.category === 'Entertainment' ? 'bg-purple-900 text-purple-300' : ''}
                    `}>
                      {expense.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-white font-medium">{expense.item}</td>
                  <td className="px-4 py-3 italic text-slate-500 text-xs max-w-xs truncate" title={expense.proof}>
                    "{expense.proof}"
                  </td>
                  <td className="px-4 py-3 text-right text-red-400 font-mono">
                    -{new Intl.NumberFormat('vi-VN').format(expense.cost)} đ
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpenseReport;