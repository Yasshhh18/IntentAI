import { Search, Bell, Moon, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export default function Topbar() {
  return (
    <header className="h-[60px] glass border-b border-outline/50 flex items-center justify-between px-6 flex-shrink-0 z-40 sticky top-0">
      {/* Left: Brand */}
      <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0 group">
        <motion.div 
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] border border-white/10"
        >
          <span className="text-white text-[14px] font-bold tracking-tighter">IQ</span>
        </motion.div>
        <div className="hidden sm:flex flex-col">
          <span className="text-[16px] font-bold text-on-surface tracking-tight leading-none group-hover:text-primary transition-colors">IntentIQ</span>
          <span className="text-[10px] text-on-surface-variant font-medium tracking-[0.06em] uppercase mt-0.5">AI Decision Engine</span>
        </div>
      </Link>

      {/* Center: Badge */}
      <div className="hidden md:flex items-center">
        <Badge variant="ai" className="px-3 py-1.5 gap-2 backdrop-blur-md bg-accent/5 border-accent/20">
          <Trophy className="w-3.5 h-3.5" />
          <div className="flex flex-col text-left leading-none">
            <span className="text-[11px] font-bold tracking-wide">IDBI Innovate 2026</span>
          </div>
        </Badge>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-surface/50 border border-outline/50 rounded-xl text-on-surface-variant hover:border-outline hover:bg-surface-variant transition-all cursor-text w-64 mr-2 group">
          <Search className="w-4 h-4 flex-shrink-0 group-hover:text-primary transition-colors" />
          <span className="text-[13px] flex-1">Search anything...</span>
          <kbd className="text-[10px] font-mono font-medium bg-surface-variant border border-outline px-1.5 py-0.5 rounded text-on-surface-variant">⌘K</kbd>
        </div>

        <Button variant="ghost" size="icon" className="rounded-full w-9 h-9">
          <Moon className="w-4 h-4" />
        </Button>

        <Button variant="ghost" size="icon" className="rounded-full w-9 h-9 relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
        </Button>

        <div className="w-px h-5 bg-outline mx-1" />

        {/* Profile */}
        <button className="flex items-center gap-2.5 pl-2 hover:opacity-80 transition-opacity">
          <div className="text-right hidden sm:block">
            <p className="text-[13px] font-semibold text-on-surface leading-none">Yash Patil</p>
            <p className="text-[11px] text-on-surface-variant mt-0.5">Principal Architect</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-primary text-white flex items-center justify-center text-[12px] font-bold border-2 border-surface shadow-sm">
            YP
          </div>
        </button>
      </div>
    </header>
  );
}
