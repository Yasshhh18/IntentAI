import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import {
  LayoutDashboard, Users, BrainCircuit, LineChart,
  PieChart, Shield, Activity, Megaphone, Zap, ChevronRight
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
    <aside className="w-[240px] bg-surface border-r border-outline-variant flex flex-col h-full flex-shrink-0 z-20">
      {/* Logo */}
      <div className="px-5 pt-6 pb-5 border-b border-outline-variant">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-[15px] font-bold text-on-surface tracking-tight leading-none">IntentIQ</h1>
            <p className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-[0.08em] mt-0.5">AI Intelligence</p>
          </div>
        </div>
        {/* Live status */}
        <div className="flex items-center gap-1.5 mt-3">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">Live · IDBI Branch 047</span>
        </div>
      </div>

      {/* Primary Navigation */}
      <div className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em] px-3 mb-2">Intelligence</p>
        {primaryNav.map((item) => {
          const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
          return (
            <Link
              key={item.path}
              to={item.path}
              title={item.description}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 relative group',
                isActive
                  ? 'bg-accent/[0.08] text-accent font-semibold'
                  : 'text-on-surface-variant font-medium hover:bg-surface-container hover:text-on-surface'
              )}
            >
              {/* Active left indicator */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-accent rounded-r-full" />
              )}
              <item.icon
                className={cn(
                  'w-4 h-4 flex-shrink-0 transition-colors',
                  isActive ? 'text-accent' : 'text-on-surface-variant group-hover:text-on-surface'
                )}
              />
              <span className="text-[13px] tracking-[-0.005em]">{item.label}</span>
              {isActive && <ChevronRight className="w-3 h-3 ml-auto text-accent/60" />}
            </Link>
          );
        })}

        {/* System section */}
        <div className="pt-4">
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em] px-3 mb-2">System</p>
          {systemNav.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 group',
                  isActive
                    ? 'bg-accent/[0.08] text-accent font-semibold'
                    : 'text-on-surface-variant font-medium hover:bg-surface-container hover:text-on-surface'
                )}
              >
                <item.icon className={cn('w-4 h-4 flex-shrink-0', isActive ? 'text-accent' : 'text-on-surface-variant group-hover:text-on-surface')} />
                <span className="text-[13px]">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* User Profile Footer */}
      <div className="px-3 pb-4 pt-3 border-t border-outline-variant">
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-container transition-colors cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-container text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0">
            JD
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-semibold text-on-surface truncate">John Doe</p>
            <p className="text-[10px] text-on-surface-variant truncate">Sr. Credit Officer</p>
          </div>
          <ChevronRight className="w-3 h-3 text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-[10px] text-on-surface-variant text-center mt-2 opacity-50">IntentIQ v2.1 · Build 2026</p>
      </div>
    </aside>
  );
}


