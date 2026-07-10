import { Shield, AlertTriangle, Lock, FileText, ToggleLeft, ToggleRight, CheckCircle, Search } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState } from 'react';

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
    <div className="flex flex-col gap-8 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-[28px] font-semibold tracking-tight text-on-surface">Risk Controls</h1>
          <p className="text-[14px] text-on-surface-variant mt-1">Manage global risk thresholds and automated policies.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-on-surface bg-surface border border-outline-variant rounded-xl hover:bg-surface-container transition-all shadow-card">
            <FileText className="w-3.5 h-3.5" /> Export Audit Log
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column - Active Threats & Status */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="bg-surface border border-outline-variant rounded-2xl p-6 shadow-card">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-[15px] font-semibold text-on-surface">System Posture</h2>
                <p className="text-[12px] text-on-surface-variant mt-0.5">Global Risk Level</p>
              </div>
            </div>
            
            <div className="flex items-end justify-between mb-2">
              <span className="text-[32px] font-semibold text-on-surface tracking-tight">Normal</span>
              <span className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-[11px] font-bold mb-2">
                <CheckCircle className="w-3 h-3" /> Secure
              </span>
            </div>
            <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full w-1/4" />
            </div>
            <p className="text-[11px] text-on-surface-variant mt-3 leading-relaxed">
              All automated compliance checks are operational. 0 critical vulnerabilities detected.
            </p>
          </div>

          <div className="bg-surface border border-outline-variant rounded-2xl p-5 shadow-card">
            <h3 className="text-[14px] font-semibold text-on-surface flex items-center gap-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-accent" />
              Recent Alerts
            </h3>
            <div className="flex flex-col gap-4">
              {[
                { time: '10 mins ago', msg: 'Multiple failed logins from IP 192.168.1.50', level: 'Medium' },
                { time: '1 hour ago', msg: 'Anomaly detected in transaction velocity for Merchant #402', level: 'High' },
                { time: '2 hours ago', msg: 'Automated loan approval paused due to missing KYC', level: 'Low' },
              ].map((alert, i) => (
                <div key={i} className="flex gap-3">
                  <div className="mt-1 relative flex items-center justify-center">
                    <div className={cn(
                      'w-2 h-2 rounded-full absolute',
                      alert.level === 'High' ? 'bg-error' : alert.level === 'Medium' ? 'bg-accent' : 'bg-outline-variant'
                    )} />
                    {i !== 2 && <div className="w-[1px] h-full bg-outline-variant absolute top-3" />}
                  </div>
                  <div>
                    <p className="text-[13px] text-on-surface leading-tight">{alert.msg}</p>
                    <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Policy Management */}
        <div className="md:col-span-8">
          <div className="bg-surface border border-outline-variant rounded-2xl shadow-card h-full flex flex-col">
            <div className="px-6 py-5 border-b border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-on-surface-variant" />
                <h3 className="text-[15px] font-semibold text-on-surface">Automated Policies</h3>
              </div>
              <div className="relative">
                <Search className="w-4 h-4 text-on-surface-variant absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search policies..." 
                  className="pl-9 pr-4 py-1.5 text-[13px] bg-surface-container border border-outline-variant rounded-lg w-full sm:w-64 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>

            <div className="flex-1 p-6 flex flex-col gap-4">
              {policies.map(policy => {
                const isActive = activePolicies.includes(policy.id);
                return (
                  <div key={policy.id} className="flex items-start sm:items-center justify-between gap-4 p-4 rounded-xl border border-outline-variant hover:bg-surface-container transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-[14px] font-semibold text-on-surface">{policy.name}</h4>
                        <span className={cn(
                          'px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border',
                          policy.risk === 'High' ? 'bg-error/10 text-error border-error/20' : 
                          policy.risk === 'Medium' ? 'bg-accent/10 text-accent border-accent/20' : 
                          'bg-surface-container text-on-surface-variant border-outline-variant'
                        )}>
                          {policy.risk} Risk
                        </span>
                      </div>
                      <p className="text-[13px] text-on-surface-variant leading-relaxed">{policy.description}</p>
                    </div>
                    <button 
                      onClick={() => togglePolicy(policy.id)}
                      className={cn(
                        "transition-colors",
                        isActive ? "text-primary" : "text-outline-variant hover:text-on-surface-variant"
                      )}
                    >
                      {isActive ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8" />}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
