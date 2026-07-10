import { Shield, AlertTriangle, Lock, FileText, ToggleLeft, ToggleRight, CheckCircle, Search } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { motion } from 'framer-motion';

const MotionCard = motion.create(Card);

const policies = [
  { id: 1, name: 'Automated Loan Approval', description: 'Auto-approve loans under ₹5L with score > 85%', active: true, risk: 'Medium' },
  { id: 2, name: 'High-Risk Geo Block', description: 'Flag all applications from tier-4 unregistered zones', active: true, risk: 'High' },
  { id: 3, name: 'Behavioral Anomaly Halt', description: 'Pause processing on 300% volume spike', active: false, risk: 'Low' },
  { id: 4, name: 'Credit Bureau Sync', description: 'Require CIBIL sync for all working capital requests', active: true, risk: 'High' },
];

export default function Settings() {
  const [activePolicies, setActivePolicies] = useState<number[]>([1, 2, 4]);

  const togglePolicy = (id: number) => {
    setActivePolicies(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-[32px] font-bold tracking-tight text-on-surface leading-none">Risk Controls</h1>
          <p className="text-[14px] text-on-surface-variant font-medium mt-2">Manage global risk thresholds and automated policies.</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Button variant="outline" className="gap-2 glass">
            <FileText className="w-4 h-4" /> Export Audit Log
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column - Active Threats & Status */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <MotionCard 
            glass
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shadow-sm">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-[16px] font-bold text-on-surface">System Posture</h2>
                  <p className="text-[13px] text-on-surface-variant font-medium mt-0.5">Global Risk Level</p>
                </div>
              </div>
              
              <div className="flex items-end justify-between mb-3">
                <span className="text-[36px] font-bold text-on-surface tracking-tight leading-none">Normal</span>
                <Badge variant="success" className="gap-1.5 px-2.5 py-1 text-[11px] uppercase tracking-widest mb-1.5">
                  <CheckCircle className="w-3.5 h-3.5" /> SECURE
                </Badge>
              </div>
              <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden shadow-inner">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '25%' }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full bg-primary rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" 
                />
              </div>
              <p className="text-[12px] text-on-surface-variant mt-4 font-medium leading-relaxed">
                All automated compliance checks are operational. 0 critical vulnerabilities detected.
              </p>
            </CardContent>
          </MotionCard>

          <MotionCard 
            glass
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <CardContent className="p-6">
              <h3 className="text-[15px] font-bold text-on-surface flex items-center gap-2 mb-5">
                <AlertTriangle className="w-4 h-4 text-accent" />
                Recent Alerts
              </h3>
              <div className="flex flex-col gap-5">
                {[
                  { time: '10 mins ago', msg: 'Multiple failed logins from IP 192.168.1.50', level: 'Medium' },
                  { time: '1 hour ago', msg: 'Anomaly detected in transaction velocity for Merchant #402', level: 'High' },
                  { time: '2 hours ago', msg: 'Automated loan approval paused due to missing KYC', level: 'Low' },
                ].map((alert, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1.5 relative flex items-center justify-center">
                      <div className={cn(
                        'w-3 h-3 rounded-full absolute shadow-sm',
                        alert.level === 'High' ? 'bg-destructive shadow-[0_0_8px_rgba(239,68,68,0.5)]' : 
                        alert.level === 'Medium' ? 'bg-accent shadow-[0_0_8px_rgba(245,158,11,0.5)]' : 
                        'bg-outline shadow-sm'
                      )} />
                      {i !== 2 && <div className="w-[1px] h-full bg-outline/50 absolute top-4" />}
                    </div>
                    <div>
                      <p className="text-[13px] text-on-surface font-semibold leading-relaxed">{alert.msg}</p>
                      <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mt-1">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </MotionCard>
        </div>

        {/* Right Column - Policy Management */}
        <div className="md:col-span-8">
          <MotionCard 
            glass
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="h-full flex flex-col"
          >
            <div className="px-6 py-5 border-b border-outline/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface/50">
              <div className="flex items-center gap-2.5">
                <Lock className="w-5 h-5 text-on-surface-variant" />
                <h3 className="text-[16px] font-bold text-on-surface">Automated Policies</h3>
              </div>
              <div className="relative">
                <Search className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search policies..." 
                  className="pl-10 pr-4 py-2 text-[13px] bg-surface-variant/50 border border-outline/50 rounded-xl w-full sm:w-72 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent font-medium placeholder:text-on-surface-variant/70 transition-all shadow-inner"
                />
              </div>
            </div>

            <div className="flex-1 p-6 flex flex-col gap-4">
              {policies.map((policy, index) => {
                const isActive = activePolicies.includes(policy.id);
                return (
                  <motion.div 
                    key={policy.id} 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="flex items-start sm:items-center justify-between gap-4 p-5 rounded-xl border border-outline/50 hover:bg-surface-variant/30 transition-all shadow-sm"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1.5">
                        <h4 className="text-[15px] font-bold text-on-surface">{policy.name}</h4>
                        <Badge 
                          variant={policy.risk === 'High' ? 'destructive' : policy.risk === 'Medium' ? 'warning' : 'outline'}
                          className="px-2 py-0.5 text-[10px] uppercase tracking-widest"
                        >
                          {policy.risk} RISK
                        </Badge>
                      </div>
                      <p className="text-[13px] text-on-surface-variant font-medium leading-relaxed">{policy.description}</p>
                    </div>
                    <button 
                      onClick={() => togglePolicy(policy.id)}
                      className={cn(
                        "transition-colors",
                        isActive ? "text-primary drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "text-outline hover:text-on-surface-variant"
                      )}
                    >
                      {isActive ? <ToggleRight className="w-9 h-9" /> : <ToggleLeft className="w-9 h-9" />}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </MotionCard>
        </div>
      </div>
    </div>
  );
}
