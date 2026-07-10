import { useParams, Navigate } from 'react-router-dom';
import { mockCustomers } from '../services/data';
import { Wallet, MoreHorizontal, Zap, TrendingUp, CheckCircle2, Mail, PlusSquare, BrainCircuit, Shield, Target, Activity, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const timelineIconMap: Record<string, string> = {
  salary: '💰',
  browse: '🌐',
  savings: '🏦',
  loan: '📄',
  life: '🎯',
  purchase: '🛍️',
};

const badgeStyle: Record<string, 'default' | 'secondary' | 'destructive' | 'outline' | 'ai' | 'success' | 'warning'> = {
  'Verified Income': 'success',
  'Behavior Verified': 'default',
  'Intent Confirmed': 'ai',
  'AI Recommended': 'ai',
  'High Conversion': 'warning',
  'Low Risk': 'success',
};

const MotionCard = motion.create(Card);

export default function Customer360() {
  const { id } = useParams();
  const customer = id
    ? mockCustomers.find((c: any) => c.id === id) || mockCustomers[0]
    : mockCustomers[0];

  if (!customer) return <Navigate to="/dashboard" replace />;

  const topIntent = customer.intents[0];
  const loanScores = customer.loanMatchScores || { homeLoan: 92, personalLoan: 58, autoLoan: 74, mortgage: 31 };

  return (
    <div className="flex flex-col gap-6 relative z-10 pb-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 gap-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-3">
            {(customer.aiBadges || []).map((badge: string) => (
              <Badge key={badge} variant={badgeStyle[badge] || 'outline'} className="uppercase tracking-widest text-[10px] px-2">
                {badge}
              </Badge>
            ))}
          </div>
          <h2 className="text-[32px] font-bold tracking-tight text-on-surface leading-none">{customer.name}</h2>
          <div className="flex items-center gap-2 mt-2 text-[13px] text-on-surface-variant font-medium">
            <span>{customer.occupation}</span>
            <span className="opacity-50">•</span>
            <span>{customer.relationshipDuration} relationship</span>
            <span className="opacity-50">•</span>
            <span className="text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">Last synced 12 mins ago</span>
          </div>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Button variant="outline" className="gap-2 glass">
            <Mail className="w-4 h-4" /> Contact
          </Button>
          <Button variant="ai" className="gap-2">
            <PlusSquare className="w-4 h-4" /> Create Offer
          </Button>
        </div>
      </div>

      {/* Top Row: Financial Profile + AI Explainability */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Financial Profile — Repayment Capacity */}
        <MotionCard 
          glass 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-4 flex flex-col relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent z-0 pointer-events-none" />
          <CardContent className="p-6 relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-5">
              <div className="flex items-center gap-2">
                <Wallet className="w-4 h-4 text-primary" />
                <h3 className="text-[15px] font-bold text-on-surface">Financial Profile</h3>
              </div>
              <Button variant="ghost" size="icon" className="w-8 h-8 -mr-2 -mt-2">
                <MoreHorizontal className="text-on-surface-variant w-5 h-5" />
              </Button>
            </div>

            <div className="flex flex-col gap-4 flex-1 justify-between">
              {/* Income comparison */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-surface/50 rounded-xl p-3 border border-outline/50">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Declared Income</div>
                  <div className="text-[16px] font-semibold text-on-surface-variant line-through opacity-60">₹{(customer.declaredIncome / 100000).toFixed(2)}L</div>
                </div>
                <div className="bg-accent/10 rounded-xl p-3 border border-accent/20">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1 flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3" /> AI Assessed
                  </div>
                  <div className="text-[16px] font-bold text-accent">₹{(customer.assessedActualIncome / 100000).toFixed(2)}L</div>
                </div>
              </div>

              {/* Repayment Capacity */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-5 text-center relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-accent/20 blur-2xl rounded-full pointer-events-none" />
                <div className="flex items-center justify-center gap-1.5 mb-1 relative z-10">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-accent">Repayment Capacity</span>
                </div>
                <div className="text-[32px] font-bold tracking-tight text-on-surface relative z-10">
                  ₹{(customer.calculatedRepaymentCapacity / 100000).toFixed(2)}L<span className="text-[14px] font-medium text-on-surface-variant">/mo</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center bg-surface/50 rounded-xl p-3 border border-outline/50">
                  <div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Credit</div>
                  <div className="text-[16px] font-bold text-on-surface">{customer.creditScore}</div>
                  <div className="text-[10px] text-primary font-bold">{customer.creditScore >= 750 ? 'Excellent' : 'Good'}</div>
                </div>
                <div className="text-center bg-surface/50 rounded-xl p-3 border border-outline/50">
                  <div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">DTI</div>
                  <div className="text-[16px] font-bold text-on-surface">{((customer.monthlyExpenses + (customer.existingLoans > 0 ? 20000 : 0)) / customer.assessedActualIncome * 100).toFixed(0)}%</div>
                  <div className="text-[10px] text-primary font-bold">Healthy</div>
                </div>
                <div className="text-center bg-surface/50 rounded-xl p-3 border border-outline/50">
                  <div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Savings</div>
                  <div className="text-[16px] font-bold text-on-surface">{((customer.savings / customer.assessedActualIncome) * 100).toFixed(0)}%</div>
                  <div className="text-[10px] text-primary font-bold">Rate</div>
                </div>
              </div>
            </div>
          </CardContent>
        </MotionCard>

        {/* AI Explainability + Confidence Meter */}
        <div className="lg:col-span-8 flex flex-col gap-6">

          {/* AI Explainability */}
          <MotionCard 
            glass
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="w-5 h-5 text-accent" />
                  <h3 className="text-[15px] font-bold text-on-surface">Explainable AI — Why This Recommendation?</h3>
                </div>
                <Badge variant="ai" className="px-3 py-1">
                  🏠 {topIntent.product}
                </Badge>
              </div>
              <div className="bg-surface-variant/30 border-l-2 border-primary rounded-r-xl p-5 border border-outline/50">
                <p className="text-[13px] text-on-surface-variant mb-3 font-semibold">We detected the following signals:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(customer.behavioralSignals || []).map((signal: string, i: number) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-[13px] text-on-surface">{signal}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[13px] font-bold text-primary mt-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Therefore we recommend {topIntent.product}.
                </p>
              </div>
            </CardContent>
          </MotionCard>

          {/* AI Confidence Meter */}
          <MotionCard 
            glass
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-5">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="text-[15px] font-bold text-on-surface">AI Confidence Meter</h3>
              </div>
              <div className="flex items-center gap-8">
                <div className="relative w-28 h-28 flex-shrink-0 drop-shadow-md">
                  <svg className="w-28 h-28 -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15.9" fill="none" className="stroke-surface-variant" strokeWidth="3" />
                    <circle
                      cx="18" cy="18" r="15.9" fill="none"
                      className={customer.aiConfidence > 85 ? 'stroke-primary' : 'stroke-accent'}
                      strokeWidth="3"
                      strokeDasharray={`${customer.aiConfidence} ${100 - customer.aiConfidence}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[26px] font-bold text-on-surface tabular-nums">{customer.aiConfidence}%</span>
                    <span className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">Confidence</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-3 border-l border-outline/50 pl-8">
                  {(customer.confidenceReasons || []).map((reason: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                      <span className="text-[13px] text-on-surface/90 font-medium">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </MotionCard>
        </div>
      </div>

      {/* Loan Match Engine */}
      <MotionCard 
        glass
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Target className="w-5 h-5 text-accent" />
            <h3 className="text-[15px] font-bold text-on-surface">Loan Match Engine</h3>
            <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest ml-2 hidden sm:block">AI match scores for all target products</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Home Loan', score: loanScores.homeLoan, icon: '🏠', color: 'from-primary/10 to-transparent', border: 'border-primary/20', text: 'text-primary' },
              { name: 'Personal Loan', score: loanScores.personalLoan, icon: '💳', color: 'from-accent/10 to-transparent', border: 'border-accent/20', text: 'text-accent' },
              { name: 'Auto Loan', score: loanScores.autoLoan, icon: '🚗', color: 'from-tertiary/10 to-transparent', border: 'border-tertiary/20', text: 'text-tertiary' },
              { name: 'Mortgage', score: loanScores.mortgage, icon: '🏛️', color: 'from-secondary/10 to-transparent', border: 'border-secondary/20', text: 'text-secondary' },
            ].map((loan) => (
              <div key={loan.name} className={cn('bg-gradient-to-b rounded-2xl p-5 border text-center transition-all hover:border-outline', loan.color, loan.border)}>
                <div className="text-4xl mb-3">{loan.icon}</div>
                <div className={cn('text-[36px] font-bold tracking-tight tabular-nums leading-none mb-1', loan.text)}>{loan.score}%</div>
                <div className="text-[13px] font-bold text-on-surface mb-3">{loan.name}</div>
                <div className="h-1.5 bg-surface-variant rounded-full overflow-hidden">
                  <div className={cn('h-full rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(255,255,255,0.2)]', loan.text.replace('text', 'bg'))} style={{ width: `${loan.score}%` }} />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mt-3">{loan.score >= 80 ? 'Strong Match' : loan.score >= 60 ? 'Good Match' : loan.score >= 40 ? 'Possible' : 'Low Match'}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </MotionCard>

      {/* Next Best Action + Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Next Best Action */}
        <MotionCard 
          glass
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-5"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <Zap className="w-5 h-5 text-accent" />
              <h3 className="text-[15px] font-bold text-on-surface">Next Best Action</h3>
            </div>
            <div className="flex flex-col gap-3">
              {(customer.nextBestActions || []).map((action: any, i: number) => (
                <div key={i} className={cn('flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer',
                  i === 0 ? 'bg-accent/10 border-accent/30 hover:bg-accent/15 shadow-[0_0_15px_rgba(245,158,11,0.05)]' : 'bg-surface/50 border-outline/50 hover:bg-surface-variant/50'
                )}>
                  <span className="text-2xl drop-shadow-sm">{action.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className={cn('text-[14px] font-bold', i === 0 ? 'text-accent' : 'text-on-surface')}>{action.action}</p>
                    <p className="text-[12px] text-on-surface-variant truncate mt-0.5">{action.label}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className={cn('text-[16px] font-bold tabular-nums', i === 0 ? 'text-accent' : 'text-on-surface')}>{action.confidence}%</div>
                    <div className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant">confidence</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </MotionCard>

        {/* Customer Timeline */}
        <MotionCard 
          glass
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-7"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-tertiary" />
              <h3 className="text-[15px] font-bold text-on-surface">Customer Intent Timeline</h3>
            </div>
            <div className="relative pl-8 pr-2 space-y-6 max-h-[360px] overflow-y-auto custom-scrollbar">
              <div className="absolute top-2 bottom-2 left-[15px] w-0.5 bg-gradient-to-b from-accent to-surface-variant rounded-full" />
              {(customer.timeline || []).map((event: any, idx: number) => {
                const isLast = idx === (customer.timeline || []).length - 1;
                return (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (idx * 0.1) }}
                    className="relative flex flex-col gap-1"
                  >
                    <div className={cn('absolute -left-9 top-1 w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] shadow-sm',
                      isLast ? 'bg-accent border-accent text-white shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 'bg-surface border-outline text-on-surface-variant')}>
                      {isLast ? <Sparkles className="w-3 h-3" /> : <div className="w-1.5 h-1.5 rounded-full bg-on-surface-variant" />}
                    </div>
                    <div className="flex items-baseline justify-between gap-3 ml-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg drop-shadow-sm">{timelineIconMap[event.type] || '●'}</span>
                        <span className="text-[14px] font-bold text-on-surface">{event.event}</span>
                      </div>
                      <Badge variant="outline" className="text-[10px] font-mono flex-shrink-0 bg-surface/50">{event.month}</Badge>
                    </div>
                    <p className="text-[13px] text-on-surface-variant ml-2 leading-relaxed">{event.detail}</p>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </MotionCard>
      </div>

      {/* Behavioral Heatmap */}
      <MotionCard 
        glass
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Activity className="w-5 h-5 text-primary" />
            <h3 className="text-[15px] font-bold text-on-surface">Behavioral Spending Heatmap</h3>
            <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest ml-2 hidden sm:block">AI highlighted anomalies in orange</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(customer.behavioralHeatmap || []).map((cat: any, i: number) => (
              <div key={i} className={cn('rounded-xl p-4 border transition-all hover:bg-surface-variant/30',
                cat.highlight ? 'bg-accent/5 border-accent/30 shadow-[0_0_15px_rgba(245,158,11,0.05)]' : 'bg-surface/30 border-outline/50'
              )}>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[13px] font-bold text-on-surface">{cat.label}</span>
                  {cat.highlight && <Badge variant="ai" className="px-1.5 py-0 text-[9px]">AI ↑</Badge>}
                </div>
                <div className="h-1.5 bg-surface-variant rounded-full overflow-hidden mb-2">
                  <div
                    className={cn('h-full rounded-full transition-all duration-1000', cat.highlight ? 'bg-accent shadow-[0_0_8px_rgba(245,158,11,0.5)]' : 'bg-primary/50')}
                    style={{ width: `${cat.value}%` }}
                  />
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[12px] font-bold text-on-surface tabular-nums">{cat.value}%</span>
                  <span className={cn('text-[11px] font-bold tabular-nums', cat.change > 0 ? 'text-primary' : 'text-error')}>
                    {cat.change > 0 ? '+' : ''}{cat.change}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </MotionCard>

    </div>
  );
}
