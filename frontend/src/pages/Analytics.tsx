import { mockCustomers } from '../services/data';
import { Gauge, LayoutGrid, Bot, Rss, Sliders, Download, CheckCircle, AlertTriangle, TrendingUp, ArrowUpRight } from 'lucide-react';

export default function Analytics() {
  const highIntentCustomers = mockCustomers.filter((c: any) => c.intents[0].score > 80);
  const averageIntentScore = Math.round(
    highIntentCustomers.reduce((acc: any, c: any) => acc + c.intents[0].score, 0) / highIntentCustomers.length
  );

  return (
    <div className="flex flex-col gap-8 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-[28px] font-semibold tracking-tight text-on-surface">Intent Engine Analytics</h1>
          <p className="text-[14px] text-on-surface-variant mt-1">Real-time propensity modeling and behavior signaling for your SME cohort.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-on-surface bg-surface border border-outline-variant rounded-xl hover:bg-surface-container transition-all shadow-card">
            <Download className="w-3.5 h-3.5" /> Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-white bg-accent rounded-xl hover:bg-accent/90 transition-all shadow-sm">
            <Sliders className="w-3.5 h-3.5" /> Adjust Model
          </button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Left Column */}
        <div className="md:col-span-8 flex flex-col gap-5">

          {/* Top row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Market Readiness Index */}
            <div className="bg-surface border border-outline-variant rounded-2xl p-6 shadow-card hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-200">
              <div className="flex items-center gap-2 mb-1">
                <Gauge className="w-4 h-4 text-primary" />
                <h3 className="text-[14px] font-semibold text-on-surface">Market Readiness Index</h3>
              </div>
              <p className="text-[12px] text-on-surface-variant mb-5">Cohort: Retail / Wholesale Shop</p>

              <div className="flex items-end gap-6">
                {/* Vertical Bar Gauge */}
                <div className="flex gap-4 items-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <p className="text-[28px] font-bold leading-none tracking-tight text-accent">
                      {averageIntentScore}%
                    </p>
                    <div className="w-6 h-16 bg-surface-container rounded-full overflow-hidden flex flex-col-reverse">
                      <div
                        className="w-full bg-accent rounded-full transition-all duration-1000"
                        style={{ height: `${averageIntentScore}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.08em]">Momentum</p>
                    <p className="text-[14px] font-semibold text-primary flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" /> +12% MoM
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.08em]">Primary Driver</p>
                    <p className="text-[13px] font-medium text-on-surface">Festive Inventory Buildup</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-outline-variant">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-accent/10 text-accent border border-accent/20 uppercase tracking-[0.06em]">High Intent</span>
              </div>
            </div>

            {/* Next Best Product Matrix */}
            <div className="bg-surface border border-outline-variant rounded-2xl p-6 shadow-card hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-200">
              <div className="flex items-center gap-2 mb-4">
                <LayoutGrid className="w-4 h-4 text-secondary" />
                <h3 className="text-[14px] font-semibold text-on-surface">Next Best Product Matrix</h3>
              </div>
              <div className="flex flex-col gap-3">
                {/* Rank 1 */}
                <div className="p-4 rounded-xl border border-outline-variant hover:border-accent/40 hover:bg-surface-container transition-all cursor-pointer group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-[11px] font-bold border border-accent/20">#1</div>
                      <span className="text-[14px] font-semibold text-on-surface">Home Loan (LAP)</span>
                    </div>
                    <span className="text-[13px] font-bold text-accent">89%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-surface-container overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '89%' }} />
                  </div>
                  <p className="text-[12px] text-on-surface-variant mt-2 group-hover:text-accent transition-colors">Trigger: Recent property tax payment query detected.</p>
                </div>

                {/* Rank 2 */}
                <div className="p-4 rounded-xl border border-outline-variant hover:border-primary/40 hover:bg-surface-container transition-all cursor-pointer group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center text-[11px] font-bold border border-outline-variant">#2</div>
                      <span className="text-[14px] font-semibold text-on-surface">Health Insurance</span>
                    </div>
                    <span className="text-[13px] font-bold text-primary">64%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-surface-container overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '64%' }} />
                  </div>
                  <p className="text-[12px] text-on-surface-variant mt-2 group-hover:text-primary transition-colors">Trigger: Increase in EPF contributions (staff expansion).</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Insights Assistant */}
          <div className="bg-surface border border-outline-variant rounded-2xl shadow-card overflow-hidden">
            {/* Header stripe */}
            <div className="px-6 py-4 border-b border-outline-variant bg-surface-container flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-accent" />
                <h3 className="text-[14px] font-semibold text-on-surface">AI Insights Assistant</h3>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.08em]">Processing</span>
              </div>
            </div>

            <div className="p-6 flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <p className="text-[14px] text-on-surface leading-relaxed mb-4">
                  Based on current multi-dimensional analysis, this merchant cluster shows high readiness for <strong className="text-accent font-semibold">Short-Term Working Capital</strong> injection.
                </p>
                <div className="bg-surface-container rounded-xl p-4 border border-outline-variant flex flex-col gap-3">
                  <div className="flex items-start gap-2.5 text-[13px]">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-on-surface"><strong className="font-semibold text-on-surface">Conversion Probability:</strong> Est. 72–78% if pitched within next 72 hours.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[13px]">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-on-surface"><strong className="font-semibold text-on-surface">Recommended Channel:</strong> In-app notification followed by direct RM call.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[13px]">
                    <AlertTriangle className="w-4 h-4 text-tertiary flex-shrink-0 mt-0.5" />
                    <span className="text-on-surface"><strong className="font-semibold text-on-surface">Risk Caveat:</strong> Slight dip in UPI velocity in past 3 days; verify holiday impact.</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 flex flex-col gap-2">
                <button className="w-full py-2.5 bg-accent text-white rounded-xl text-[13px] font-semibold hover:bg-accent/90 transition-all shadow-sm">
                  Generate Campaign
                </button>
                <button className="w-full py-2.5 bg-surface border border-outline-variant text-on-surface-variant rounded-xl text-[13px] font-medium hover:bg-surface-container transition-all">
                  View Raw Signals
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Behavior Signals */}
        <div className="md:col-span-4">
          <div className="bg-surface border border-outline-variant rounded-2xl shadow-card flex flex-col h-full overflow-hidden">
            <div className="px-5 py-4 border-b border-outline-variant flex items-center justify-between bg-surface-container">
              <div className="flex items-center gap-2">
                <Rss className="w-4 h-4 text-on-surface-variant" />
                <h3 className="text-[14px] font-semibold text-on-surface">Behavior Signals</h3>
              </div>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
            </div>

            <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-5">
              <div className="relative pl-5 border-l-2 border-tertiary">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-tertiary" />
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.08em] mb-1">Just Now · GSTN API</p>
                <p className="text-[13px] font-medium text-on-surface">GSTR-3B filed early for current month.</p>
                <p className="text-[12px] font-bold text-tertiary mt-1">+5 Compliance Score</p>
              </div>

              <div className="relative pl-5 border-l-2 border-accent">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-accent" />
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.08em] mb-1">2 hrs ago · Web Portal</p>
                <p className="text-[13px] font-medium text-on-surface">Searched for "Machinery Upgrade Loan rates".</p>
                <div className="mt-2 bg-accent/5 border border-accent/15 rounded-lg p-2 text-[12px] font-mono text-accent font-semibold">
                  Intent Confidence: 0.92
                </div>
              </div>

              <div className="relative pl-5 border-l-2 border-error">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-error" />
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.08em] mb-1">5 hrs ago · Bureau Alert</p>
                <p className="text-[13px] font-medium text-on-surface">Hard inquiry by HDFC Bank detected.</p>
                <p className="text-[12px] font-bold text-error mt-1">Flight Risk elevated</p>
              </div>

              <div className="relative pl-5 border-l-2 border-outline-variant">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-outline" />
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.08em] mb-1">1 day ago · POS Data</p>
                <p className="text-[13px] text-on-surface-variant">Weekend transaction volume stable at ₹4.2L avg.</p>
              </div>

              <div className="relative pl-5 border-l-2 border-primary">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.08em] mb-1">2 days ago · Account Aggregator</p>
                <p className="text-[13px] font-medium text-on-surface">Consistent ₹1.8L monthly savings over 6 months detected across linked accounts.</p>
                <p className="text-[12px] font-bold text-primary mt-1">Repayment capacity verified</p>
              </div>

              <div className="relative pl-5 border-l-2 border-accent">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-accent" />
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.08em] mb-1">3 days ago · Browsing Behavior</p>
                <p className="text-[13px] font-medium text-on-surface">User accessed Home Loan EMI Calculator 4 times.</p>
                <div className="mt-2 bg-accent/5 border border-accent/15 rounded-lg p-2 text-[12px] font-mono text-accent font-semibold">
                  Intent Confidence: 0.88
                </div>
              </div>
            </div>

            <div className="px-5 py-3 border-t border-outline-variant text-center hover:bg-surface-container transition-colors cursor-pointer">
              <span className="text-[12px] font-semibold text-accent flex items-center justify-center gap-1">
                View All Signals (248) <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
