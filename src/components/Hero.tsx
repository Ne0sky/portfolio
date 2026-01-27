"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { 
  PerspectiveCamera, 
  Stars, 
  Float,
  MeshDistortMaterial,
  Sphere
} from "@react-three/drei";
import * as THREE from "three";

function OptimizedGrid() {
  const gridRef = useRef<THREE.GridHelper>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Smooth infinite movement without post-processing
    gridRef.current.position.z = (t * 1.5) % 2; 
  });

  return (
    <gridHelper 
      ref={gridRef} 
      args={[100, 50, "#ff0080", "#22d3ee"]} 
      position={[0, -1.5, 0]} 
      rotation={[0, 0, 0]}
    />
  );
}

export default function RetroHero() {
  return (
    <div className="relative w-full h-screen bg-[#050505] overflow-hidden">
      
      {/* 1. 3D LAYER: Simplified for Stability */}
      <div className="absolute inset-0 z-0">
        {/* gl={{ powerPreference: "high-performance" }} helps prevent context loss */}
        <Canvas dpr={[1, 1.5]} gl={{ antialias: false, powerPreference: "high-performance" }}>
          <PerspectiveCamera makeDefault position={[0, 0.5, 5]} fov={50} />
          
          <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
          
          <OptimizedGrid />

          <Float speed={2}>
            <Sphere args={[1.2, 32, 32]} position={[0, 0.5, -6]}>
              <MeshDistortMaterial
                color="#ff2d55"
                speed={2}
                distort={0.3}
                emissive="#ff0080"
                emissiveIntensity={1}
              />
            </Sphere>
          </Float>

          <ambientLight intensity={0.5} />
          <pointLight position={[0, 2, -2]} intensity={10} color="#22d3ee" />
        </Canvas>
      </div>

      {/* 2. GLOW OVERLAY: Using CSS instead of WebGL Post-Processing */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-pink-500/10 via-transparent to-transparent opacity-60" />

      {/* 3. TYPOGRAPHY */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-center"
        >
          {/* Text Glow using CSS Filter (Very Cheap) */}
          <h1 className="text-6xl md:text-9xl font-black text-white uppercase italic tracking-tighter drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]">
            AKASH DEY
          </h1>
          
          <div className="mt-8 flex gap-6 justify-center text-white font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase">
            <span>Software Development Engineer</span>
            <span className="text-pink-500">/</span>
            <span>,Bangalore (IN)</span>
          </div>

          <p className="mt-12 max-w-md mx-auto text-white/30 font-mono text-[9px] uppercase tracking-widest leading-loose">
            High-Performance Data Pipelines & AI Architectures.
            <br />
            [Node_Status: Optimized]
          </p>
        </motion.div>
      </div>

      {/* Scanline Effect (CSS only) */}
      <div className="absolute inset-0 z-30 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px]" />
    </div>
  );
}