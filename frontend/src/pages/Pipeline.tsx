import { mockCustomers } from '../services/data';
import { Filter, Download, TrendingUp, TrendingDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Pipeline() {
  const pipelineCustomers = mockCustomers.filter((c: any) => c.pipelineStage !== 'Closed Won');

  const stages = [
    { name: 'High Intent', count: pipelineCustomers.filter((c: any) => c.pipelineStage === 'High Intent').length, color: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/20' },
    { name: 'Contacted', count: pipelineCustomers.filter((c: any) => c.pipelineStage === 'Contacted').length, color: 'text-tertiary', bg: 'bg-tertiary/10', border: 'border-tertiary/20' },
    { name: 'In Negotiation', count: pipelineCustomers.filter((c: any) => c.pipelineStage === 'In Negotiation').length, color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
  ];

  return (
    <div className="flex flex-col gap-8 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-[28px] font-semibold tracking-tight text-on-surface">Lead Intelligence</h1>
          <p className="text-[14px] text-on-surface-variant mt-1">AI-ranked opportunity pipeline for your assigned portfolio.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-on-surface bg-surface border border-outline-variant rounded-xl hover:bg-surface-container transition-all shadow-card">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-white bg-accent rounded-xl hover:bg-accent/90 transition-all shadow-sm">
            <Download className="w-3.5 h-3.5" /> Export
          </button>
        </div>
      </div>

      {/* Stage Summary */}
      <div className="flex flex-wrap gap-3">
        {stages.map(s => (
          <div key={s.name} className={cn('flex items-center gap-2 px-4 py-2 rounded-xl border text-[13px] font-semibold', s.bg, s.border, s.color)}>
            <span className={cn('w-2 h-2 rounded-full', s.bg.replace('/10', '').replace('bg-', 'bg-'))}
              style={{ background: s.name === 'High Intent' ? '#F28C28' : s.name === 'Contacted' ? '#B45309' : '#0F6A4A' }} />
            {s.name}: {s.count}
          </div>
        ))}
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-outline-variant bg-surface-container text-[13px] font-semibold text-on-surface-variant">
          Total: {pipelineCustomers.length} leads
        </div>
      </div>

      {/* Enterprise Table */}
      <div className="bg-surface border border-outline-variant rounded-2xl shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-container">
                <th className="text-left px-5 py-3.5 text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.08em] w-[30%]">Customer</th>
                <th className="text-left px-5 py-3.5 text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.08em]">Stage</th>
                <th className="text-left px-5 py-3.5 text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.08em]">Intent Score</th>
                <th className="text-left px-5 py-3.5 text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.08em]">Est. Value</th>
                <th className="text-right px-5 py-3.5 text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.08em]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {pipelineCustomers.map((customer: any) => {
                const topIntent = customer.intents[0];
                const isHigh = customer.pipelineStage === 'High Intent';
                const trend = Math.random() > 0.4;

                return (
                  <tr key={customer.id} className="hover:bg-surface-container transition-colors group">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface flex items-center justify-center text-[11px] font-bold border border-outline-variant flex-shrink-0">
                          {customer.name.split(' ').map((n: any) => n[0]).join('')}
                        </div>
                        <div>
                          <Link to={`/customer/${customer.id}`} className="text-[13px] font-semibold text-on-surface hover:text-accent transition-colors">
                            {customer.name}
                          </Link>
                          <p className="text-[11px] text-on-surface-variant">{customer.occupation}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className={cn(
                        'px-2.5 py-1 rounded-full text-[10px] font-bold border',
                        isHigh ? 'bg-accent/10 text-accent border-accent/20' :
                        customer.pipelineStage === 'Contacted' ? 'bg-tertiary/10 text-tertiary border-tertiary/20' :
                        'bg-primary/10 text-primary border-primary/20'
                      )}>
                        {customer.pipelineStage}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
                          <div
                            className={cn('h-full rounded-full', isHigh ? 'bg-accent' : 'bg-primary')}
                            style={{ width: `${topIntent.score}%` }}
                          />
                        </div>
                        <span className="text-[13px] font-semibold text-on-surface tabular-nums">{topIntent.score}%</span>
                        {trend
                          ? <TrendingUp className="w-3.5 h-3.5 text-primary" />
                          : <TrendingDown className="w-3.5 h-3.5 text-error" />
                        }
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-[13px] font-semibold text-on-surface tabular-nums">
                        ₹{((customer.recommendedProduct.estimatedValue || 0) / 100000).toFixed(1)}L
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <Link
                        to={`/customer/${customer.id}`}
                        className="inline-flex items-center gap-1 text-[12px] font-semibold text-accent hover:text-accent/80 transition-colors"
                      >
                        View <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
