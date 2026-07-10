import { mockCustomers } from '../services/data';
import { PieChart as PieChartIcon, BarChart3, TrendingUp, Filter, Download, Activity, Target } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts';

export default function Reports() {
  const totalIncome = mockCustomers.reduce((acc: any, c: any) => acc + c.assessedActualIncome, 0);
  const totalSavings = mockCustomers.reduce((acc: any, c: any) => acc + c.savings, 0);
  const avgIncome = Math.round(totalIncome / mockCustomers.length / 1000);
  const savingsRate = ((totalSavings / totalIncome) * 100).toFixed(1);

  // Intent Distribution Data
  const intentData = [
    { name: 'Home Loan', value: mockCustomers.filter((c: any) => c.intents[0].product === 'Home Loan').length },
    { name: 'Personal Loan', value: mockCustomers.filter((c: any) => c.intents[0].product === 'Personal Loan').length },
    { name: 'Auto Loan', value: mockCustomers.filter((c: any) => c.intents[0].product === 'Auto Loan').length },
    { name: 'Mortgage', value: mockCustomers.filter((c: any) => c.intents[0].product === 'Mortgage').length },
  ].filter(d => d.value > 0);
  const COLORS = ['#0F6A4A', '#F28C28', '#111827', '#64748b'];

  // Conversion Funnel Data
  const funnelData = [
    { name: 'Total Prospects', value: 1250 },
    { name: 'High Intent Identified', value: 840 },
    { name: 'Contacted', value: 620 },
    { name: 'Applied', value: 410 },
    { name: 'Approved', value: 345 },
  ];

  // Income vs Repayment Capacity Distribution
  const repaymentData = [
    { range: '0-50K', declared: 15, aiAssessed: 5 },
    { range: '50K-1L', declared: 45, aiAssessed: 25 },
    { range: '1L-2L', declared: 30, aiAssessed: 50 },
    { range: '2L+', declared: 10, aiAssessed: 20 },
  ];

  return (
    <div className="flex flex-col gap-8 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-[28px] font-semibold tracking-tight text-on-surface">Behavior Analytics</h1>
          <p className="text-[14px] text-on-surface-variant mt-1">Portfolio insights, demographic analysis, and performance metrics.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-on-surface bg-surface border border-outline-variant rounded-xl hover:bg-surface-container transition-all shadow-card">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-white bg-accent rounded-xl hover:bg-accent/90 transition-all shadow-sm">
            <Download className="w-3.5 h-3.5" /> Export Report
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-surface border border-outline-variant rounded-2xl p-6 shadow-card hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-200">
          <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
            <Target className="w-5 h-5" />
          </div>
          <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.08em] mb-1">Total Analyzed Profiles</p>
          <p className="text-[36px] font-semibold text-on-surface tracking-tight tabular-nums">{mockCustomers.length}</p>
          <p className="text-[12px] text-on-surface-variant mt-1">across all segments</p>
        </div>

        <div className="bg-surface border border-outline-variant rounded-2xl p-6 shadow-card hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-200">
          <div className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-4">
            <TrendingUp className="w-5 h-5" />
          </div>
          <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.08em] mb-1">Avg AI Assessed Income</p>
          <p className="text-[36px] font-semibold text-on-surface tracking-tight tabular-nums">₹{avgIncome}k</p>
          <p className="text-[12px] text-on-surface-variant mt-1">portfolio average</p>
        </div>

        <div className="bg-surface border border-outline-variant rounded-2xl p-6 shadow-card hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-200">
          <div className="w-10 h-10 bg-tertiary/10 text-tertiary rounded-xl flex items-center justify-center mb-4">
            <Activity className="w-5 h-5" />
          </div>
          <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.08em] mb-1">Avg Repayment Capacity</p>
          <p className="text-[36px] font-semibold text-on-surface tracking-tight tabular-nums">₹{Math.round(avgIncome * 0.45)}k</p>
          <p className="text-[12px] text-on-surface-variant mt-1">per customer</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        
        {/* Intent Distribution */}
        <div className="bg-surface border border-outline-variant rounded-2xl p-6 shadow-card">
          <div className="flex items-center gap-2 mb-6">
            <PieChartIcon className="w-4 h-4 text-primary" />
            <h3 className="text-[14px] font-semibold text-on-surface">Top Recommended Loan Products</h3>
          </div>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={intentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {intentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontWeight: 600 }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lead Funnel */}
        <div className="bg-surface border border-outline-variant rounded-2xl p-6 shadow-card">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-4 h-4 text-accent" />
            <h3 className="text-[14px] font-semibold text-on-surface">Portfolio Conversion Funnel</h3>
          </div>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={funnelData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" stroke="#94a3b8" fontSize={12} />
                <YAxis dataKey="name" type="category" stroke="#64748b" fontSize={12} width={100} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="value" fill="#F28C28" radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Income Discovery Gap */}
        <div className="lg:col-span-2 bg-surface border border-outline-variant rounded-2xl p-6 shadow-card">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-tertiary" />
              <h3 className="text-[14px] font-semibold text-on-surface">Income Discovery Gap (Declared vs AI Assessed)</h3>
            </div>
            <span className="text-[11px] font-bold text-accent bg-accent/10 px-2 py-1 rounded-md">Repayment Capacity Unlocked</span>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={repaymentData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="range" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend verticalAlign="top" height={36} iconType="circle" />
                <Line type="monotone" name="Declared Income Profiles (%)" dataKey="declared" stroke="#94a3b8" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" name="AI Assessed Income Profiles (%)" dataKey="aiAssessed" stroke="#0F6A4A" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
