import { mockCustomers } from '../services/data';
import { Gauge, LayoutGrid, Bot, Rss, Sliders, Download, CheckCircle, AlertTriangle, TrendingUp, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const MotionCard = motion.create(Card);

export default function Analytics() {
  const highIntentCustomers = mockCustomers.filter((c: any) => c.intents[0].score > 80);
  const averageIntentScore = Math.round(
    highIntentCustomers.reduce((acc: any, c: any) => acc + c.intents[0].score, 0) / highIntentCustomers.length
  );

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-[32px] font-bold tracking-tight text-on-surface leading-none">Intent Engine Analytics</h1>
          <p className="text-[14px] text-on-surface-variant font-medium mt-2">Real-time propensity modeling and behavior signaling for your SME cohort.</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Button variant="outline" className="gap-2 glass">
            <Download className="w-4 h-4" /> Export
          </Button>
          <Button variant="ai" className="gap-2">
            <Sliders className="w-4 h-4" /> Adjust Model
          </Button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="md:col-span-8 flex flex-col gap-6">

          {/* Top row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Market Readiness Index */}
            <MotionCard 
              glass
              interactive
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-1">
                  <Gauge className="w-5 h-5 text-primary" />
                  <h3 className="text-[15px] font-bold text-on-surface">Market Readiness Index</h3>
                </div>
                <p className="text-[12px] text-on-surface-variant mb-6 font-medium">Cohort: Retail / Wholesale Shop</p>

                <div className="flex items-end gap-8">
                  {/* Vertical Bar Gauge */}
                  <div className="flex gap-4 items-center">
                    <div className="flex flex-col items-center gap-2">
                      <p className="text-[32px] font-bold leading-none tracking-tight text-accent tabular-nums">
                        {averageIntentScore}%
                      </p>
                      <div className="w-8 h-24 bg-surface-variant rounded-full overflow-hidden flex flex-col-reverse shadow-inner border border-outline/30">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${averageIntentScore}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="w-full bg-accent rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Momentum</p>
                      <p className="text-[15px] font-bold text-primary flex items-center gap-1.5 bg-primary/10 w-fit px-2.5 py-1 rounded-md border border-primary/20">
                        <TrendingUp className="w-4 h-4" /> +12% MoM
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Primary Driver</p>
                      <p className="text-[14px] font-bold text-on-surface">Festive Inventory Buildup</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-outline/30">
                  <Badge variant="ai" className="px-3 py-1 text-[11px]">High Intent</Badge>
                </div>
              </CardContent>
            </MotionCard>

            {/* Next Best Product Matrix */}
            <MotionCard 
              glass
              interactive
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-5">
                  <LayoutGrid className="w-5 h-5 text-secondary" />
                  <h3 className="text-[15px] font-bold text-on-surface">Next Best Product Matrix</h3>
                </div>
                <div className="flex flex-col gap-4">
                  {/* Rank 1 */}
                  <div className="p-4 rounded-xl border border-outline/50 hover:border-accent/40 hover:bg-surface-variant/30 transition-all cursor-pointer group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-accent/10 text-accent flex items-center justify-center text-[12px] font-bold border border-accent/20">#1</div>
                        <span className="text-[15px] font-bold text-on-surface">Home Loan (LAP)</span>
                      </div>
                      <span className="text-[15px] font-bold text-accent tabular-nums">89%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-surface-variant overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: '89%' }} transition={{ duration: 1 }} className="h-full bg-accent rounded-full shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                    </div>
                    <p className="text-[12px] text-on-surface-variant mt-2.5 font-medium group-hover:text-accent transition-colors">Trigger: Recent property tax payment query detected.</p>
                  </div>

                  {/* Rank 2 */}
                  <div className="p-4 rounded-xl border border-outline/50 hover:border-primary/40 hover:bg-surface-variant/30 transition-all cursor-pointer group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center text-[12px] font-bold border border-outline/50">#2</div>
                        <span className="text-[15px] font-bold text-on-surface">Health Insurance</span>
                      </div>
                      <span className="text-[15px] font-bold text-primary tabular-nums">64%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-surface-variant overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: '64%' }} transition={{ duration: 1 }} className="h-full bg-primary rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    </div>
                    <p className="text-[12px] text-on-surface-variant mt-2.5 font-medium group-hover:text-primary transition-colors">Trigger: Increase in EPF contributions (staff expansion).</p>
                  </div>
                </div>
              </CardContent>
            </MotionCard>
          </div>

          {/* AI Insights Assistant */}
          <MotionCard 
            glass
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="overflow-hidden"
          >
            {/* Header stripe */}
            <div className="px-6 py-4 border-b border-outline/50 bg-surface/50 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Bot className="w-5 h-5 text-accent" />
                <h3 className="text-[15px] font-bold text-on-surface">AI Insights Assistant</h3>
              </div>
              <Badge variant="ai" className="px-2.5 py-1 gap-1.5 border border-accent/30 shadow-[0_0_10px_rgba(245,158,11,0.1)]">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px]">PROCESSING</span>
              </Badge>
            </div>

            <div className="p-6 flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <p className="text-[15px] text-on-surface leading-relaxed mb-5 font-medium">
                  Based on current multi-dimensional analysis, this merchant cluster shows high readiness for <strong className="text-accent font-bold">Short-Term Working Capital</strong> injection.
                </p>
                <div className="bg-surface-variant/30 rounded-xl p-5 border border-outline/50 flex flex-col gap-4">
                  <div className="flex items-start gap-3 text-[13px]">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-on-surface leading-relaxed"><strong className="font-bold text-on-surface">Conversion Probability:</strong> Est. 72–78% if pitched within next 72 hours.</span>
                  </div>
                  <div className="flex items-start gap-3 text-[13px]">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-on-surface leading-relaxed"><strong className="font-bold text-on-surface">Recommended Channel:</strong> In-app notification followed by direct RM call.</span>
                  </div>
                  <div className="flex items-start gap-3 text-[13px]">
                    <AlertTriangle className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" />
                    <span className="text-on-surface leading-relaxed"><strong className="font-bold text-on-surface">Risk Caveat:</strong> Slight dip in UPI velocity in past 3 days; verify holiday impact.</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 flex flex-col gap-3 justify-center">
                <Button variant="ai" className="w-full h-11">
                  Generate Campaign
                </Button>
                <Button variant="outline" className="w-full h-11">
                  View Raw Signals
                </Button>
              </div>
            </div>
          </MotionCard>
        </div>

        {/* Right Column: Behavior Signals */}
        <MotionCard 
          glass
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-4 flex flex-col h-full overflow-hidden"
        >
          <div className="px-6 py-5 border-b border-outline/50 flex items-center justify-between bg-surface/50">
            <div className="flex items-center gap-2">
              <Rss className="w-5 h-5 text-on-surface-variant" />
              <h3 className="text-[15px] font-bold text-on-surface">Behavior Signals</h3>
            </div>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            </span>
          </div>

          <div className="flex-1 p-6 overflow-y-auto custom-scrollbar flex flex-col gap-6">
            <div className="relative pl-6 border-l-2 border-tertiary">
              <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-tertiary shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1.5">Just Now · GSTN API</p>
              <p className="text-[13px] font-semibold text-on-surface">GSTR-3B filed early for current month.</p>
              <p className="text-[12px] font-bold text-tertiary mt-1.5">+5 Compliance Score</p>
            </div>

            <div className="relative pl-6 border-l-2 border-accent">
              <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1.5">2 hrs ago · Web Portal</p>
              <p className="text-[13px] font-semibold text-on-surface">Searched for "Machinery Upgrade Loan rates".</p>
              <div className="mt-2 bg-accent/10 border border-accent/20 rounded-lg p-2 text-[12px] font-mono text-accent font-bold">
                Intent Confidence: 0.92
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-destructive">
              <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-destructive shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1.5">5 hrs ago · Bureau Alert</p>
              <p className="text-[13px] font-semibold text-on-surface">Hard inquiry by HDFC Bank detected.</p>
              <p className="text-[12px] font-bold text-destructive mt-1.5">Flight Risk elevated</p>
            </div>

            <div className="relative pl-6 border-l-2 border-outline/50">
              <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-outline shadow-sm" />
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1.5">1 day ago · POS Data</p>
              <p className="text-[13px] text-on-surface-variant font-medium">Weekend transaction volume stable at ₹4.2L avg.</p>
            </div>

            <div className="relative pl-6 border-l-2 border-primary">
              <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1.5">2 days ago · Account Aggregator</p>
              <p className="text-[13px] font-semibold text-on-surface">Consistent ₹1.8L monthly savings over 6 months detected across linked accounts.</p>
              <p className="text-[12px] font-bold text-primary mt-1.5">Repayment capacity verified</p>
            </div>

            <div className="relative pl-6 border-l-2 border-accent">
              <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1.5">3 days ago · Browsing Behavior</p>
              <p className="text-[13px] font-semibold text-on-surface">User accessed Home Loan EMI Calculator 4 times.</p>
              <div className="mt-2 bg-accent/10 border border-accent/20 rounded-lg p-2 text-[12px] font-mono text-accent font-bold">
                Intent Confidence: 0.88
              </div>
            </div>
          </div>

          <div className="px-6 py-4 border-t border-outline/50 text-center hover:bg-surface-variant/50 transition-colors cursor-pointer">
            <span className="text-[12px] font-bold text-accent flex items-center justify-center gap-1.5">
              View All Signals (248) <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </MotionCard>
      </div>
    </div>
  );
}
