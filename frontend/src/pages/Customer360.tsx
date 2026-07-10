import { useParams, Navigate } from 'react-router-dom';
import { mockCustomers } from '../services/data';
import { Wallet, MoreHorizontal, Zap, TrendingUp, CheckCircle2, Mail, PlusSquare, BrainCircuit, Shield, Target, Activity } from 'lucide-react';
import { cn } from '../lib/utils';

const loanIcons: Record<string, string> = {
  'Home Loan': '🏠',
  'Personal Loan': '💳',
  'Auto Loan': '🚗',
  'Mortgage': '🏛️',
};

const timelineIconMap: Record<string, string> = {
  salary: '💰',
  browse: '🌐',
  savings: '🏦',
  loan: '📄',
  life: '🎯',
  purchase: '🛍️',
};

const badgeStyle: Record<string, string> = {
  'Verified Income': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Behavior Verified': 'bg-blue-50 text-blue-700 border-blue-200',
  'Intent Confirmed': 'bg-accent/8 text-accent border-accent/25',
  'AI Recommended': 'bg-primary/8 text-primary border-primary/20',
  'High Conversion': 'bg-amber-50 text-amber-700 border-amber-200',
  'Low Risk': 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

export default function Customer360() {
  const { id } = useParams();
  const customer = id
    ? mockCustomers.find((c: any) => c.id === id) || mockCustomers[0]
    : mockCustomers[0];

  if (!customer) return <Navigate to="/dashboard" replace />;

  const topIntent = customer.intents[0];
  const isHighConviction = topIntent.score > 85;
  const loanScores = customer.loanMatchScores || { homeLoan: 92, personalLoan: 58, autoLoan: 74, mortgage: 31 };

  return (
    <div className="flex flex-col gap-5 max-w-7xl mx-auto relative z-10 pb-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 gap-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-2">
            {(customer.aiBadges || []).map((badge: string) => (
              <span key={badge} className={cn('text-[10px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-wide', badgeStyle[badge] || 'bg-surface-container text-on-surface-variant border-outline-variant')}>
                {badge}
              </span>
            ))}
          </div>
          <h2 className="text-[28px] font-semibold tracking-tight text-on-background">{customer.name}</h2>
          <div className="flex items-center gap-2 mt-1 text-[13px] text-on-surface-variant">
            <span>{customer.occupation}</span>
            <span>·</span>
            <span>{customer.relationshipDuration} relationship</span>
            <span>·</span>
            <span className="text-primary font-semibold">Last synced 12 mins ago</span>
          </div>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button className="px-4 py-2 bg-white/50 backdrop-blur-sm border border-white/60 text-on-surface rounded-xl text-[13px] font-semibold hover:bg-white/80 transition-all shadow-sm flex items-center gap-2">
            <Mail className="w-4 h-4" /> Contact
          </button>
          <button className="px-4 py-2 bg-accent text-white rounded-xl text-[13px] font-semibold hover:bg-accent/90 transition-colors shadow-md flex items-center gap-2">
            <PlusSquare className="w-4 h-4" /> Create Offer
          </button>
        </div>
      </div>

      {/* Top Row: Financial Profile + AI Explainability */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

        {/* Financial Profile — Repayment Capacity */}
        <div className="lg:col-span-4 bg-white/70 backdrop-blur-lg border border-white/60 shadow-glass rounded-xl p-5 flex flex-col relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0" />
          <div className="relative z-10 flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <Wallet className="w-4 h-4 text-primary" />
              <h3 className="text-[14px] font-semibold text-on-background">Financial Profile</h3>
            </div>
            <MoreHorizontal className="text-outline-variant w-5 h-5" />
          </div>

          <div className="relative z-10 flex flex-col gap-3">
            {/* Income comparison */}
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="bg-white/50 rounded-lg p-3 border border-outline-variant/30">
                <div className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">Declared Income</div>
                <div className="text-[16px] font-semibold text-on-surface-variant line-through opacity-60">₹{(customer.declaredIncome / 100000).toFixed(2)}L</div>
              </div>
              <div className="bg-accent/5 rounded-lg p-3 border border-accent/20">
                <div className="text-[10px] font-bold uppercase tracking-wider text-accent mb-1">AI Assessed</div>
                <div className="text-[16px] font-semibold text-accent">₹{(customer.assessedActualIncome / 100000).toFixed(2)}L</div>
              </div>
            </div>

            {/* Repayment Capacity */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Zap className="w-3.5 h-3.5 text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent">Repayment Capacity</span>
              </div>
              <div className="text-[28px] font-bold tracking-tight text-on-surface">₹{(customer.calculatedRepaymentCapacity / 100000).toFixed(2)}L<span className="text-[14px] font-medium text-on-surface-variant">/mo</span></div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center bg-white/40 rounded-lg p-2 border border-outline-variant/20">
                <div className="text-[10px] text-on-surface-variant font-bold uppercase">Credit</div>
                <div className="text-[14px] font-bold text-on-surface">{customer.creditScore}</div>
                <div className="text-[10px] text-primary font-semibold">{customer.creditScore >= 750 ? 'Excellent' : 'Good'}</div>
              </div>
              <div className="text-center bg-white/40 rounded-lg p-2 border border-outline-variant/20">
                <div className="text-[10px] text-on-surface-variant font-bold uppercase">DTI</div>
                <div className="text-[14px] font-bold text-on-surface">{((customer.monthlyExpenses + (customer.existingLoans > 0 ? 20000 : 0)) / customer.assessedActualIncome * 100).toFixed(0)}%</div>
                <div className="text-[10px] text-primary font-semibold">Healthy</div>
              </div>
              <div className="text-center bg-white/40 rounded-lg p-2 border border-outline-variant/20">
                <div className="text-[10px] text-on-surface-variant font-bold uppercase">Savings</div>
                <div className="text-[14px] font-bold text-on-surface">{((customer.savings / customer.assessedActualIncome) * 100).toFixed(0)}%</div>
                <div className="text-[10px] text-primary font-semibold">Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Explainability + Confidence Meter */}
        <div className="lg:col-span-8 flex flex-col gap-5">

          {/* AI Explainability */}
          <div className="bg-white/70 backdrop-blur-lg border border-white/60 shadow-glass rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-4 h-4 text-accent" />
                <h3 className="text-[14px] font-semibold text-on-background">Explainable AI — Why This Recommendation?</h3>
              </div>
              <span className="px-2.5 py-1 bg-accent/10 text-accent rounded-full text-[11px] font-bold border border-accent/20">
                🏠 {topIntent.product}
              </span>
            </div>
            <div className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary rounded-r-lg p-4 mb-4">
              <p className="text-[13px] text-on-surface-variant mb-2 font-medium">We detected the following signals:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(customer.behavioralSignals || []).map((signal: string, i: number) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-[12px] text-on-surface">{signal}</span>
                  </div>
                ))}
              </div>
              <p className="text-[12px] font-bold text-primary mt-3">→ Therefore we recommend {topIntent.product}.</p>
            </div>
          </div>

          {/* AI Confidence Meter */}
          <div className="bg-white/70 backdrop-blur-lg border border-white/60 shadow-glass rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-4 h-4 text-primary" />
              <h3 className="text-[14px] font-semibold text-on-background">AI Confidence Meter</h3>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24 flex-shrink-0">
                <svg className="w-24 h-24 -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f1f5f9" strokeWidth="3" />
                  <circle
                    cx="18" cy="18" r="15.9" fill="none"
                    stroke={customer.aiConfidence > 85 ? '#0F6A4A' : '#F28C28'}
                    strokeWidth="3"
                    strokeDasharray={`${customer.aiConfidence} ${100 - customer.aiConfidence}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[22px] font-bold text-on-surface">{customer.aiConfidence}%</span>
                  <span className="text-[9px] font-bold text-on-surface-variant uppercase tracking-wide">Confidence</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                {(customer.confidenceReasons || []).map((reason: string, i: number) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-[12px] text-on-surface">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loan Match Engine */}
      <div className="bg-white/70 backdrop-blur-lg border border-white/60 shadow-glass rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-4 h-4 text-accent" />
          <h3 className="text-[14px] font-semibold text-on-background">Loan Match Engine</h3>
          <span className="text-[11px] text-on-surface-variant">— AI match scores for all target products</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Home Loan', score: loanScores.homeLoan, icon: '🏠', color: 'from-primary/20 to-primary/5', border: 'border-primary/25', text: 'text-primary' },
            { name: 'Personal Loan', score: loanScores.personalLoan, icon: '💳', color: 'from-accent/20 to-accent/5', border: 'border-accent/25', text: 'text-accent' },
            { name: 'Auto Loan', score: loanScores.autoLoan, icon: '🚗', color: 'from-tertiary/20 to-tertiary/5', border: 'border-tertiary/25', text: 'text-tertiary' },
            { name: 'Mortgage', score: loanScores.mortgage, icon: '🏛️', color: 'from-secondary/20 to-secondary/5', border: 'border-secondary/25', text: 'text-secondary' },
          ].map((loan) => (
            <div key={loan.name} className={cn('bg-gradient-to-b rounded-xl p-4 border text-center', loan.color, loan.border)}>
              <div className="text-3xl mb-2">{loan.icon}</div>
              <div className={cn('text-[32px] font-bold tracking-tight', loan.text)}>{loan.score}%</div>
              <div className="text-[12px] font-semibold text-on-surface mt-0.5">{loan.name}</div>
              <div className="mt-2 h-1.5 bg-white/50 rounded-full overflow-hidden">
                <div className={cn('h-full rounded-full transition-all duration-1000', loan.text.replace('text', 'bg'))} style={{ width: `${loan.score}%` }} />
              </div>
              <div className="text-[10px] text-on-surface-variant mt-1.5">{loan.score >= 80 ? 'Strong Match' : loan.score >= 60 ? 'Good Match' : loan.score >= 40 ? 'Possible' : 'Low Match'}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Best Action + Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

        {/* Next Best Action */}
        <div className="lg:col-span-5 bg-white/70 backdrop-blur-lg border border-white/60 shadow-glass rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-accent" />
            <h3 className="text-[14px] font-semibold text-on-background">Next Best Action</h3>
          </div>
          <div className="flex flex-col gap-2">
            {(customer.nextBestActions || []).map((action: any, i: number) => (
              <div key={i} className={cn('flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer',
                i === 0 ? 'bg-accent/8 border-accent/25 hover:bg-accent/12' : 'bg-white/40 border-outline-variant/40 hover:bg-white/60'
              )}>
                <span className="text-xl">{action.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className={cn('text-[13px] font-semibold', i === 0 ? 'text-accent' : 'text-on-surface')}>{action.action}</p>
                  <p className="text-[11px] text-on-surface-variant truncate">{action.label}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className={cn('text-[14px] font-bold', i === 0 ? 'text-accent' : 'text-on-surface')}>{action.confidence}%</div>
                  <div className="text-[10px] text-on-surface-variant">confidence</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Timeline */}
        <div className="lg:col-span-7 bg-white/70 backdrop-blur-lg border border-white/60 shadow-glass rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-tertiary" />
            <h3 className="text-[14px] font-semibold text-on-background">Customer Intent Timeline</h3>
          </div>
          <div className="relative pl-8 pr-2 space-y-5 max-h-[320px] overflow-y-auto">
            <div className="absolute top-0 bottom-0 left-[11px] w-0.5 bg-gradient-to-b from-accent/50 to-primary/20" />
            {(customer.timeline || []).map((event: any, idx: number) => {
              const isLast = idx === (customer.timeline || []).length - 1;
              return (
                <div key={idx} className="relative flex flex-col gap-0.5">
                  <div className={cn('absolute -left-8 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center text-[10px]',
                    isLast ? 'bg-accent border-accent text-white' : 'bg-surface border-primary/40')}>
                    {isLast ? '●' : ''}
                  </div>
                  <div className="flex items-baseline justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{timelineIconMap[event.type] || '●'}</span>
                      <span className="text-[13px] font-semibold text-on-surface">{event.event}</span>
                    </div>
                    <span className="text-[11px] font-bold text-accent flex-shrink-0">{event.month}</span>
                  </div>
                  <p className="text-[12px] text-on-surface-variant ml-7">{event.detail}</p>
                  {!isLast && <div className="ml-7 mt-1">
                    <span className="text-on-surface-variant text-[11px]">↓</span>
                  </div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Behavioral Heatmap */}
      <div className="bg-white/70 backdrop-blur-lg border border-white/60 shadow-glass rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-4 h-4 text-primary" />
          <h3 className="text-[14px] font-semibold text-on-background">Behavioral Spending Heatmap</h3>
          <span className="text-[11px] text-on-surface-variant">— AI highlighted anomalies in orange</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {(customer.behavioralHeatmap || []).map((cat: any, i: number) => (
            <div key={i} className={cn('rounded-xl p-3 border transition-all',
              cat.highlight ? 'bg-accent/8 border-accent/30' : 'bg-white/40 border-outline-variant/30'
            )}>
              <div className="flex justify-between items-start mb-2">
                <span className="text-[12px] font-semibold text-on-surface">{cat.label}</span>
                {cat.highlight && <span className="text-[10px] font-bold text-accent bg-accent/10 px-1.5 py-0.5 rounded-full">AI ↑</span>}
              </div>
              <div className="h-1.5 bg-surface-container rounded-full overflow-hidden mb-1">
                <div
                  className={cn('h-full rounded-full transition-all duration-1000', cat.highlight ? 'bg-accent' : 'bg-primary/50')}
                  style={{ width: `${cat.value}%` }}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold text-on-surface">{cat.value}%</span>
                <span className={cn('text-[10px] font-bold', cat.change > 0 ? 'text-emerald-600' : 'text-red-500')}>
                  {cat.change > 0 ? '+' : ''}{cat.change}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
