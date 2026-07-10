import { Megaphone, Target, Clock, Filter, Plus, ArrowUpRight, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const campaigns = [
  { id: '1', name: 'Festive MSME Working Capital', target: 'Retail / Wholesale', audienceSize: 450, expectedConversion: '18%', progress: 65, status: 'Active' },
  { id: '2', name: 'High-Intent Home Loan Outreach', target: 'Verified Salary Accounts', audienceSize: 120, expectedConversion: '32%', progress: 0, status: 'Draft' },
  { id: '3', name: 'Wealth Management Upsell', target: 'High Net Worth', audienceSize: 85, expectedConversion: '12%', progress: 82, status: 'Active' },
  { id: '4', name: 'Equipment Financing Q3', target: 'Manufacturing SME', audienceSize: 210, expectedConversion: '15%', progress: 100, status: 'Completed' },
];

const statusConfig: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  Active: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20', dot: 'bg-primary' },
  Draft: { bg: 'bg-surface-container', text: 'text-on-surface-variant', border: 'border-outline-variant', dot: 'bg-outline' },
  Completed: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-500' },
};

export default function Campaign() {
  return (
    <div className="flex flex-col gap-8 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-[28px] font-semibold tracking-tight text-on-surface">Campaign Manager</h1>
          <p className="text-[14px] text-on-surface-variant mt-1">Design and deploy AI-targeted outreach campaigns.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-on-surface bg-surface border border-outline-variant rounded-xl hover:bg-surface-container transition-all shadow-card">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-white bg-accent rounded-xl hover:bg-accent/90 transition-all shadow-sm">
            <Plus className="w-3.5 h-3.5" /> New Campaign
          </button>
        </div>
      </div>

      {/* Summary Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Total Campaigns', value: '4', icon: Megaphone, color: 'text-on-surface-variant' },
          { label: 'Active', value: '2', icon: Zap, color: 'text-primary' },
          { label: 'Total Reach', value: '865', icon: Target, color: 'text-accent' },
          { label: 'Avg. Conv. Rate', value: '19.3%', icon: Clock, color: 'text-tertiary' },
        ].map(stat => (
          <div key={stat.label} className="bg-surface border border-outline-variant rounded-2xl p-4 shadow-card">
            <div className="flex items-center gap-2 mb-2">
              <stat.icon className={cn('w-4 h-4', stat.color)} />
              <span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-[0.06em]">{stat.label}</span>
            </div>
            <p className="text-[24px] font-semibold text-on-surface tracking-tight tabular-nums">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Campaign Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {campaigns.map(campaign => {
          const sc = statusConfig[campaign.status];
          return (
            <div key={campaign.id} className="bg-surface border border-outline-variant rounded-2xl p-6 shadow-card hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-200 flex flex-col gap-4">
              {/* Top */}
              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Megaphone className="w-4 h-4 text-accent" />
                </div>
                <span className={cn('flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border', sc.bg, sc.text, sc.border)}>
                  <span className={cn('w-1.5 h-1.5 rounded-full', sc.dot)} />
                  {campaign.status}
                </span>
              </div>

              {/* Name */}
              <div>
                <h3 className="text-[15px] font-semibold text-on-surface leading-tight">{campaign.name}</h3>
                <p className="text-[12px] text-on-surface-variant mt-1">{campaign.target}</p>
              </div>

              {/* Progress */}
              {campaign.status !== 'Draft' && (
                <div>
                  <div className="flex justify-between text-[11px] mb-1.5">
                    <span className="text-on-surface-variant font-medium">Campaign Progress</span>
                    <span className="font-bold text-on-surface">{campaign.progress}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-surface-container overflow-hidden">
                    <div
                      className={cn('h-full rounded-full transition-all', campaign.status === 'Completed' ? 'bg-primary' : 'bg-accent')}
                      style={{ width: `${campaign.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Stats */}
              <div className="flex gap-4 pt-3 border-t border-outline-variant">
                <div className="flex-1">
                  <div className="flex items-center gap-1 text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.06em] mb-1">
                    <Target className="w-3 h-3" /> Audience
                  </div>
                  <p className="text-[18px] font-semibold text-on-surface tabular-nums">{campaign.audienceSize}</p>
                </div>
                <div className="w-px bg-outline-variant" />
                <div className="flex-1">
                  <div className="flex items-center gap-1 text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.06em] mb-1">
                    <Clock className="w-3 h-3" /> Est. Conv.
                  </div>
                  <p className="text-[18px] font-semibold text-on-surface">{campaign.expectedConversion}</p>
                </div>
                <div className="flex items-end">
                  <button className="flex items-center gap-1 text-[12px] font-semibold text-accent hover:text-accent/80 transition-colors">
                    Details <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
