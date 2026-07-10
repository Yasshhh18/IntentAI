import { mockCustomers } from '../services/data';
import { Users, IndianRupee, TrendingUp, Filter, Download, Radar, BrainCircuit, ArrowUpRight, Phone, Mail, Home, Car, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const priorityConfig = {
  'Contact Today': { label: '🔥 Contact Today', bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', dot: 'bg-red-500' },
  'This Week': { label: '⭐ This Week', bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', dot: 'bg-amber-500' },
  'Monitor': { label: '🕒 Monitor', bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', dot: 'bg-blue-400' },
  'Ignore': { label: '❌ Ignore', bg: 'bg-surface-container', border: 'border-outline-variant', text: 'text-on-surface-variant', dot: 'bg-outline' },
};

const loanIcons: Record<string, string> = {
  'Home Loan': '🏠',
  'Personal Loan': '💳',
  'Auto Loan': '🚗',
  'Mortgage Loan': '🏛️',
};

export default function Dashboard() {
  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening';
  const dateStr = now.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });

  const contactToday = mockCustomers.filter((c: any) => c.priorityTier === 'Contact Today');
  const thisWeek = mockCustomers.filter((c: any) => c.priorityTier === 'This Week');
  const highIntent = mockCustomers.filter((c: any) => c.intents[0].score > 80);
  const feedCustomers = mockCustomers
    .slice()
    .sort((a: any, b: any) => b.intents[0].score - a.intents[0].score)
    .slice(0, 8);

  const topProduct = feedCustomers[0]?.intents[0]?.product || 'Home Loan';
  const topProductPct = feedCustomers[0]?.intents[0]?.score || 87;

  // Funnel stages
  const funnelStages = [
    { label: 'High Intent', count: mockCustomers.filter((c: any) => c.pipelineStage === 'High Intent').length, color: 'bg-accent', width: '100%' },
    { label: 'Contacted', count: mockCustomers.filter((c: any) => c.pipelineStage === 'Contacted').length, color: 'bg-primary', width: '75%' },
    { label: 'Interested', count: mockCustomers.filter((c: any) => c.pipelineStage === 'Interested').length, color: 'bg-tertiary', width: '55%' },
    { label: 'Applied', count: mockCustomers.filter((c: any) => c.pipelineStage === 'Application Started').length, color: 'bg-secondary', width: '35%' },
    { label: 'Approved', count: mockCustomers.filter((c: any) => c.pipelineStage === 'Approved' || c.pipelineStage === 'Disbursed').length, color: 'bg-emerald-500', width: '20%' },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-[1400px] mx-auto">

      {/* AI Morning Greeting */}
      <div className="bg-gradient-to-r from-primary/90 to-primary/70 text-white rounded-2xl p-6 shadow-primary-glow relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 blur-2xl pointer-events-none" />
        <div className="absolute -right-8 -top-8 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-white/70 text-[12px] font-semibold uppercase tracking-wider">{dateStr}</span>
            </div>
            <h1 className="text-[26px] font-semibold tracking-tight">{greeting}, Yash Patil 👋</h1>
            <p className="text-white/80 text-[14px] mt-1 max-w-xl">
              Today we found <strong className="text-accent font-bold">{contactToday.length} customers</strong> with an <strong className="text-white">{topProductPct}%</strong> probability of accepting a {topProduct}.
              {' '}<span className="opacity-80">2 recently increased salary credits. 3 visited real estate portals. 1 just closed an education loan.</span>
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-white bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl hover:bg-white/25 transition-all">
              <Filter className="w-3.5 h-3.5" />Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-primary bg-white rounded-xl hover:bg-white/90 transition-all shadow-sm">
              <Download className="w-3.5 h-3.5" />Export
            </button>
          </div>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Contact Today', value: contactToday.length, delta: '+3', icon: Phone, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100' },
          { label: 'High Intent', value: highIntent.length, delta: '+12%', icon: Radar, color: 'text-accent', bg: 'bg-accent/8', border: 'border-accent/15' },
          { label: 'Avg Conversion', value: '>34%', delta: 'Target', icon: TrendingUp, color: 'text-primary', bg: 'bg-primary/8', border: 'border-primary/15' },
          { label: 'Repayment ID\'d', value: '₹14.2Cr', delta: '+₹0.5Cr', icon: IndianRupee, color: 'text-tertiary', bg: 'bg-tertiary/8', border: 'border-tertiary/15' },
        ].map((kpi) => (
          <div key={kpi.label} className={cn('bg-surface rounded-2xl p-4 shadow-card border', kpi.border, 'hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-200')}>
            <div className="flex items-start justify-between mb-3">
              <div className={cn('w-8 h-8 rounded-xl flex items-center justify-center', kpi.bg)}>
                <kpi.icon className={cn('w-4 h-4', kpi.color)} />
              </div>
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-lg">{kpi.delta}</span>
            </div>
            <p className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-[0.06em] mb-0.5">{kpi.label}</p>
            <p className="text-[24px] font-bold text-on-surface tracking-tight tabular-nums">{kpi.value}</p>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left: AI Opportunity Feed */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BrainCircuit className="w-4 h-4 text-accent" />
              <h2 className="text-[15px] font-semibold text-on-surface">AI Opportunity Feed</h2>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-accent/10 text-accent border border-accent/20">{feedCustomers.length} signals</span>
            </div>
            <Link to="/pipeline" className="text-[12px] font-semibold text-accent hover:text-accent/80 flex items-center gap-1">
              View All <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            {feedCustomers.map((customer: any) => {
              const topIntent = customer.intents[0];
              const isHighConviction = topIntent.score > 85;
              const pc = priorityConfig[customer.priorityTier as keyof typeof priorityConfig];

              return (
                <div key={customer.id} className={cn(
                  'bg-surface border rounded-2xl p-5 shadow-card hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-200',
                  isHighConviction ? 'border-accent/20' : 'border-outline-variant'
                )}>
                  {/* Priority Badge + Loan Type */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className={cn('text-[11px] font-bold px-2.5 py-1 rounded-full border', pc.bg, pc.border, pc.text)}>
                        {pc.label}
                      </span>
                      <span className="text-[13px] font-semibold text-on-surface">
                        {loanIcons[topIntent.product] || '📋'} {topIntent.product}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-semibold text-on-surface-variant">
                        Conversion <span className="text-primary font-bold">{customer.expectedConversion}%</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Profile */}
                    <div className="flex gap-3 md:w-[28%]">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-primary flex items-center justify-center text-[13px] font-bold border border-primary/20 flex-shrink-0">
                        {customer.name.split(' ').map((n: any) => n[0]).join('')}
                      </div>
                      <div className="min-w-0">
                        <Link to={`/customer/${customer.id}`} className="text-[14px] font-semibold text-on-surface hover:text-accent transition-colors block truncate">
                          {customer.name}
                        </Link>
                        <p className="text-[12px] text-on-surface-variant mt-0.5 truncate">{customer.occupation}</p>
                        <p className="text-[11px] font-bold text-primary mt-1">{customer.behaviourScore}% Behaviour</p>
                      </div>
                    </div>

                    {/* Intent Score — Vertical Bar */}
                    <div className="flex flex-col items-center md:w-[20%] md:border-l md:border-r border-outline-variant md:px-4 justify-center gap-1.5">
                      <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Intent Score</p>
                      <p className={cn('text-[30px] font-bold leading-none tracking-tight', isHighConviction ? 'text-accent' : 'text-primary')}>
                        {topIntent.score}%
                      </p>
                      {/* Vertical progress bar */}
                      <div className="w-8 h-20 bg-surface-container rounded-full overflow-hidden flex flex-col-reverse">
                        <div
                          className={cn('w-full rounded-full transition-all duration-1000', isHighConviction ? 'bg-accent' : 'bg-primary')}
                          style={{ height: `${topIntent.score}%` }}
                        />
                      </div>
                      <span className={cn('text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full border',
                        isHighConviction ? 'text-accent bg-accent/8 border-accent/20' : 'text-primary bg-primary/8 border-primary/20')}>
                        {isHighConviction ? 'High Conviction' : 'Moderate'}
                      </span>
                    </div>

                    {/* AI Signals */}
                    <div className="md:w-[52%] flex flex-col justify-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <BrainCircuit className="w-3.5 h-3.5 text-accent" />
                        <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Transaction & Behavior Signals</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        {(customer.behavioralSignals || []).slice(0, 2).map((signal: string, i: number) => (
                          <p key={i} className="text-[12px] text-on-surface bg-surface-container rounded-lg px-3 py-1.5 border border-outline-variant">
                            ✦ {signal}
                          </p>
                        ))}
                      </div>
                      <Link
                        to={`/customer/${customer.id}`}
                        className={cn('inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-[12px] font-semibold transition-all mt-1',
                          isHighConviction ? 'bg-accent text-white hover:bg-accent/90 shadow-sm' : 'bg-surface border border-outline-variant text-on-surface hover:bg-surface-container'
                        )}
                      >
                        {isHighConviction ? '📞 Call Today' : 'Review Profile'} <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Lead Funnel + Priority Summary */}
        <div className="lg:col-span-4 flex flex-col gap-4">

          {/* Lead Funnel */}
          <div className="bg-surface border border-outline-variant rounded-2xl p-5 shadow-card">
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp className="w-4 h-4 text-primary" />
              <h2 className="text-[14px] font-semibold text-on-surface">Lead Funnel</h2>
            </div>
            <div className="flex flex-col gap-3">
              {funnelStages.map((stage) => (
                <div key={stage.label}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[12px] font-medium text-on-surface">{stage.label}</span>
                    <span className="text-[12px] font-bold text-on-surface-variant">{stage.count}</span>
                  </div>
                  <div className="h-2 rounded-full bg-surface-container overflow-hidden">
                    <div className={cn('h-full rounded-full transition-all duration-1000', stage.color)} style={{ width: stage.width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Priority Summary */}
          <div className="bg-surface border border-outline-variant rounded-2xl p-5 shadow-card">
            <div className="flex items-center gap-2 mb-4">
              <Radar className="w-4 h-4 text-accent" />
              <h2 className="text-[14px] font-semibold text-on-surface">Lead Prioritization</h2>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { tier: 'Contact Today', icon: '🔥', count: contactToday.length, sub: 'Act now for best conversion', color: 'text-red-700 bg-red-50 border-red-200' },
                { tier: 'This Week', icon: '⭐', count: thisWeek.length, sub: 'Schedule outreach this week', color: 'text-amber-700 bg-amber-50 border-amber-200' },
                { tier: 'Monitor', icon: '🕒', count: mockCustomers.filter((c: any) => c.priorityTier === 'Monitor').length, sub: 'Watch for stronger signals', color: 'text-blue-700 bg-blue-50 border-blue-200' },
              ].map((item) => (
                <div key={item.tier} className={cn('flex items-center gap-3 p-3 rounded-xl border', item.color)}>
                  <span className="text-xl">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-bold">{item.tier}</p>
                    <p className="text-[11px] opacity-75 truncate">{item.sub}</p>
                  </div>
                  <span className="text-[20px] font-bold">{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Insight */}
          <div className="bg-surface border border-outline-variant rounded-2xl p-5 shadow-card">
            <div className="flex gap-3 p-3 rounded-xl bg-accent/[0.04] border border-accent/20">
              <BrainCircuit className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-[12px] text-on-surface leading-relaxed">
                System detected a <strong className="font-semibold">15% spike</strong> in Home Loan inquiries. 3 customers visited real estate portals in the last 48 hours. <span className="text-accent font-semibold">Prioritize outreach today.</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
