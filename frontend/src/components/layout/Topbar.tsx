import { Search, Bell, Moon, Trophy, Sparkles, Command } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';


export default function Topbar() {
  return (
    <header className="h-[64px] bg-surface/40 backdrop-blur-2xl border-b border-white/[0.06] flex items-center justify-between px-6 flex-shrink-0 z-40 sticky top-0 relative overflow-hidden">
      {/* Subtle animated shimmer across header */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
          className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/[0.02] to-transparent skew-x-[-20deg]"
        />
      </div>

      {/* Left: Premium Brand */}
      <Link to="/" className="flex items-center gap-3.5 hover:opacity-90 transition-opacity flex-shrink-0 group relative z-10">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          {/* Outer glow ring */}
          <div className="absolute -inset-1 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl opacity-40 blur-sm group-hover:opacity-60 transition-opacity" />
          {/* Logo */}
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-primary via-emerald-500 to-accent flex items-center justify-center shadow-lg border border-white/20">
            <span className="text-white text-[13px] font-black tracking-tighter drop-shadow-sm">IQ</span>
          </div>
        </motion.div>
        <div className="hidden sm:flex flex-col">
          <span className="text-[17px] font-extrabold text-white tracking-tight leading-none">
            Intent<span className="text-gradient-accent">IQ</span>
          </span>
          <span className="text-[10px] text-on-surface-variant/70 font-semibold tracking-[0.12em] uppercase mt-0.5">Enterprise AI Platform</span>
        </div>
      </Link>

      {/* Center: Premium IDBI Innovate Badge */}
      <div className="hidden md:flex items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="relative group cursor-default">
            {/* Outer glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-yellow-400/20 to-amber-500/20 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500/[0.08] via-yellow-500/[0.06] to-amber-500/[0.08] border border-amber-400/20 group-hover:border-amber-400/40 transition-all duration-500 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              {/* Animated shimmer on hover */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-amber-400/[0.08] to-transparent skew-x-[-20deg] rounded-2xl"
              />
              
              {/* Trophy with glow */}
              <div className="relative">
                <div className="absolute inset-0 bg-amber-400/30 blur-md rounded-full" />
                <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                  <Trophy className="w-4 h-4 text-white drop-shadow-sm" />
                </div>
              </div>
              
              <div className="flex flex-col leading-none relative z-10">
                <span className="text-[13px] font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300">
                  IDBI Innovate
                </span>
                <span className="text-[10px] text-amber-400/60 font-semibold mt-0.5 tracking-wider uppercase">
                  Hackathon 2026
                </span>
              </div>

              {/* Decorative sparkle dots */}
              <div className="flex items-center gap-1 ml-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400/50" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right: Premium Actions */}
      <div className="flex items-center gap-1.5 relative z-10">
        {/* Search Bar */}
        <div className="hidden lg:flex items-center gap-2.5 px-3.5 py-2 bg-white/[0.03] border border-white/[0.06] rounded-xl text-on-surface-variant hover:border-white/[0.12] hover:bg-white/[0.05] transition-all cursor-text w-60 mr-2 group backdrop-blur-sm">
          <Search className="w-3.5 h-3.5 flex-shrink-0 opacity-40 group-hover:opacity-70 transition-opacity" />
          <span className="text-[13px] flex-1 opacity-40 group-hover:opacity-60 transition-opacity">Search anything...</span>
          <div className="flex items-center gap-0.5 opacity-30">
            <kbd className="text-[10px] font-mono font-medium bg-white/[0.06] border border-white/[0.08] px-1.5 py-0.5 rounded text-on-surface-variant flex items-center gap-0.5">
              <Command className="w-2.5 h-2.5" />K
            </kbd>
          </div>
        </div>

        {/* AI Status indicator */}
        <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 mr-1 rounded-lg bg-primary/[0.06] border border-primary/10">
          <div className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
          </div>
          <span className="text-[11px] text-primary/80 font-semibold">AI Online</span>
        </div>

        <Button variant="ghost" size="icon" className="rounded-xl w-9 h-9 hover:bg-white/[0.05]">
          <Moon className="w-4 h-4 opacity-50" />
        </Button>

        <Button variant="ghost" size="icon" className="rounded-xl w-9 h-9 hover:bg-white/[0.05] relative">
          <Bell className="w-4 h-4 opacity-50" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)] ring-2 ring-surface/80" />
        </Button>

        <div className="w-px h-6 bg-white/[0.06] mx-1.5" />

        {/* Profile */}
        <button className="flex items-center gap-2.5 pl-1 hover:opacity-80 transition-opacity group">
          <div className="text-right hidden sm:block">
            <p className="text-[13px] font-bold text-white/90 leading-none tracking-tight">Yash Patil</p>
            <p className="text-[10px] text-on-surface-variant/60 mt-0.5 font-medium">Principal Architect</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-accent to-primary rounded-full opacity-50 blur-[2px] group-hover:opacity-80 transition-opacity" />
            <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-accent via-amber-500 to-primary text-white flex items-center justify-center text-[11px] font-bold border-2 border-surface/80 shadow-lg">
              YP
            </div>
          </div>
        </button>
      </div>
    </header>
  );
}
