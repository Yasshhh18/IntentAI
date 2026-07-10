import { User, Mail, Building, MapPin, Phone, Shield, ShieldCheck, Activity, Key, LogOut } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { motion } from 'framer-motion';

const MotionCard = motion.create(Card);

export default function Profile() {
  return (
    <div className="flex flex-col gap-6 max-w-[1200px] mx-auto w-full">
      {/* Header Profile Summary */}
      <MotionCard 
        glass
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden"
      >
        <div className="h-32 bg-gradient-to-r from-primary via-accent to-primary opacity-20 relative">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        </div>
        <CardContent className="px-8 pb-8 pt-0 relative flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-8 -mt-12">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent via-amber-500 to-primary text-on-accent flex items-center justify-center text-[32px] font-black border-4 border-surface shadow-xl flex-shrink-0 z-10 relative">
            YP
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-surface shadow-sm" />
          </div>
          
          <div className="flex-1 text-center sm:text-left pt-14 sm:pt-0 pb-2">
            <h1 className="text-[28px] font-bold text-on-surface tracking-tight leading-none mb-2">Yash Patil</h1>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <Badge variant="ai" className="px-2.5 py-0.5 gap-1.5 uppercase tracking-widest text-[10px]">
                <ShieldCheck className="w-3 h-3" /> Principal Architect
              </Badge>
              <span className="text-[14px] font-medium text-on-surface-variant flex items-center gap-1.5">
                <Building className="w-4 h-4 opacity-70" /> IDBI Innovate 2026
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto glass gap-2">
              <Key className="w-4 h-4" /> Reset Password
            </Button>
            <Button variant="outline" className="w-full sm:w-auto text-error hover:bg-error/10 hover:text-error hover:border-error/20 gap-2">
              <LogOut className="w-4 h-4" /> Sign Out
            </Button>
          </div>
        </CardContent>
      </MotionCard>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Personal Information */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <MotionCard 
            glass
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <CardContent className="p-6">
              <h2 className="text-[16px] font-bold text-on-surface flex items-center gap-2 mb-6">
                <User className="w-4 h-4 text-accent" />
                Contact Information
              </h2>
              
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-variant/50 flex items-center justify-center text-on-surface-variant flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-0.5">Email Address</p>
                    <p className="text-[14px] font-medium text-on-surface">yash.patil@idbi.co.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-variant/50 flex items-center justify-center text-on-surface-variant flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-0.5">Phone Number</p>
                    <p className="text-[14px] font-medium text-on-surface">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-variant/50 flex items-center justify-center text-on-surface-variant flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-[14px] font-medium text-on-surface">Mumbai HQ, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </MotionCard>
        </div>

        {/* Right Column - Roles & Activity */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <MotionCard 
            glass
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <CardContent className="p-6">
              <h2 className="text-[16px] font-bold text-on-surface flex items-center gap-2 mb-6">
                <Shield className="w-4 h-4 text-primary" />
                Access & Permissions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-outline/50 bg-surface-variant/20 hover:bg-surface-variant/40 transition-colors">
                  <h3 className="text-[14px] font-bold text-on-surface mb-1">System Administration</h3>
                  <p className="text-[12px] text-on-surface-variant leading-relaxed">Full access to IntentIQ risk parameters, automated policies, and global overrides.</p>
                </div>
                <div className="p-4 rounded-xl border border-outline/50 bg-surface-variant/20 hover:bg-surface-variant/40 transition-colors">
                  <h3 className="text-[14px] font-bold text-on-surface mb-1">Data Governance</h3>
                  <p className="text-[12px] text-on-surface-variant leading-relaxed">Ability to modify schema definitions and manage PII data masking rules.</p>
                </div>
                <div className="p-4 rounded-xl border border-outline/50 bg-surface-variant/20 hover:bg-surface-variant/40 transition-colors">
                  <h3 className="text-[14px] font-bold text-on-surface mb-1">Analytics Export</h3>
                  <p className="text-[12px] text-on-surface-variant leading-relaxed">Authorized to generate and download compliance reports and audit logs.</p>
                </div>
              </div>
            </CardContent>
          </MotionCard>

          <MotionCard 
            glass
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <CardContent className="p-6">
              <h2 className="text-[16px] font-bold text-on-surface flex items-center gap-2 mb-6">
                <Activity className="w-4 h-4 text-accent" />
                Recent Activity
              </h2>

              <div className="space-y-6">
                {[
                  { action: 'Updated Global Risk Policy', details: 'Modified "High-Risk Geo Block" parameters', time: '2 hours ago' },
                  { action: 'Exported Compliance Report', details: 'Q2 2026 Audit Trail downloaded', time: '1 day ago' },
                  { action: 'Added New Team Member', details: 'Invited rahul.sharma@idbi.co.in to Analytics group', time: '3 days ago' },
                  { action: 'System Login', details: 'Logged in from IP 114.143.190.22 (Mumbai)', time: '4 days ago' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 relative">
                    <div className="mt-1.5 relative flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-surface border-2 border-primary z-10" />
                      {i !== 3 && <div className="w-[2px] h-12 bg-outline/40 absolute top-3" />}
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-on-surface leading-snug">{item.action}</p>
                      <p className="text-[13px] text-on-surface-variant font-medium mt-0.5">{item.details}</p>
                      <p className="text-[10px] text-on-surface-variant/70 font-bold uppercase tracking-widest mt-1.5">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </MotionCard>
        </div>
      </div>
    </div>
  );
}
