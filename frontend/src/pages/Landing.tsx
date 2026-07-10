import { Search, Brain, Database, Lightbulb, ArrowRight, ChevronRight, Play, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { cn } from '../lib/utils';

export default function Landing() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('platform');
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-on-surface overflow-x-hidden selection:bg-accent/20 selection:text-on-surface" ref={targetRef}>
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface/20 via-background to-background"></div>
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0], 
            y: [0, 100, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-surface/40 backdrop-blur-xl border-b border-outline/30 shadow-glass">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
              <Brain className="w-4 h-4 text-accent" />
            </div>
            <span className="text-xl font-bold tracking-tight text-on-surface">IntentIQ</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {[{ id: 'platform', label: 'Platform' }, { id: 'solutions', label: 'Solutions' }, { id: 'resources', label: 'Resources' }].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveNav(id)}
                className={cn(
                  "text-[14px] font-medium transition-colors relative py-2",
                  activeNav === id ? "text-on-surface" : "text-on-surface-variant hover:text-on-surface"
                )}
              >
                {label}
                {activeNav === id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="text-on-surface-variant hover:text-on-surface transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <Button variant="ai" size="sm" onClick={() => navigate('/dashboard')} className="gap-2">
              Launch Cockpit <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow relative z-10 pt-32 pb-24">
        {/* Hero Section */}
        <motion.section style={{ opacity, scale }} className="px-6 mb-32 max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="ai" className="px-3 py-1.5 gap-2 uppercase tracking-widest text-[11px] shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <Zap className="w-3.5 h-3.5" /> Next-Gen AI Intelligence
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[56px] md:text-[72px] font-bold leading-[1.1] tracking-tight mb-8 text-on-surface"
            >
              Move Beyond <br />
              <span className="text-gradient-accent">Traditional Metrics.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[18px] text-on-surface-variant font-medium leading-relaxed max-w-2xl mb-10"
            >
              Unlock true repayment capacity and customer intent through data-driven transactional and behavioral insights. Generate high-quality leads instantly.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <Button variant="ai" size="lg" onClick={() => navigate('/dashboard')} className="gap-2 text-[15px] px-8 h-12">
                Start Simulation <ChevronRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="glass gap-2 text-[15px] px-8 h-12 hover:bg-surface-variant/30">
                <Play className="w-4 h-4" /> Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Hero Visuals */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-20 pointer-events-none h-full" />
            
            <div className="relative z-10 rounded-2xl border border-outline/50 bg-surface/40 backdrop-blur-md p-2 shadow-glass overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-50" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
              
              <div className="bg-[#0f172a] rounded-xl border border-outline/30 aspect-[16/9] relative overflow-hidden flex items-center justify-center group">
                 {/* Decorative mock UI lines */}
                 <div className="absolute top-4 left-4 flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-error/80" />
                   <div className="w-3 h-3 rounded-full bg-accent/80" />
                   <div className="w-3 h-3 rounded-full bg-primary/80" />
                 </div>

                 {/* Center Graphic */}
                 <div className="w-3/4 h-3/4 relative">
                    <svg viewBox="0 0 800 400" className="w-full h-full drop-shadow-2xl opacity-90">
                      {/* Grid */}
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                      </pattern>
                      <rect width="800" height="400" fill="url(#grid)" />

                      {/* Main Chart Area */}
                      <path d="M 50,300 Q 200,280 350,150 T 750,50" fill="none" stroke="rgba(16,185,129,0.2)" strokeWidth="40" strokeLinecap="round" className="animate-pulse" />
                      <path d="M 50,300 Q 200,280 350,150 T 750,50" fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
                      
                      {/* Data Points */}
                      <circle cx="350" cy="150" r="8" fill="#10b981" stroke="#0f172a" strokeWidth="3" className="animate-pulse" />
                      <circle cx="550" cy="100" r="8" fill="#10b981" stroke="#0f172a" strokeWidth="3" />
                      <circle cx="750" cy="50" r="12" fill="#f59e0b" stroke="#0f172a" strokeWidth="4" />

                      {/* Overlays */}
                      <g transform="translate(680, 20)">
                        <rect width="100" height="40" rx="8" fill="rgba(245,158,11,0.15)" stroke="rgba(245,158,11,0.5)" />
                        <text x="50" y="25" fill="#f59e0b" fontSize="14" fontWeight="bold" textAnchor="middle">98% Intent</text>
                      </g>

                      {/* Floating UI Elements */}
                      <g transform="translate(100, 100)">
                         <rect width="180" height="80" rx="12" fill="rgba(30,41,59,0.8)" stroke="rgba(255,255,255,0.1)" />
                         <text x="20" y="30" fill="#94a3b8" fontSize="12" fontWeight="600">Assessed Capacity</text>
                         <text x="20" y="60" fill="#fff" fontSize="24" fontWeight="bold">₹2.4L</text>
                      </g>
                    </svg>
                 </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Features Grid */}
        <section className="px-6 mb-32 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-on-surface mb-4 tracking-tight">Enterprise Intelligence</h2>
            <p className="text-[16px] text-on-surface-variant max-w-2xl mx-auto">A seamless pipeline from raw data to actionable relationship intelligence.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Database, title: "Data Ingestion", desc: "Securely aggregate omnichannel data points including transaction history and market signals.", color: "text-primary", bg: "bg-primary/10" },
              { icon: Brain, title: "AI Analysis", desc: "Proprietary deep learning models analyze patterns to identify life events and financial stress.", color: "text-accent", bg: "bg-accent/10" },
              { icon: Lightbulb, title: "Actionable Intelligence", desc: "Deliver hyper-personalized recommendations directly to the underwriter's cockpit.", color: "text-tertiary", bg: "bg-tertiary/10" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl glass hover:bg-surface-variant/30 transition-colors group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-on-surface/5", feature.bg, feature.color)}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-[20px] font-bold text-on-surface mb-3">{feature.title}</h3>
                <p className="text-[14px] text-on-surface-variant leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Comparison Section */}
        <section className="px-6 mb-32 max-w-[1400px] mx-auto relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] -z-10" />
           <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-on-surface mb-4 tracking-tight">The IntentIQ Advantage</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional */}
            <div className="glass rounded-2xl p-8 relative overflow-hidden opacity-70">
               <Badge variant="outline" className="absolute top-6 right-6">Traditional Banking</Badge>
               <h3 className="text-[20px] font-bold text-on-surface mb-8">The Old Way</h3>
               <ul className="space-y-6">
                 {[
                   ['Manual Reviews', 'RM manually scans 200+ customers daily'],
                   ['Low Conversion', 'Poor targeting leads to wasted outreach'],
                   ['Declared Income', 'True repayment capacity is invisible'],
                   ['No Intent', 'No way to know who is actually interested']
                 ].map(([title, desc], i) => (
                   <li key={i} className="flex flex-col gap-1">
                     <span className="text-[14px] font-bold text-on-surface-variant">{title}</span>
                     <span className="text-[13px] text-on-surface-variant/70">{desc}</span>
                   </li>
                 ))}
               </ul>
            </div>

            {/* AI Powered */}
            <div className="glass rounded-2xl p-8 relative overflow-hidden border-accent/30 shadow-[0_0_30px_rgba(245,158,11,0.05)] bg-surface/80">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-2xl" />
               <Badge variant="ai" className="absolute top-6 right-6">IntentIQ AI</Badge>
               <h3 className="text-[20px] font-bold text-on-surface mb-8">AI Intelligence</h3>
               <ul className="space-y-6 relative z-10">
                 {[
                   ['AI Opportunity Feed', 'Ranked, prioritized leads ready to act on'],
                   ['>34% Conversion', 'Behavioral signals identify only right prospects'],
                   ['AI Assessment', 'Actual repayment capacity from transactions'],
                   ['Real-time Scoring', 'Detect interest 30–60 days before application']
                 ].map(([title, desc], i) => (
                   <li key={i} className="flex flex-col gap-1">
                     <span className="text-[14px] font-bold text-accent">{title}</span>
                     <span className="text-[13px] text-on-surface-variant">{desc}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-outline/30 bg-surface/50 backdrop-blur-xl relative z-20">
        <div className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-[13px] text-on-surface-variant font-medium">
            <Brain className="w-4 h-4 text-accent" />
            © 2026 IntentIQ Platform. Enterprise AI.
          </div>
          <div className="flex gap-6 text-[13px] font-medium text-on-surface-variant">
            <a href="#" className="hover:text-on-surface transition-colors">Documentation</a>
            <a href="#" className="hover:text-on-surface transition-colors">Security</a>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
              All Systems Optimal
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
