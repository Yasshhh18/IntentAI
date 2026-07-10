import { Activity, Server, Database, Cloud, CheckCircle, RefreshCw, Clock } from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  { name: 'Core Banking API', status: 'Operational', latency: '45ms', uptime: '99.99%', icon: Server },
  { name: 'Firebase Database', status: 'Operational', latency: '12ms', uptime: '100%', icon: Database },
  { name: 'Intent Scoring Engine', status: 'Degraded', latency: '850ms', uptime: '98.5%', icon: Activity },
  { name: 'Cloud Functions', status: 'Operational', latency: '120ms', uptime: '99.9%', icon: Cloud },
];

export default function Health() {
  return (
    <div className="flex flex-col gap-8 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-[28px] font-semibold tracking-tight text-on-surface">System Health</h1>
          <p className="text-[14px] text-on-surface-variant mt-1">Real-time monitoring of platform services and APIs.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-on-surface bg-surface border border-outline-variant rounded-xl hover:bg-surface-container transition-all shadow-card">
            <RefreshCw className="w-3.5 h-3.5" /> Refresh Status
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-surface border border-outline-variant rounded-2xl p-6 shadow-card col-span-1 md:col-span-2">
           <div className="flex items-center justify-between mb-6">
             <h2 className="text-[16px] font-semibold text-on-surface">Service Status</h2>
             <span className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-[11px] font-bold">
               <CheckCircle className="w-3 h-3" /> All Systems Operational
             </span>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map(service => (
                <div key={service.name} className="p-4 rounded-xl border border-outline-variant flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <service.icon className="w-4 h-4 text-on-surface-variant" />
                      <span className="text-[14px] font-medium text-on-surface">{service.name}</span>
                    </div>
                    <span className={cn(
                      'w-2 h-2 rounded-full',
                      service.status === 'Operational' ? 'bg-primary shadow-[0_0_8px_rgba(15,106,74,0.4)]' : 'bg-accent shadow-[0_0_8px_rgba(242,140,40,0.4)]'
                    )} />
                  </div>
                  <div className="flex items-center justify-between mt-1 pt-3 border-t border-outline-variant">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mb-0.5">Latency</span>
                      <span className="text-[13px] font-semibold text-on-surface tabular-nums">{service.latency}</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mb-0.5">Uptime (30d)</span>
                      <span className="text-[13px] font-semibold text-on-surface tabular-nums">{service.uptime}</span>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-surface border border-outline-variant rounded-2xl p-6 shadow-card flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <Activity className="w-5 h-5 text-primary" />
            <h2 className="text-[16px] font-semibold text-on-surface">Global Metrics</h2>
          </div>
          
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <p className="text-[12px] text-on-surface-variant font-bold uppercase tracking-wider mb-2">API Requests (24h)</p>
              <p className="text-[28px] font-semibold text-on-surface tabular-nums leading-none mb-1">1.24M</p>
              <p className="text-[12px] text-emerald-600 font-medium">+14% vs yesterday</p>
            </div>
            
            <div>
              <p className="text-[12px] text-on-surface-variant font-bold uppercase tracking-wider mb-2">Avg Processing Time</p>
              <p className="text-[28px] font-semibold text-on-surface tabular-nums leading-none mb-1">240ms</p>
              <p className="text-[12px] text-accent font-medium">+15ms vs yesterday</p>
            </div>

            <div className="mt-auto pt-4 border-t border-outline-variant">
               <p className="text-[11px] text-on-surface-variant flex items-center gap-1.5">
                 <Clock className="w-3.5 h-3.5" /> Last updated: Just now
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
