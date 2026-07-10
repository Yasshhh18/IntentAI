import { Megaphone, Target, Clock, Filter, Plus, ArrowUpRight, Zap } from 'lucide-react';
import { cn } from '../lib/utils';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { motion } from 'framer-motion';

const MotionCard = motion.create(Card);

const campaigns = [
  { id: '1', name: 'Festive MSME Working Capital', target: 'Retail / Wholesale', audienceSize: 450, expectedConversion: '18%', progress: 65, status: 'Active' },
  { id: '2', name: 'High-Intent Home Loan Outreach', target: 'Verified Salary Accounts', audienceSize: 120, expectedConversion: '32%', progress: 0, status: 'Draft' },
  { id: '3', name: 'Wealth Management Upsell', target: 'High Net Worth', audienceSize: 85, expectedConversion: '12%', progress: 82, status: 'Active' },
  { id: '4', name: 'Equipment Financing Q3', target: 'Manufacturing SME', audienceSize: 210, expectedConversion: '15%', progress: 100, status: 'Completed' },
];

const statusConfig: Record<string, { variant: 'ai' | 'outline' | 'success', label: string }> = {
  Active: { variant: 'ai', label: 'ACTIVE' },
  Draft: { variant: 'outline', label: 'DRAFT' },
  Completed: { variant: 'success', label: 'COMPLETED' },
};

export default function Campaign() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-[32px] font-bold tracking-tight text-on-surface leading-none">Campaign Manager</h1>
          <p className="text-[14px] text-on-surface-variant font-medium mt-2">Design and deploy AI-targeted outreach campaigns.</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Button variant="outline" className="gap-2 glass">
            <Filter className="w-4 h-4" /> Filter
          </Button>
          <Button variant="ai" className="gap-2">
            <Plus className="w-4 h-4" /> New Campaign
          </Button>
        </div>
      </div>

      {/* Summary Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {[
          { label: 'Total Campaigns', value: '4', icon: Megaphone, color: 'text-on-surface-variant', delay: 0.1 },
          { label: 'Active', value: '2', icon: Zap, color: 'text-primary', delay: 0.2 },
          { label: 'Total Reach', value: '865', icon: Target, color: 'text-accent', delay: 0.3 },
          { label: 'Avg. Conv. Rate', value: '19.3%', icon: Clock, color: 'text-tertiary', delay: 0.4 },
        ].map(stat => (
          <MotionCard 
            key={stat.label} 
            glass 
            interactive
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: stat.delay }}
          >
            <CardContent className="p-5">
              <div className="flex items-center gap-2.5 mb-3">
                <stat.icon className={cn('w-4 h-4', stat.color)} />
                <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</span>
              </div>
              <p className="text-[28px] font-bold text-on-surface tracking-tight tabular-nums leading-none">{stat.value}</p>
            </CardContent>
          </MotionCard>
        ))}
      </div>

      {/* Campaign Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {campaigns.map((campaign, index) => {
          const sc = statusConfig[campaign.status];
          return (
            <MotionCard 
              key={campaign.id} 
              glass 
              interactive
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + (index * 0.1) }}
              className="flex flex-col group cursor-pointer"
            >
              <CardContent className="p-6 flex flex-col gap-5">
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shadow-sm">
                    <Megaphone className="w-5 h-5 text-accent" />
                  </div>
                  <Badge variant={sc.variant as any} className="gap-1.5 px-2.5 py-1 text-[10px]">
                    {campaign.status === 'Active' && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
                    {sc.label}
                  </Badge>
                </div>

                {/* Name */}
                <div>
                  <h3 className="text-[16px] font-bold text-on-surface leading-tight group-hover:text-accent transition-colors">{campaign.name}</h3>
                  <p className="text-[13px] text-on-surface-variant font-medium mt-1.5">{campaign.target}</p>
                </div>

                {/* Progress */}
                {campaign.status !== 'Draft' && (
                  <div>
                    <div className="flex justify-between text-[12px] mb-2 font-medium">
                      <span className="text-on-surface-variant">Campaign Progress</span>
                      <span className="font-bold text-on-surface">{campaign.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-surface-variant overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${campaign.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={cn('h-full rounded-full', campaign.status === 'Completed' ? 'bg-primary shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-accent shadow-[0_0_8px_rgba(245,158,11,0.5)]')}
                      />
                    </div>
                  </div>
                )}

                {/* Stats */}
                <div className="flex gap-5 pt-4 border-t border-outline/30 mt-auto">
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1.5">
                      <Target className="w-3.5 h-3.5" /> Audience
                    </div>
                    <p className="text-[20px] font-bold text-on-surface tabular-nums leading-none">{campaign.audienceSize}</p>
                  </div>
                  <div className="w-px bg-outline/30" />
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1.5">
                      <Clock className="w-3.5 h-3.5" /> Est. Conv.
                    </div>
                    <p className="text-[20px] font-bold text-on-surface leading-none">{campaign.expectedConversion}</p>
                  </div>
                  <div className="flex items-end">
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity h-8 px-3">
                      Details <ArrowUpRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </MotionCard>
          );
        })}
      </div>
    </div>
  );
}
