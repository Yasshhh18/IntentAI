import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Copilot from '../Copilot';

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="bg-background text-on-surface font-sans h-screen flex flex-col overflow-hidden">
      {/* Premium top accent bar — green to orange */}
      <div className="h-[3px] w-full bg-gradient-to-r from-primary via-accent to-primary flex-shrink-0 z-50" />
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-background">
          <div className="p-8 min-h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
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
