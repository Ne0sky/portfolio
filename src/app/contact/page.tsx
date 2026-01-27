"use client";
import { sendEmail } from "./actions";
import { motion } from "framer-motion";
import { Send, Terminal, Mail, Linkedin, Github, Activity, ShieldAlert } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  async function handleSubmit(formData: FormData) {
    // Start a "Loading" toast
    const toastId = toast.loading("INITIALIZING_UPLINK...");

    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        toast.success("SIGNAL_STRENGTH: 100%. MESSAGE_TRANSMITTED.", { id: toastId });
        // Optional: Reset form here
      } else {
        toast.error("TRANSMISSION_FAILED. CHECK_SECURE_PROTOCOLS.", { id: toastId });
      }
    } catch (error) {
      toast.error("CRITICAL_SYSTEM_ERROR: CONNECTION_LOST.", { id: toastId });
    }
  }

  return (
    <main className="min-h-screen bg-[#020202] py-32 px-6 relative overflow-hidden">
      
      {/* 🚀 ATMOSPHERIC OVERLAYS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.05)_0%,transparent_70%)]" />
        {/* Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* 🚀 TACTICAL HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 border-b border-white/10 pb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 text-cyan-500 font-mono text-[10px] tracking-[0.6em] uppercase">
              <Activity size={14} className="animate-pulse" />
              <span>Comm_Link: Established</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black text-white italic uppercase tracking-tighter leading-[0.8]">
              UP<span className="text-cyan-500">LINK</span>
            </h1>
          </motion.div>
          
          <div className="text-right font-mono text-[9px] text-white/20 uppercase tracking-[0.3em] leading-relaxed hidden md:block">
            Loc_Coord: 12.9716° N, 77.5946° E <br />
            Node_Ref: AKASH_SECURE_V4 <br />
            <span className="text-cyan-500/40">Status: Listening...</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* 🚀 LEFT COLUMN: SYSTEM INFO (4 Cols) */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-4 border border-cyan-500/20 bg-cyan-500/5">
                <ShieldAlert className="text-cyan-500 mt-1 shrink-0" size={20} />
                <p className="text-[11px] font-mono text-cyan-200/60 leading-relaxed uppercase tracking-wide">
                  Encryption active. All data packets are tunneled through secure SDE protocols. Unauthorized interception is improbable.
                </p>
              </div>

              <div className="space-y-4">
                <ContactLink icon={<Mail size={18} />} label="Direct_Mail" value="mailmeakash2@gmail.com" href="mailto:mailmeakash2@gmail.com" />
                <ContactLink icon={<Linkedin size={18} />} label="Net_Profile" value="linkedin.com/akash" href="https://www.linkedin.com/in/akash-d-75165b201/" />
                <ContactLink icon={<Github size={18} />} label="Source_Repo" value="github.com/Ne0sky" href="https://github.com/Ne0sky" />
              </div>
            </div>

            {/* LIVE WAVEFORM VISUALIZER */}
            <div className="pt-8 border-t border-white/5">
              <div className="flex justify-between items-center mb-4 text-[9px] font-mono text-white/20 uppercase tracking-widest">
                <span>Frequency_Analysis</span>
                <span>88.4 MHz</span>
              </div>
              <div className="flex items-end gap-1 h-12">
                {[...Array(20)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: [10, Math.random() * 40 + 10, 10] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.05 }}
                    className="flex-1 bg-cyan-500/30"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 🚀 RIGHT COLUMN: TERMINAL INPUT (7 Cols) */}
          <div className="lg:col-span-7 relative">
            {/* Corner Brackets */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-cyan-500/40" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-cyan-500/40" />

            <form action={handleSubmit} className="space-y-8 bg-white/[0.02] border border-white/5 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30">Identifier</label>
                  <input name="name" required placeholder="GUEST_01" className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all font-mono" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30">Return_Path</label>
                  <input name="email" type="email" required placeholder="USER@DOMAIN.SYS" className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all font-mono" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30">Data_Payload</label>
                <textarea name="message" required rows={6} placeholder="TYPE_MESSAGE_HERE..." className="w-full bg-transparent border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all font-mono resize-none" />
              </div>

              <button type="submit" className="w-full group relative flex items-center justify-center gap-3 bg-cyan-600 text-black font-black uppercase text-xs tracking-[0.4em] py-6 hover:bg-cyan-400 transition-all active:scale-95 overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <Send size={16} />
                <span>Transmit_Uplink</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

function ContactLink({ icon, label, value, href }: any) {
  return (
    <a href={href} target="_blank" className="group flex items-center gap-5 p-2 hover:bg-white/5 transition-colors">
      <div className="p-3 border border-white/10 text-white/40 group-hover:text-cyan-500 group-hover:border-cyan-500 transition-all">{icon}</div>
      <div>
        <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest">{label}</p>
        <p className="text-xs font-mono text-white/70 group-hover:text-white transition-colors uppercase">{value}</p>
      </div>
    </a>
  );
}