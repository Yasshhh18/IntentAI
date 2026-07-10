import { mockCustomers } from '../services/data';
import { IndianRupee, TrendingUp, Filter, Radar, BrainCircuit, ArrowUpRight, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const priorityConfig = {
  'Contact Today': { label: 'Contact Today', variant: 'destructive', dot: 'bg-red-500' },
  'This Week': { label: 'This Week', variant: 'warning', dot: 'bg-amber-500' },
  'Monitor': { label: 'Monitor', variant: 'default', dot: 'bg-blue-400' },
  'Ignore': { label: 'Ignore', variant: 'outline', dot: 'bg-outline' },
} as const;

const loanIcons: Record<string, string> = {
  'Home Loan': '🏠',
  'Personal Loan': '💳',
  'Auto Loan': '🚗',
  'Mortgage Loan': '🏛️',
};

const MotionCard = motion.create(Card);

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

  const funnelStages = [
    { label: 'High Intent', count: mockCustomers.filter((c: any) => c.pipelineStage === 'High Intent').length, color: 'bg-accent', width: '100%' },
    { label: 'Contacted', count: mockCustomers.filter((c: any) => c.pipelineStage === 'Contacted').length, color: 'bg-primary', width: '75%' },
    { label: 'Interested', count: mockCustomers.filter((c: any) => c.pipelineStage === 'Interested').length, color: 'bg-tertiary', width: '55%' },
    { label: 'Applied', count: mockCustomers.filter((c: any) => c.pipelineStage === 'Application Started').length, color: 'bg-secondary', width: '35%' },
    { label: 'Approved', count: mockCustomers.filter((c: any) => c.pipelineStage === 'Approved' || c.pipelineStage === 'Disbursed').length, color: 'bg-emerald-500', width: '20%' },
  ];

  return (
    <div className="flex flex-col gap-6">

      {/* AI Morning Greeting */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-surface/60 backdrop-blur-xl border border-outline rounded-3xl p-8 relative overflow-hidden group shadow-card"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/10 rounded-full blur-[80px]" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
              <span className="text-on-surface-variant text-[12px] font-bold uppercase tracking-[0.1em]">{dateStr}</span>
            </div>
            <h1 className="text-[32px] font-bold tracking-tight text-on-surface">{greeting}, Yash 👋</h1>
            <p className="text-on-surface-variant text-[15px] mt-2 max-w-2xl leading-relaxed">
              System detected <strong className="text-accent font-semibold">{contactToday.length} highly qualified leads</strong> with an <strong className="text-primary">{topProductPct}%</strong> probability for {topProduct}.
              <br className="hidden md:block" />
              <span className="opacity-75">3 signals triggered from real estate portals in the last hour.</span>
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Button variant="outline" className="gap-2 rounded-xl backdrop-blur-md bg-surface/30">
              <Filter className="w-4 h-4" /> Filter
            </Button>
            <Button variant="ai" className="gap-2 rounded-xl px-5">
              <Sparkles className="w-4 h-4" /> Generate Report
            </Button>
          </div>
        </div>
      </motion.div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Action Required', value: contactToday.length, delta: '+3', icon: Phone, glow: 'group-hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]' },
          { label: 'High Intent Leads', value: highIntent.length, delta: '+12%', icon: Radar, glow: 'group-hover:shadow-accent-glow' },
          { label: 'Avg Conversion', value: '>34%', delta: 'Target', icon: TrendingUp, glow: 'group-hover:shadow-primary-glow' },
          { label: 'Identified Pipeline', value: '₹14.2Cr', delta: '+₹0.5Cr', icon: IndianRupee, glow: 'group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]' },
        ].map((kpi, i) => (
          <MotionCard 
            key={kpi.label} 
            interactive 
            glass
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={cn("group transition-all duration-300", kpi.glow)}
          >
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-surface-variant/50 border border-outline/50 flex items-center justify-center group-hover:bg-surface-variant transition-colors">
                  <kpi.icon className="w-5 h-5 text-on-surface-variant group-hover:text-on-surface" />
                </div>
                <Badge variant="success" className="bg-primary/10 border-primary/20 text-[10px] py-0">{kpi.delta}</Badge>
              </div>
              <p className="text-[12px] font-bold text-on-surface-variant uppercase tracking-[0.1em] mb-1">{kpi.label}</p>
              <p className="text-[28px] font-bold text-on-surface tracking-tight tabular-nums">{kpi.value}</p>
            </CardContent>
          </MotionCard>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left: AI Opportunity Feed */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <BrainCircuit className="w-5 h-5 text-accent" />
              <h2 className="text-[16px] font-bold text-on-surface">Intelligence Feed</h2>
              <Badge variant="ai" className="ml-2">{feedCustomers.length} Active</Badge>
            </div>
            <Button variant="link" className="text-accent text-[13px] h-auto p-0">
              View All <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            {feedCustomers.map((customer: any, i: number) => {
              const topIntent = customer.intents[0];
              const isHighConviction = topIntent.score > 85;
              const pc = priorityConfig[customer.priorityTier as keyof typeof priorityConfig] || priorityConfig['Monitor'];

              return (
                <MotionCard 
                  key={customer.id} 
                  glass
                  interactive
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.05) }}
                  className={cn(isHighConviction ? 'border-accent/30' : '')}
                >
                  <CardContent className="p-5">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-outline/30">
                      <div className="flex items-center gap-3">
                        <Badge variant={pc.variant as any} className="gap-1.5 uppercase text-[10px] tracking-widest px-2.5">
                          <span className={cn("w-1.5 h-1.5 rounded-full", pc.dot)} />
                          {pc.label}
                        </Badge>
                        <span className="text-[13px] font-semibold text-on-surface-variant flex items-center gap-1.5">
                          {loanIcons[topIntent.product] || '📋'} {topIntent.product}
                        </span>
                      </div>
                      <div className="text-[12px] font-semibold text-on-surface-variant bg-surface-variant/50 px-3 py-1 rounded-full">
                        Est. Conversion: <span className="text-primary font-bold">{customer.expectedConversion}%</span>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      {/* Profile */}
                      <div className="flex gap-4 md:w-[35%] w-full">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-surface-variant to-surface border border-outline flex items-center justify-center text-[15px] font-bold flex-shrink-0 text-on-surface">
                          {customer.name.split(' ').map((n: any) => n[0]).join('')}
                        </div>
                        <div className="min-w-0">
                          <Link to={`/customer/${customer.id}`} className="text-[15px] font-bold text-on-surface hover:text-accent transition-colors block truncate">
                            {customer.name}
                          </Link>
                          <p className="text-[13px] text-on-surface-variant mt-0.5 truncate">{customer.occupation}</p>
                          <p className="text-[11px] font-bold text-primary mt-1.5">Profile Score: {customer.behaviourScore}%</p>
                        </div>
                      </div>

                      {/* Intent Score */}
                      <div className="flex md:w-[15%] w-full flex-col items-center justify-center">
                        <div className="relative flex items-center justify-center">
                          <svg className="w-16 h-16 transform -rotate-90">
                            <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-surface-variant" />
                            <circle 
                              cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" 
                              strokeDasharray={175.93} 
                              strokeDashoffset={175.93 - (175.93 * topIntent.score) / 100}
                              strokeLinecap="round"
                              className={isHighConviction ? 'text-accent' : 'text-primary'} 
                            />
                          </svg>
                          <span className={cn('absolute text-[16px] font-bold tabular-nums', isHighConviction ? 'text-accent' : 'text-primary')}>
                            {topIntent.score}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-2">Intent</span>
                      </div>

                      {/* Signals & Action */}
                      <div className="md:w-[50%] w-full flex flex-col justify-center gap-3">
                        <div className="flex flex-col gap-1.5">
                          {(customer.behavioralSignals || []).slice(0, 2).map((signal: string, i: number) => (
                            <div key={i} className="text-[12px] text-on-surface/90 bg-surface-variant/40 rounded-lg px-3 py-2 border border-outline/30 flex items-start gap-2">
                              <Sparkles className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                              <span>{signal}</span>
                            </div>
                          ))}
                        </div>
                        <Button 
                          variant={isHighConviction ? "ai" : "secondary"} 
                          className={cn("w-full md:w-auto self-start mt-1", isHighConviction && "border-accent/40 bg-accent/10 shadow-[0_0_15px_rgba(245,158,11,0.15)]")}
                          asChild
                        >
                          <Link to={`/customer/${customer.id}`}>
                            {isHighConviction ? 'Engage Now' : 'Review Profile'}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </MotionCard>
              );
            })}
          </div>
        </div>

        {/* Right: Side Modules */}
        <div className="lg:col-span-4 flex flex-col gap-5 mt-8 lg:mt-0">

          {/* Alert Module */}
          <Card className="glass border-accent/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
            <CardContent className="p-5">
              <div className="flex gap-3">
                <BrainCircuit className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-[14px] font-bold text-on-surface mb-1">Portfolio Insight</h3>
                  <p className="text-[13px] text-on-surface-variant leading-relaxed">
                    System detected a <strong className="text-on-surface">15% spike</strong> in Home Loan inquiries. 3 customers visited real estate portals in the last 48 hours.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lead Funnel */}
          <Card className="glass">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-4 h-4 text-primary" />
                <h2 className="text-[15px] font-bold text-on-surface">Lead Pipeline</h2>
              </div>
              <div className="flex flex-col gap-4">
                {funnelStages.map((stage) => (
                  <div key={stage.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[13px] font-medium text-on-surface-variant">{stage.label}</span>
                      <span className="text-[13px] font-bold text-on-surface tabular-nums">{stage.count}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-surface-variant overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: stage.width }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={cn('h-full rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]', stage.color)} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Priority Summary */}
          <Card className="glass">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-5">
                <Radar className="w-4 h-4 text-accent" />
                <h2 className="text-[15px] font-bold text-on-surface">Lead Tiers</h2>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { tier: 'Contact Today', icon: '🔥', count: contactToday.length, sub: 'Immediate action', color: 'border-red-500/20 bg-red-500/5', text: 'text-red-400' },
                  { tier: 'This Week', icon: '⭐', count: thisWeek.length, sub: 'Schedule outreach', color: 'border-amber-500/20 bg-amber-500/5', text: 'text-amber-400' },
                  { tier: 'Monitor', icon: '🕒', count: mockCustomers.filter((c: any) => c.priorityTier === 'Monitor').length, sub: 'Watch signals', color: 'border-blue-500/20 bg-blue-500/5', text: 'text-blue-400' },
                ].map((item) => (
                  <div key={item.tier} className={cn('flex items-center gap-4 p-4 rounded-xl border', item.color)}>
                    <span className="text-xl">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className={cn("text-[13px] font-bold", item.text)}>{item.tier}</p>
                      <p className="text-[11px] text-on-surface-variant truncate">{item.sub}</p>
                    </div>
                    <span className={cn("text-[20px] font-bold tabular-nums", item.text)}>{item.count}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
