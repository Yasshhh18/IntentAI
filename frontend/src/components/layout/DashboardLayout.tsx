import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Copilot from '../Copilot';

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="bg-background text-on-surface font-sans h-screen flex flex-col overflow-hidden selection:bg-accent/20">
      {/* Premium top accent bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary/60 through-accent/80 to-transparent flex-shrink-0 z-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-60" />
      </div>
      
      <Topbar />
      
      <div className="flex flex-1 overflow-hidden relative">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto bg-background/50 backdrop-blur-3xl relative z-10">
          <div className="p-8 min-h-full max-w-[1600px] mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
      <Copilot />
    </div>
  );
}
