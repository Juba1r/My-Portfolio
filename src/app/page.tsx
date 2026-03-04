"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import StarsCanvas from "@/components/StarBackground";
import CompilingStatus from "@/components/sub/CompilingStatus";
import ComputationalBackground from "@/components/sub/ComputationalBackground";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const layers = [
    { component: <Hero />, id: "hero" },
    { component: <About />, id: "about" },
    { component: <Skills />, id: "skills" },
    { component: <Experience />, id: "experience" },
    { component: <Projects />, id: "projects" },
    { component: <Contact />, id: "contact" },
    { component: <Footer />, id: "footer" },
  ];

  // Map scroll position to section IDs for navigation compatibility
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const index = layers.findIndex((l) => l.id === hash);
      if (index !== -1 && containerRef.current) {
        const totalHeight =
          containerRef.current.scrollHeight - window.innerHeight;
        const targetScroll = (index / (layers.length - 1)) * totalHeight;
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    // Initial check
    if (window.location.hash) handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [layers.length]);

  return (
    <main className="relative bg-background w-full pt-28" ref={containerRef}>
      {/* 🔹 Environmental Enhancement: Global Logic Grid & Code Flow */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <ComputationalBackground isMobile={false} />
      </div>

      {/* 🔹 Seamless Vertical Scroll Architecture */}
      <div className="relative w-full z-10">
        {layers.map((layer, index) => (
          <section
            key={layer.id}
            id={layer.id}
            className="w-full flex items-center justify-center"
          >
            <div className="w-full relative">{layer.component}</div>
          </section>
        ))}
      </div>

      {/* 🔹 Persistent UI Elements */}
      <CompilingStatus />
      <StarsCanvas />

      {/* Status Indicators */}
      <div className="fixed bottom-10 left-10 z-[100] pointer-events-none">
        <div className="flex flex-col gap-1 text-[9px] font-mono tracking-widest text-primary/40 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-[1px] bg-primary animate-pulse" />
            <span>Architecture: Standard Vertical</span>
          </div>
          <span>Environment Index: 0x2A4F</span>
          <motion.span
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Resolution: High-Fidelity
          </motion.span>
        </div>
      </div>
    </main>
  );
}
