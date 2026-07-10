import { Activity, Server, Database, Cloud, CheckCircle, RefreshCw, Clock } from 'lucide-react';
import { cn } from '../lib/utils';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { motion } from 'framer-motion';

const MotionCard = motion.create(Card);

const services = [
  { name: 'Core Banking API', status: 'Operational', latency: '45ms', uptime: '99.99%', icon: Server },
  { name: 'Firebase Database', status: 'Operational', latency: '12ms', uptime: '100%', icon: Database },
  { name: 'Intent Scoring Engine', status: 'Degraded', latency: '850ms', uptime: '98.5%', icon: Activity },
  { name: 'Cloud Functions', status: 'Operational', latency: '120ms', uptime: '99.9%', icon: Cloud },
];

export default function Health() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-[32px] font-bold tracking-tight text-on-surface leading-none">System Health</h1>
          <p className="text-[14px] text-on-surface-variant font-medium mt-2">Real-time monitoring of platform services and APIs.</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Button variant="outline" className="gap-2 glass">
            <RefreshCw className="w-4 h-4" /> Refresh Status
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MotionCard 
          glass
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="col-span-1 md:col-span-2"
        >
           <CardContent className="p-6">
             <div className="flex items-center justify-between mb-8">
               <h2 className="text-[16px] font-bold text-on-surface">Service Status</h2>
               <Badge variant="success" className="gap-2 px-3 py-1.5 uppercase tracking-widest text-[10px]">
                 <CheckCircle className="w-3.5 h-3.5" /> ALL SYSTEMS OPERATIONAL
               </Badge>
             </div>
  
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {services.map((service, index) => (
                  <motion.div 
                    key={service.name} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="p-5 rounded-xl border border-outline/50 hover:border-outline hover:bg-surface-variant/30 transition-all flex flex-col gap-4 group cursor-default"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-surface-variant text-on-surface-variant group-hover:text-on-surface transition-colors">
                          <service.icon className="w-4 h-4" />
                        </div>
                        <span className="text-[14px] font-bold text-on-surface">{service.name}</span>
                      </div>
                      <span className={cn(
                        'w-2.5 h-2.5 rounded-full shadow-sm',
                        service.status === 'Operational' ? 'bg-primary shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-accent shadow-[0_0_8px_rgba(245,158,11,0.5)]'
                      )} />
                    </div>
                    <div className="flex items-center justify-between mt-1 pt-4 border-t border-outline/30">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Latency</span>
                        <span className="text-[14px] font-bold text-on-surface tabular-nums">{service.latency}</span>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Uptime (30d)</span>
                        <span className="text-[14px] font-bold text-on-surface tabular-nums">{service.uptime}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
             </div>
           </CardContent>
        </MotionCard>

        <MotionCard 
          glass
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col h-full"
        >
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex items-center gap-2.5 mb-8">
              <Activity className="w-5 h-5 text-primary" />
              <h2 className="text-[16px] font-bold text-on-surface">Global Metrics</h2>
            </div>
            
            <div className="flex-1 flex flex-col gap-8">
              <div>
                <p className="text-[11px] text-on-surface-variant font-bold uppercase tracking-widest mb-2.5">API Requests (24h)</p>
                <p className="text-[36px] font-bold text-on-surface tabular-nums leading-none mb-2">1.24M</p>
                <p className="text-[13px] text-primary font-bold">+14% vs yesterday</p>
              </div>
              
              <div>
                <p className="text-[11px] text-on-surface-variant font-bold uppercase tracking-widest mb-2.5">Avg Processing Time</p>
                <p className="text-[36px] font-bold text-on-surface tabular-nums leading-none mb-2">240ms</p>
                <p className="text-[13px] text-warning font-bold">+15ms vs yesterday</p>
              </div>
  
              <div className="mt-auto pt-5 border-t border-outline/30">
                 <p className="text-[12px] text-on-surface-variant font-medium flex items-center gap-2">
                   <Clock className="w-4 h-4" /> Last updated: Just now
                 </p>
              </div>
            </div>
          </CardContent>
        </MotionCard>
      </div>
    </div>
  );
}
