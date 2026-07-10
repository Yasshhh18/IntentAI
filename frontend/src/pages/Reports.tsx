import { mockCustomers } from '../services/data';
import { PieChart as PieChartIcon, BarChart3, TrendingUp, Filter, Download, Activity, Target } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { motion } from 'framer-motion';

const MotionCard = motion.create(Card);

export default function Reports() {
  const totalIncome = mockCustomers.reduce((acc: any, c: any) => acc + c.assessedActualIncome, 0);
  const avgIncome = Math.round(totalIncome / mockCustomers.length / 1000);

  // Intent Distribution Data
  const intentData = [
    { name: 'Home Loan', value: mockCustomers.filter((c: any) => c.intents[0].product === 'Home Loan').length },
    { name: 'Personal Loan', value: mockCustomers.filter((c: any) => c.intents[0].product === 'Personal Loan').length },
    { name: 'Auto Loan', value: mockCustomers.filter((c: any) => c.intents[0].product === 'Auto Loan').length },
    { name: 'Mortgage', value: mockCustomers.filter((c: any) => c.intents[0].product === 'Mortgage').length },
  ].filter(d => d.value > 0);
  const COLORS = ['#10b981', '#f59e0b', '#8b5cf6', '#64748b']; // Emerald, Amber, Violet, Slate

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

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-surface/90 border border-outline/50 p-3 rounded-xl shadow-card backdrop-blur-md">
          <p className="text-[13px] font-bold text-on-surface mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-[12px] font-medium" style={{ color: entry.color || entry.fill }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-[32px] font-bold tracking-tight text-on-surface leading-none">Behavior Analytics</h1>
          <p className="text-[14px] text-on-surface-variant font-medium mt-2">Portfolio insights, demographic analysis, and performance metrics.</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Button variant="outline" className="gap-2 glass">
            <Filter className="w-4 h-4" /> Filter
          </Button>
          <Button variant="ai" className="gap-2">
            <Download className="w-4 h-4" /> Export Report
          </Button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MotionCard 
          glass 
          interactive
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-primary/10 border border-primary/20 text-primary rounded-xl flex items-center justify-center mb-5 shadow-sm">
              <Target className="w-6 h-6" />
            </div>
            <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5">Total Analyzed Profiles</p>
            <p className="text-[36px] font-bold text-on-surface tracking-tight tabular-nums leading-none mb-1.5">{mockCustomers.length}</p>
            <p className="text-[13px] text-on-surface-variant font-medium">across all segments</p>
          </CardContent>
        </MotionCard>

        <MotionCard 
          glass 
          interactive
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-accent/10 border border-accent/20 text-accent rounded-xl flex items-center justify-center mb-5 shadow-sm">
              <TrendingUp className="w-6 h-6" />
            </div>
            <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5">Avg AI Assessed Income</p>
            <p className="text-[36px] font-bold text-on-surface tracking-tight tabular-nums leading-none mb-1.5">₹{avgIncome}k</p>
            <p className="text-[13px] text-on-surface-variant font-medium">portfolio average</p>
          </CardContent>
        </MotionCard>

        <MotionCard 
          glass 
          interactive
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-tertiary/10 border border-tertiary/20 text-tertiary rounded-xl flex items-center justify-center mb-5 shadow-sm">
              <Activity className="w-6 h-6" />
            </div>
            <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5">Avg Repayment Capacity</p>
            <p className="text-[36px] font-bold text-on-surface tracking-tight tabular-nums leading-none mb-1.5">₹{Math.round(avgIncome * 0.45)}k</p>
            <p className="text-[13px] text-on-surface-variant font-medium">per customer</p>
          </CardContent>
        </MotionCard>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Intent Distribution */}
        <MotionCard 
          glass
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-2.5 mb-8">
              <PieChartIcon className="w-5 h-5 text-primary" />
              <h3 className="text-[16px] font-bold text-on-surface">Top Recommended Loan Products</h3>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={intentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {intentData.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: 600, color: '#94a3b8' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </MotionCard>

        {/* Lead Funnel */}
        <MotionCard 
          glass
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-2.5 mb-8">
              <BarChart3 className="w-5 h-5 text-accent" />
              <h3 className="text-[16px] font-bold text-on-surface">Portfolio Conversion Funnel</h3>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={funnelData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#334155" opacity={0.5} />
                  <XAxis type="number" stroke="#64748b" fontSize={11} fontWeight={600} tickLine={false} axisLine={false} />
                  <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={11} fontWeight={600} width={120} tickLine={false} axisLine={false} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1e293b', opacity: 0.5 }} />
                  <Bar dataKey="value" fill="#f59e0b" radius={[0, 6, 6, 0]} barSize={28} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </MotionCard>

        {/* Income Discovery Gap */}
        <MotionCard 
          glass
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="lg:col-span-2"
        >
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-2.5">
                <TrendingUp className="w-5 h-5 text-tertiary" />
                <h3 className="text-[16px] font-bold text-on-surface">Income Discovery Gap <span className="text-on-surface-variant font-medium">(Declared vs AI Assessed)</span></h3>
              </div>
              <Badge variant="ai" className="px-3 py-1.5 uppercase tracking-widest text-[10px]">
                Repayment Capacity Unlocked
              </Badge>
            </div>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={repaymentData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.5} />
                  <XAxis dataKey="range" stroke="#94a3b8" fontSize={11} fontWeight={600} tickLine={false} axisLine={false} dy={10} />
                  <YAxis stroke="#94a3b8" fontSize={11} fontWeight={600} tickLine={false} axisLine={false} dx={-10} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend verticalAlign="top" height={40} iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: 600, color: '#94a3b8', paddingBottom: '20px' }} />
                  <Line type="monotone" name="Declared Income (%)" dataKey="declared" stroke="#64748b" strokeWidth={3} dot={{ r: 5, fill: '#1e293b', strokeWidth: 2 }} activeDot={{ r: 8, fill: '#64748b' }} />
                  <Line type="monotone" name="AI Assessed Income (%)" dataKey="aiAssessed" stroke="#10b981" strokeWidth={3} dot={{ r: 5, fill: '#1e293b', strokeWidth: 2 }} activeDot={{ r: 8, fill: '#10b981' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </MotionCard>
      </div>
    </div>
  );
}
