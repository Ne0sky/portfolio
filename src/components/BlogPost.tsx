"use client";
import { motion } from "framer-motion";
import { Terminal, ArrowLeft, ShieldCheck, Cpu, Download } from "lucide-react";
import Link from "next/link";

// This would ideally be in [slug]/page.tsx
export default function BlogPost({ post }: { post: any }) {
  return (
    <main className="min-h-screen bg-[#020202] text-white/90 font-mono py-20 px-6 relative overflow-hidden">
      
      {/* 🚀 CRT SCREEN TEXTURE OVERLAY */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[size:100%_4px,3px_100%]" />

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* 🚀 CONSOLE HEADER */}
        <div className="border border-white/10 bg-white/5 p-4 mb-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/blog" className="flex items-center gap-2 text-cyan-500 hover:text-white transition-colors text-xs uppercase tracking-widest group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Abort_Protocol</span>
          </Link>
          <div className="flex gap-6 text-[10px] text-white/40 uppercase tracking-tighter">
            <span className="flex items-center gap-1"><Cpu size={12} /> ID: {post.slug.toUpperCase()}</span>
            <span className="flex items-center gap-1"><ShieldCheck size={12} /> Status: Decrypted</span>
          </div>
        </div>

        {/* 🚀 POST METADATA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 space-y-4"
        >
          <div className="text-cyan-500 text-[10px] tracking-[0.4em] uppercase mb-2">
            File_Origin: {post.date} // {post.readingTime}
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-none tracking-tighter">
            {post.title}
          </h1>
          <div className="flex gap-2 pt-4">
            {post.tags.map((tag: string) => (
              <span key={tag} className="text-[10px] border border-white/10 px-2 py-0.5 text-white/40">#{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* 🚀 DECRYPTED CONTENT AREA */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert prose-cyan max-w-none 
            prose-headings:uppercase prose-headings:italic prose-headings:tracking-tighter
            prose-p:text-white/60 prose-p:leading-relaxed prose-p:text-sm
            prose-code:text-cyan-400 prose-code:bg-white/5 prose-code:px-1
            border-t border-white/5 pt-12"
        >
          
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        </motion.article>

        {/* 🚀 FOOTER ACTIONS */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest">Connection_Secure</span>
          </div>
          <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest hover:text-cyan-500 transition-colors">
            <Download size={14} />
            <span>Download_Source_Log</span>
          </button>
        </div>
      </div>
    </main>
  );
}