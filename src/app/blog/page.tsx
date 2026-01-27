"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { posts } from "@/data/posts";
import { Terminal, Share2, BookOpen } from "lucide-react";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#030303] py-32 px-6 relative overflow-hidden">
      
      {/* 🚀 BACKGROUND AMBIENCE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(34,211,238,0.08)_0%,transparent_50%)]" />
        {/* Subtle Star Particles */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: '1px',
              height: '1px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* 🚀 HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-24 space-y-4 border-l-4 border-cyan-500 pl-8"
        >
          <div className="flex items-center gap-3 text-cyan-500 font-mono text-[10px] tracking-[0.6em] uppercase">
            <Terminal size={14} className="animate-pulse" />
            <span>Transmitting_Insights</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-none">
            Neural <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">Feed</span>
          </h1>
          <p className="text-white/30 font-mono text-[10px] tracking-widest uppercase">
            Logs from the edge of systems architecture & AI.
          </p>
        </motion.div>

        {/* 🚀 BLOG ARTICLES FEED */}
        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                {/* Tactical Card Frame */}
                <div className="relative p-8 bg-[#080808] border border-white/5 group-hover:border-cyan-500/40 transition-all duration-500 overflow-hidden">
                  
                  {/* Hover Scanline Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-400/10 px-2 py-0.5 border border-cyan-400/20">
                        {post.date}
                      </span>
                      <div className="h-[1px] w-8 bg-white/10 group-hover:w-16 transition-all duration-500" />
                    </div>
                    
                    <div className="flex gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-mono text-white/30 group-hover:text-white/60 uppercase tracking-tighter">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {post.title}
                  </h2>
                  
                  <p className="text-white/40 font-mono text-[12px] leading-relaxed line-clamp-2 max-w-2xl mb-8 group-hover:text-white/60 transition-colors">
                    {post.excerpt}
                  </p>

                  {/* Footer Interaction Bar */}
                  <div className="flex items-center gap-6 pt-6 border-t border-white/5 opacity-40 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-white tracking-widest uppercase">
                      <BookOpen size={12} />
                      <span>Read_Protocol</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-white tracking-widest uppercase">
                      <Share2 size={12} />
                      <span>Transmit</span>
                    </div>
                  </div>

                  {/* Decorative Corner Notch */}
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-cyan-500/10 clip-path-polygon group-hover:bg-cyan-500 transition-colors" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* 🚀 PAGE FOOTER */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          className="mt-32 pt-8 border-t border-white/5 flex justify-between items-center font-mono text-[9px] text-white uppercase tracking-[0.5em]"
        >
          <span>End_Of_Transmission</span>
          <span>Buffer: 100%_Static</span>
        </motion.div>
      </div>
    </main>
  );
}