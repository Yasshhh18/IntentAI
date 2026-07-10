import { Search, Brain, TrendingUp, Database, Lightbulb, Shield, Zap, Code, Landmark, LineChart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="bg-transparent min-h-screen flex flex-col font-sans text-on-surface">
      {/* Top Navigation */}
      <header className="bg-white/40 backdrop-blur-xl border-b border-white/50 shadow-glass flex justify-between items-center w-full px-6 py-4 z-50 sticky top-0">
        <div className="flex items-center gap-4 flex-1">
          <span className="text-xl font-bold text-primary dark:text-primary-fixed tracking-tight">IntentIQ</span>
        </div>
        <div className="hidden md:flex items-center justify-center gap-8 text-base font-medium flex-none">
          <a className="text-accent dark:text-accent-fixed border-b-2 border-accent pb-1" href="#">Platform</a>
          <a className="text-on-surface-variant dark:text-surface-dim hover:text-accent transition-colors pb-1" href="#solutions">Solutions</a>
          <a className="text-on-surface-variant dark:text-surface-dim hover:text-accent transition-colors pb-1" href="#resources">Resources</a>
        </div>
        <div className="flex items-center gap-4 flex-1 justify-end">
          <button className="text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={() => navigate('/dashboard')}
            className="bg-accent text-on-accent px-5 py-2.5 rounded-lg text-lg font-bold hover:bg-accent-container transition-colors shadow-sm"
          >
            Launch Cockpit
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none"></div>
          {/* Ambient glow */}
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container/80 backdrop-blur-md rounded-full text-primary text-xs font-bold uppercase tracking-wider border border-primary/20 shadow-[0_0_15px_rgba(15,106,74,0.15)]">
                <Brain className="w-4 h-4 text-accent" />
                Powered by Advanced AI
              </div>
              <h1 className="text-5xl md:text-6xl font-semibold text-on-background leading-tight tracking-tight">
                Move Beyond <span className="text-gradient-brand">Traditional Metrics.</span>
              </h1>
              <p className="text-xl text-on-surface-variant font-normal leading-relaxed">
                Unlock true repayment capacity and customer intent through data-driven transactional and behavioral insights. Generate high-quality leads for retail lending instantly.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/dashboard" className="bg-accent text-on-accent px-8 py-3.5 rounded-lg text-lg font-bold shadow-md hover:shadow-lg hover:bg-accent-container transition-all">
                  Start Simulation
                </Link>
                <button className="bg-white/50 backdrop-blur-sm border border-white/60 text-on-surface px-8 py-3.5 rounded-lg text-lg font-semibold hover:bg-white/80 transition-all shadow-sm">
                  Explore Features
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative mt-8 md:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <motion.div
                className="bg-white/80 backdrop-blur-lg border border-white/60 shadow-glass p-5 rounded-2xl relative z-10 hover:shadow-glass-hover transition-all"
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                {/* Inline SVG — AI Banking Intelligence Illustration */}
                <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-xl">
                  {/* Background */}
                  <rect width="480" height="300" rx="16" fill="#f0fdf8" />

                  {/* Subtle grid lines */}
                  {[60, 120, 180, 240].map(y => (
                    <line key={y} x1="40" y1={y} x2="440" y2={y} stroke="#d1fae5" strokeWidth="1" strokeDasharray="4 4" />
                  ))}

                  {/* === INCOME BAR CHART === */}
                  {/* Declared Income bar */}
                  <rect x="60" y="160" width="44" height="80" rx="6" fill="#a7f3d0" />
                  <text x="82" y="155" textAnchor="middle" fontSize="10" fill="#059669" fontWeight="bold">₹1.2L</text>
                  <text x="82" y="258" textAnchor="middle" fontSize="9" fill="#6b7280">Declared</text>

                  {/* AI Assessed Income bar — taller */}
                  <rect x="120" y="100" width="44" height="140" rx="6" fill="#10b981" />
                  <text x="142" y="95" textAnchor="middle" fontSize="10" fill="#065f46" fontWeight="bold">₹1.85L</text>
                  <text x="142" y="258" textAnchor="middle" fontSize="9" fill="#6b7280">AI Assessed</text>

                  {/* Repayment Capacity bar */}
                  <rect x="180" y="130" width="44" height="110" rx="6" fill="#34d399" opacity="0.7" />
                  <text x="202" y="125" textAnchor="middle" fontSize="10" fill="#065f46" fontWeight="bold">83K</text>
                  <text x="202" y="258" textAnchor="middle" fontSize="9" fill="#6b7280">Capacity</text>

                  {/* === TRENDING LINE CHART === */}
                  <polyline
                    points="255,220 285,185 315,195 345,140 375,120 405,80 430,60"
                    fill="none"
                    stroke="#0f6a4a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Area fill under line */}
                  <polygon
                    points="255,220 285,185 315,195 345,140 375,120 405,80 430,60 430,240 255,240"
                    fill="url(#greenGrad)"
                    opacity="0.15"
                  />
                  <defs>
                    <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Dots on line */}
                  {[[255,220],[285,185],[315,195],[345,140],[375,120],[405,80],[430,60]].map(([cx,cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r="4" fill="#0f6a4a" stroke="white" strokeWidth="2" />
                  ))}
                  {/* Chart label */}
                  <text x="342" y="270" textAnchor="middle" fontSize="9" fill="#6b7280">Conversion Trend</text>
                  <text x="342" y="260" textAnchor="middle" fontSize="11" fill="#0f6a4a" fontWeight="bold">&gt; 34% ↑</text>

                  {/* === INTENT SCORE NODES === */}
                  <circle cx="390" cy="195" r="22" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
                  <text x="390" y="191" textAnchor="middle" fontSize="9" fill="#065f46" fontWeight="bold">Intent</text>
                  <text x="390" y="204" textAnchor="middle" fontSize="11" fill="#059669" fontWeight="bold">87</text>

                  {/* Label — top left */}
                  <rect x="40" y="20" width="130" height="28" rx="8" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1" />
                  <text x="55" y="39" fontSize="12" fill="#0f6a4a" fontWeight="bold">IntentIQ Analytics</text>
                </svg>
              </motion.div>
              
              {/* Floating badge — TOP RIGHT: AI Intent Score */}
              <motion.div
                className="absolute -top-5 -right-6 bg-white/80 backdrop-blur-lg border border-white/60 shadow-glass p-3 rounded-xl flex items-center gap-3 z-20"
                animate={{ y: [-8, 8, -8], rotate: [2, -2, 2] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              >
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                  <Brain className="text-accent w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">AI Intent Score</p>
                  <p className="text-xl font-bold text-accent tracking-tight">87 / 100</p>
                </div>
              </motion.div>

              {/* Floating UI element — BOTTOM LEFT: Lead Conversion */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-lg border border-white/60 shadow-glass p-4 rounded-xl flex items-center gap-4 z-20"
                animate={{ y: [8, -15, 8], rotate: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="text-primary w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Lead Conversion Rate</p>
                  <p className="text-2xl font-bold text-primary tracking-tight">&gt; 34%</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-24 px-6 bg-white/30 backdrop-blur-sm border-y border-white/40 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary-container/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-on-background mb-4 tracking-tight">How IntentIQ Works</h2>
              <p className="text-base text-on-surface-variant max-w-2xl mx-auto">A seamless pipeline from raw data to actionable relationship intelligence.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white/70 backdrop-blur-lg border border-white/60 shadow-glass p-8 rounded-xl relative overflow-hidden group hover:shadow-glass-hover transition-all hover:border-ai-glow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-6 text-primary">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-on-background mb-3">1. Data Ingestion</h3>
                <p className="text-base text-on-surface-variant leading-relaxed">Securely aggregate omnichannel data points including transaction history, browsing behavior, and market signals.</p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white/70 backdrop-blur-lg border border-white/60 shadow-glass p-8 rounded-xl relative overflow-hidden group hover:shadow-glass-hover transition-all hover:border-ai-glow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-6 text-accent shadow-sm">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-on-background mb-3">2. AI Analysis</h3>
                <p className="text-base text-on-surface-variant leading-relaxed">Proprietary deep learning models analyze patterns to identify life events, financial stress, or growth opportunities.</p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white/70 backdrop-blur-lg border border-white/60 shadow-glass p-8 rounded-xl relative overflow-hidden group hover:shadow-glass-hover transition-all hover:border-ai-glow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-container/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-6 text-tertiary shadow-sm">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-on-background mb-3">3. Actionable Intelligence</h3>
                <p className="text-base text-on-surface-variant leading-relaxed">Deliver hyper-personalized product recommendations and risk alerts directly to the underwriter's cockpit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 bg-transparent relative">
          <div className="absolute -left-40 top-40 w-96 h-96 bg-tertiary-container/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl font-semibold text-on-background tracking-tight">Platform Capabilities</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
              {/* Large Feature */}
              <div className="md:col-span-2 md:row-span-2 bg-white/70 backdrop-blur-lg border border-white/60 shadow-glass hover:shadow-glass-hover transition-all rounded-xl p-8 flex flex-col relative overflow-hidden group hover:border-ai-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="z-10 flex-grow">
                  <h3 className="text-2xl font-semibold text-on-background mb-3">Behavior Intelligence</h3>
                  <p className="text-base text-on-surface-variant max-w-md leading-relaxed">Map complex customer journeys and predict next-best-actions with high accuracy using multi-dimensional behavior modeling.</p>
                </div>
                <div className="mt-auto z-10 relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    className="w-full h-56 object-cover rounded-lg border border-outline-variant/20 shadow-sm relative z-10" 
                    alt="Behavior Visualization" 
                    src="/behavior_visualization.png"
                  />
                </div>
              </div>
              
              {/* Medium Feature */}
              <div className="md:col-span-2 bg-gradient-to-br from-[#0F6A4A] to-[#10B981] text-white rounded-xl p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(16,185,129,0.3)] relative overflow-hidden hover:scale-[1.02] transition-transform">
                <div className="absolute -right-10 -top-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-accent/40 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-5 backdrop-blur-sm shadow-inner">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Bank-Grade Security</h3>
                  <p className="text-lg opacity-90 leading-relaxed">Enterprise-level encryption, strict access controls, and full regulatory compliance built into the core architecture.</p>
                </div>
              </div>
              
              {/* Small Features */}
              <div className="bg-white/70 backdrop-blur-lg border border-white/60 shadow-glass hover:shadow-glass-hover transition-all rounded-xl p-6 flex flex-col justify-center items-center text-center hover:border-ai-glow group">
                <Zap className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-semibold text-on-background">Real-Time Processing</h4>
                <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mt-2">&lt; 50ms Latency</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-lg border border-white/60 shadow-glass hover:shadow-glass-hover transition-all rounded-xl p-6 flex flex-col justify-center items-center text-center hover:border-ai-glow group">
                <Code className="w-10 h-10 text-tertiary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-semibold text-on-background">API First</h4>
                <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mt-2">Seamless Integration</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-24 px-6 bg-white/30 backdrop-blur-sm border-y border-white/40 relative overflow-hidden" id="solutions">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-on-background mb-4 tracking-tight">Tailored <span className="text-gradient-accent">Solutions</span></h2>
              <p className="text-base text-on-surface-variant max-w-2xl mx-auto">Discover how IntentIQ transforms different aspects of banking operations.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/70 backdrop-blur-lg border border-white/60 shadow-glass p-8 rounded-xl hover:shadow-glass-hover transition-all hover:-translate-y-1 hover:border-ai-glow group">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(15,106,74,0.15)]">
                  <Landmark className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-on-background mb-3">Retail Lending Target</h3>
                <p className="text-base text-on-surface-variant leading-relaxed">Precision targeting for Personal Loans, Home Loans, Mortgage Loans, and Auto Loans.</p>
              </div>
              <div className="bg-white/70 backdrop-blur-lg border border-white/60 shadow-glass p-8 rounded-xl hover:shadow-glass-hover transition-all hover:-translate-y-1 hover:border-ai-glow group">
                <div className="w-14 h-14 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(180,83,9,0.15)]">
                  <LineChart className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-on-background mb-3">Repayment Capacity</h3>
                <p className="text-base text-on-surface-variant leading-relaxed">Assess actual income levels using transaction anomalies instead of traditional metrics.</p>
              </div>
              <div className="bg-white/70 backdrop-blur-lg border border-white/60 shadow-glass p-8 rounded-xl hover:shadow-glass-hover transition-all hover:-translate-y-1 hover:border-ai-glow group">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(242,140,40,0.15)]">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-on-background mb-3">High-Quality Leads</h3>
                <p className="text-base text-on-surface-variant leading-relaxed">Identify genuinely interested prospects to generate conversions exceeding 30%.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Before vs After — Traditional Banking vs IntentIQ AI */}
        <section className="py-24 px-6 bg-transparent relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-primary/8 rounded-full blur-[140px] -z-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container/80 backdrop-blur-md rounded-full text-primary text-xs font-bold uppercase tracking-wider border border-primary/20 mb-6">
                Why IntentIQ?
              </div>
              <h2 className="text-4xl font-semibold text-on-background mb-4 tracking-tight">
                Traditional Banking <span className="text-on-surface-variant">vs</span> <span className="text-gradient-accent">IntentIQ AI</span>
              </h2>
              <p className="text-base text-on-surface-variant max-w-xl mx-auto">The same RM. The same portfolio. A completely different outcome.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Traditional Side */}
              <div className="bg-white/40 backdrop-blur-lg border border-outline-variant/60 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 px-3 py-1 bg-red-100 text-red-700 border border-red-200 rounded-full text-xs font-bold uppercase tracking-wider">Old Way</div>
                <h3 className="text-xl font-semibold text-on-background mb-6">Traditional Retail Lending</h3>
                <div className="flex flex-col gap-4">
                  {[
                    ['📋', 'Manual pipeline reviews', 'RM manually scans 200+ customers daily'],
                    ['📉', 'Low conversion (<10%)', 'Poor targeting leads to wasted outreach'],
                    ['💰', 'Declared income only', 'True repayment capacity is invisible'],
                    ['🎯', 'No intent detection', 'No way to know who is actually interested'],
                    ['⏳', 'Slow underwriting', 'Decisions take days with incomplete data'],
                    ['❌', 'High rejection rate', 'Wrong customers, wrong products, wrong time'],
                  ].map(([icon, title, desc]) => (
                    <div key={title} className="flex items-start gap-3 opacity-80">
                      <span className="text-xl flex-shrink-0">{icon}</span>
                      <div>
                        <p className="text-[14px] font-semibold text-on-surface">{title}</p>
                        <p className="text-[12px] text-on-surface-variant">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* IntentIQ Side */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/5 backdrop-blur-lg border border-primary/25 rounded-2xl p-8 relative overflow-hidden shadow-primary-glow">
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-wider">IntentIQ AI</div>
                <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
                <h3 className="text-xl font-semibold text-on-background mb-6">AI Relationship Manager</h3>
                <div className="flex flex-col gap-4 relative z-10">
                  {[
                    ['🤖', 'AI Opportunity Feed', 'Every morning: ranked, prioritized leads ready to act on'],
                    ['📈', '>34% Conversion Rate', 'Behavioral signals identify only the right prospects'],
                    ['🔍', 'AI Income Assessment', 'Actual repayment capacity from transaction analysis'],
                    ['⚡', 'Real-time Intent Scoring', 'Detect interest 30–60 days before the customer applies'],
                    ['🧠', 'Explainable AI', 'Every recommendation shows exactly why — trusted by underwriters'],
                    ['✅', 'Prudent Underwriting', 'Personal, Home, Mortgage, Auto Loans matched to true capacity'],
                  ].map(([icon, title, desc]) => (
                    <div key={title} className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0">{icon}</span>
                      <div>
                        <p className="text-[14px] font-semibold text-primary">{title}</p>
                        <p className="text-[12px] text-on-surface-variant">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-24 px-6 bg-transparent relative" id="resources">
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-on-background mb-4 tracking-tight">Resources & <span className="text-gradient-brand">Insights</span></h2>
              <p className="text-base text-on-surface-variant max-w-2xl mx-auto">Explore our latest reports, case studies, and documentation.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-6 bg-white/70 backdrop-blur-lg border border-white/60 shadow-glass p-6 rounded-xl hover:shadow-glass-hover transition-all items-center hover:border-ai-glow group cursor-pointer">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors shadow-[0_0_15px_rgba(15,106,74,0.2)]">
                  <Database className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-on-background mb-2">API Documentation</h3>
                  <p className="text-sm text-on-surface-variant mb-3">Complete reference for integrating IntentIQ with your existing systems.</p>
                  <a href="#" className="text-accent font-medium text-sm hover:underline">Read Docs →</a>
                </div>
              </div>
              <div className="flex gap-6 bg-white/70 backdrop-blur-lg border border-white/60 shadow-glass p-6 rounded-xl hover:shadow-glass-hover transition-all items-center hover:border-ai-glow group cursor-pointer">
                <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors shadow-[0_0_15px_rgba(242,140,40,0.2)]">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-on-background mb-2">Case Study: IDBI Implementation</h3>
                  <p className="text-sm text-on-surface-variant mb-3">How we increased cross-sell rates by 34% within the first quarter.</p>
                  <a href="#" className="text-accent font-medium text-sm hover:underline">Download PDF →</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/40 backdrop-blur-xl border-t border-white/50 flex justify-between items-center px-6 py-6 w-full">
        <div className="text-base text-on-surface-variant">
          © 2024 IDBI Bank - IntentIQ Division. Proprietary & Confidential.
        </div>
        <div className="flex gap-6 text-base font-medium">
          <a className="text-on-surface-variant hover:text-accent transition-colors" href="#">Legal Compliance</a>
          <a className="text-on-surface-variant hover:text-accent transition-colors" href="#">Privacy Policy</a>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
            System Status: Optimal
          </div>
        </div>
      </footer>
    </div>
  );
}


