import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import {
  LayoutDashboard, Users, BrainCircuit, LineChart,
  PieChart, Shield, Activity, Megaphone, ChevronRight
} from 'lucide-react';

const primaryNav = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard', description: 'Overview & KPIs' },
  { icon: Users, label: 'Customer 360', path: '/customer', description: 'Profile intelligence' },
  { icon: BrainCircuit, label: 'Intent Engine', path: '/analytics', description: 'Propensity modeling' },
  { icon: LineChart, label: 'Lead Intelligence', path: '/pipeline', description: 'Opportunity pipeline' },
  { icon: Megaphone, label: 'Campaigns', path: '/campaigns', description: 'Targeted outreach' },
  { icon: PieChart, label: 'Behavior Analytics', path: '/reports', description: 'Portfolio insights' },
];

const systemNav = [
  { icon: Shield, label: 'Risk Controls', path: '/settings' },
  { icon: Activity, label: 'System Health', path: '/health' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-[260px] glass border-r border-outline/50 flex flex-col h-full flex-shrink-0 z-30 relative">
      {/* Live status */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center gap-2 p-3 bg-surface/50 border border-outline rounded-xl shadow-sm">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-on-surface uppercase tracking-wider leading-none">System Live</span>
            <span className="text-[10px] text-on-surface-variant mt-1">IDBI Command Center</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 py-2 space-y-8 overflow-y-auto custom-scrollbar">
        
        <div>
          <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest px-2 mb-3">Intelligence</p>
          <div className="flex flex-col gap-1">
            {primaryNav.map((item) => {
              const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  title={item.description}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors relative group outline-none focus-visible:ring-2 focus-visible:ring-accent',
                    isActive ? 'text-on-surface font-semibold' : 'text-on-surface-variant font-medium hover:text-on-surface'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute inset-0 bg-surface-variant/80 border border-outline/50 rounded-xl"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-accent rounded-r-full shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10" />
                  )}
                  <item.icon
                    className={cn(
                      'w-[18px] h-[18px] flex-shrink-0 z-10 transition-colors',
                      isActive ? 'text-accent' : 'group-hover:text-on-surface'
                    )}
                  />
                  <span className="text-[14px] tracking-tight z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest px-2 mb-3">System Controls</p>
          <div className="flex flex-col gap-1">
            {systemNav.map((item) => {
              const isActive = location.pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors relative group outline-none focus-visible:ring-2 focus-visible:ring-accent',
                    isActive ? 'text-on-surface font-semibold' : 'text-on-surface-variant font-medium hover:text-on-surface'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute inset-0 bg-surface-variant/80 border border-outline/50 rounded-xl"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-accent rounded-r-full shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10" />
                  )}
                  <item.icon className={cn('w-[18px] h-[18px] flex-shrink-0 z-10', isActive ? 'text-accent' : 'group-hover:text-on-surface')} />
                  <span className="text-[14px] tracking-tight z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* User Profile Footer */}
      <div className="p-4 border-t border-outline/50 bg-surface/30">
        <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-surface-variant/50 transition-colors cursor-pointer group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-primary text-on-accent flex items-center justify-center text-[12px] font-bold flex-shrink-0 shadow-sm border border-glass-border">
            YP
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-semibold text-on-surface truncate">Yash Patil</p>
            <p className="text-[11px] text-on-surface-variant truncate">Principal Architect</p>
          </div>
          <ChevronRight className="w-4 h-4 text-on-surface-variant opacity-0 group-hover:opacity-100 transition-all translate-x-[-4px] group-hover:translate-x-0" />
        </div>
        <p className="text-[10px] text-on-surface-variant/60 text-center mt-3 font-mono">v3.0.0-enterprise</p>
      </div>
    </aside>
  );
}


