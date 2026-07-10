import { mockCustomers } from '../services/data';
import { Filter, Download, TrendingUp, TrendingDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { motion } from 'framer-motion';

export default function Pipeline() {
  const pipelineCustomers = mockCustomers.filter((c: any) => c.pipelineStage !== 'Closed Won');

  const stages = [
    { name: 'High Intent', count: pipelineCustomers.filter((c: any) => c.pipelineStage === 'High Intent').length, variant: 'ai' },
    { name: 'Contacted', count: pipelineCustomers.filter((c: any) => c.pipelineStage === 'Contacted').length, variant: 'warning' },
    { name: 'In Negotiation', count: pipelineCustomers.filter((c: any) => c.pipelineStage === 'In Negotiation').length, variant: 'success' },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-[32px] font-bold tracking-tight text-on-surface leading-none">Lead Intelligence</h1>
          <p className="text-[14px] text-on-surface-variant font-medium mt-2">AI-ranked opportunity pipeline for your assigned portfolio.</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Button variant="outline" className="gap-2 glass">
            <Filter className="w-4 h-4" /> Filter
          </Button>
          <Button variant="ai" className="gap-2">
            <Download className="w-4 h-4" /> Export
          </Button>
        </div>
      </div>

      {/* Stage Summary */}
      <div className="flex flex-wrap gap-4">
        {stages.map((s, i) => (
          <motion.div 
            key={s.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Badge variant={s.variant as any} className="text-[13px] px-3 py-1.5 gap-2 uppercase tracking-widest font-bold">
              {s.name}: {s.count}
            </Badge>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Badge variant="outline" className="text-[13px] px-3 py-1.5 gap-2 uppercase tracking-widest font-bold bg-surface/50">
            Total: {pipelineCustomers.length} leads
          </Badge>
        </motion.div>
      </div>

      {/* Enterprise Table */}
      <Card glass className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline/50 bg-surface/50">
                <th className="px-6 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest w-[30%]">Customer</th>
                <th className="px-6 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Stage</th>
                <th className="px-6 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Intent Score</th>
                <th className="px-6 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Est. Value</th>
                <th className="px-6 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline/30">
              {pipelineCustomers.map((customer: any, index: number) => {
                const topIntent = customer.intents[0];
                const isHigh = customer.pipelineStage === 'High Intent';
                const trend = Math.random() > 0.4;
                const stageVariant = isHigh ? 'ai' : customer.pipelineStage === 'Contacted' ? 'warning' : 'success';

                return (
                  <motion.tr 
                    key={customer.id} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + (index * 0.05) }}
                    className="hover:bg-surface-variant/30 transition-colors group cursor-pointer"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-surface-variant to-surface text-on-surface flex items-center justify-center text-[13px] font-bold border border-outline/50 flex-shrink-0 shadow-sm">
                          {customer.name.split(' ').map((n: any) => n[0]).join('')}
                        </div>
                        <div>
                          <Link to={`/customer/${customer.id}`} className="text-[14px] font-bold text-on-surface hover:text-accent transition-colors">
                            {customer.name}
                          </Link>
                          <p className="text-[12px] text-on-surface-variant font-medium mt-0.5">{customer.occupation}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={stageVariant as any} className="text-[11px] px-2 py-0.5 uppercase tracking-widest">
                        {customer.pipelineStage}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-20 h-2 bg-surface-variant rounded-full overflow-hidden shadow-inner">
                          <div
                            className={cn('h-full rounded-full transition-all duration-1000', isHigh ? 'bg-accent shadow-[0_0_8px_rgba(245,158,11,0.5)]' : 'bg-primary shadow-[0_0_8px_rgba(16,185,129,0.5)]')}
                            style={{ width: `${topIntent.score}%` }}
                          />
                        </div>
                        <span className="text-[14px] font-bold text-on-surface tabular-nums">{topIntent.score}%</span>
                        {trend
                          ? <TrendingUp className="w-4 h-4 text-primary" />
                          : <TrendingDown className="w-4 h-4 text-destructive" />
                        }
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[14px] font-bold text-on-surface tabular-nums">
                        ₹{((customer.recommendedProduct.estimatedValue || 0) / 100000).toFixed(1)}L
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm" asChild className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link to={`/customer/${customer.id}`}>
                          View Profile <ArrowUpRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
