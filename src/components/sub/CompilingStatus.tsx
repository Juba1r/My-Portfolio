"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const CompilingStatus = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const percentage = useTransform(smoothProgress, [0, 1], [0, 100]);
  const [displayPercent, setDisplayPercent] = useState(0);
  const [status, setStatus] = useState("Initializing modules...");

  useEffect(() => {
    return percentage.onChange((v) => {
      const p = Math.floor(v);
      setDisplayPercent(p);

      if (p === 0) setStatus("Initializing modules...");
      else if (p < 20) setStatus("Resolving dependencies...");
      else if (p < 50) setStatus("Optimizing assets...");
      else if (p < 80) setStatus("Rendering components...");
      else if (p < 100) setStatus("Finalizing build...");
      else setStatus("✔ Build Successful");
    });
  }, [percentage]);

  const barWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-10 right-10 z-[100] w-64 p-4 rounded-xl glass-card border border-primary/20 backdrop-blur-md shadow-2xl pointer-events-auto group"
    >
      <div className="flex flex-col gap-2 font-mono text-[10px] tracking-tight">
        <div className="flex justify-between items-center text-primary/80">
          <span className="uppercase font-bold tracking-[0.2em]">
            Build Console
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            LIVE
          </span>
        </div>

        <div className="text-foreground/90 font-medium overflow-hidden whitespace-nowrap">
          {displayPercent === 100 ? (
            <span className="text-cyan-400">✔ Build Successful</span>
          ) : (
            <div className="flex items-center gap-1">
              <span>Compiling Portfolio...</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-1.5 h-3 bg-primary"
              />
            </div>
          )}
        </div>

        <div className="relative w-full h-[3px] bg-foreground/10 rounded-full overflow-hidden border border-foreground/10">
          <motion.div
            style={{ width: barWidth }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 via-primary to-violet-500"
          />
        </div>

        <div className="flex flex-col gap-0.5 mt-1">
          <div className="flex justify-between text-foreground/60 text-[8px]">
            <span>Modules: {displayPercent}%</span>
            <span>Status: {status}</span>
          </div>
        </div>
      </div>

      {/* Glow Pulse */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-primary/20 via-transparent to-accent/20 -z-10 blur-sm"
      />
    </motion.div>
  );
};

export default CompilingStatus;
