import { Search, Bell, Moon, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <header className="h-[60px] bg-surface border-b border-outline-variant flex items-center justify-between px-6 flex-shrink-0 z-40">
      {/* Left: Brand */}
      <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity flex-shrink-0">
        <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-white text-[13px] font-bold">IQ</span>
        </div>
        <div className="hidden sm:block">
          <span className="text-[15px] font-bold text-on-surface tracking-tight leading-none">IntentIQ</span>
          <span className="text-[10px] text-on-surface-variant font-medium tracking-[0.06em] uppercase ml-2">AI Decision Intelligence</span>
        </div>
      </Link>

      {/* Center: IDBI Hackathon Badge */}
      <div className="hidden md:flex items-center">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/[0.04] hover:bg-accent/[0.07] transition-colors cursor-default">
          <Trophy className="w-3.5 h-3.5 text-accent flex-shrink-0" />
          <div className="flex flex-col leading-none">
            <span className="text-[12px] font-bold text-on-surface tracking-wide">IDBI Innovate 2026</span>
            <span className="text-[10px] font-semibold text-accent tracking-[0.06em] uppercase mt-0.5">Track 02 · AI Decision Intelligence</span>
          </div>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-1">
        {/* Search */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-lg border border-outline-variant text-on-surface-variant hover:border-outline hover:bg-surface-container-high transition-all cursor-text w-52 mr-2">
          <Search className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="text-[12px] flex-1">Search...</span>
          <kbd className="text-[10px] font-medium bg-surface border border-outline-variant px-1 py-0.5 rounded text-on-surface-variant">⌘K</kbd>
        </div>

        {/* Theme */}
        <button className="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all">
          <Moon className="w-4 h-4" />
        </button>

        {/* Notifications */}
        <button className="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full border-2 border-surface" />
        </button>

        {/* Divider */}
        <div className="w-px h-5 bg-outline-variant mx-1" />

        {/* Profile */}
        <button className="flex items-center gap-2 pl-2 hover:opacity-80 transition-opacity">
          <div className="text-right hidden sm:block">
            <p className="text-[12px] font-semibold text-on-surface leading-none">John Doe</p>
            <p className="text-[10px] text-on-surface-variant mt-0.5">Credit Officer</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-container text-white flex items-center justify-center text-[11px] font-bold border-2 border-surface shadow-sm">
            JD
          </div>
        </button>
      </div>
    </header>
  );
}
