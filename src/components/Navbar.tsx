"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Cpu, Database, BookOpen, Activity, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: <Terminal size={14} /> },
  { name: "Projects", path: "/projects", icon: <Cpu size={14} /> },
  { name: "Experience", path: "/experience", icon: <Database size={14} /> },
  { name: "Blog", path: "/blog", icon: <BookOpen size={14} /> },
  { name: "Contact", path: "/contact", icon: <Activity size={14} /> }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Helper to check if a link is active
  const checkActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* 1. MAIN NAVIGATION BAR */}
      <div className={`fixed top-0 left-0 right-0 z-[100] flex justify-center pt-6 transition-all ${isOpen ? "" : "pointer-events-none"}`}>
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 px-1 py-1 shadow-[0_0_40px_rgba(0,0,0,0.7)] pointer-events-auto"
        >
          {/* DESKTOP: LEFT STATUS INDICATOR */}
          <div className="hidden md:flex items-center px-4 border-r border-white/10 gap-3">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </div>
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] whitespace-nowrap">
              System.Link_Active
            </span>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex">
            {navItems.map((item) => {
              const isActive = checkActive(item.path);
              return (
                <Link 
                  key={item.path} 
                  href={item.path}
                  className="relative group px-5 py-2.5 flex items-center gap-2.5 transition-all"
                >
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        layoutId="nav-active-glow"
                        className="absolute inset-0 bg-white/[0.03] border-b-2 border-cyan-500 -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </AnimatePresence>

                  <span className={`transition-colors duration-300 ${isActive ? "text-cyan-400" : "text-white/20 group-hover:text-white/60"}`}>
                    {item.icon}
                  </span>

                  <span className={`text-[11px] font-mono uppercase tracking-[0.25em] transition-colors duration-300 ${
                    isActive ? "text-white font-bold" : "text-white/40 group-hover:text-white"
                  }`}>
                    {item.name}
                  </span>

                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent group-hover:w-full transition-all duration-500" />
                </Link>
              );
            })}
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center gap-3 px-6 py-3 text-white transition-all active:scale-90"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-500">
              {isOpen ? "Close_Node" : "Menu_Node"}
            </span>
            {isOpen ? <X size={18} className="text-cyan-500" /> : <Menu size={18} className="text-cyan-500" />}
          </button>

          {/* DESKTOP: RIGHT METADATA */}
          <div className="hidden md:flex items-center px-5 border-l border-white/10 italic">
            <span className="text-[9px] font-mono text-cyan-500/40 uppercase tracking-widest">
              AD_CORE_V4.0
            </span>
          </div>
        </motion.nav>
      </div>

      {/* 2. MOBILE HUD OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 50% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 50% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 50% 0%)" }}
            className="fixed inset-0 z-[110] bg-[#050505] flex flex-col items-center justify-center p-6 md:hidden pointer-events-auto"
          >
            {/* HUD Background Decorations */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full max-w-xs space-y-4">
              {navItems.map((item, index) => {
                const isActive = checkActive(item.path);
                return (
                  <motion.div
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center justify-between p-5 border transition-all ${
                        isActive ? "border-cyan-500 bg-cyan-500/5 shadow-[0_0_20px_rgba(6,182,212,0.1)]" : "border-white/5 bg-white/[0.02]"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={isActive ? "text-cyan-400" : "text-white/20"}>{item.icon}</span>
                        <span className={`text-xl font-black uppercase tracking-tighter italic ${isActive ? "text-white" : "text-white/40 group-hover:text-white"}`}>
                          {item.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-white/10 uppercase italic">0{index + 1}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Tactical Mobile Footer */}
            <div className="mt-20 text-center space-y-3 pointer-events-none">
              <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">Uplink_Node: {pathname.toUpperCase()}</p>
              <div className="flex gap-2 justify-center">
                 <div className="w-1.5 h-1.5 bg-cyan-500 animate-pulse" />
                 <div className="w-1.5 h-1.5 bg-cyan-500/50" />
                 <div className="w-1.5 h-1.5 bg-cyan-500/20" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}