"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";
import ComputationalBackground from "./ComputationalBackground";

const PortraitPortal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Use a damped scroll progress for smoother scrub
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // 🔹 1. Scroll-Based Portrait Emergence (Foundation Layer)
  const yReveal = useTransform(smoothProgress, [0, 1], [160, 0]);
  const opacityReveal = useTransform(smoothProgress, [0, 0.8], [0, 1]);
  const scaleReveal = useTransform(smoothProgress, [0, 1], [0.88, 1]);
  const blurReveal = useTransform(
    smoothProgress,
    [0, 1],
    ["blur(12px)", "blur(0px)"],
  );
  const brightnessReveal = useTransform(smoothProgress, [0, 1], [0.85, 1]);

  // 🔹 2. Depth-Based Mouse Parallax
  const springConfig = { stiffness: 100, damping: 30 };
  const rotateX = useSpring(
    useTransform(mouseY, [-400, 400], [6, -6]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-400, 400], [-8, 8]),
    springConfig,
  );

  // Depth shifts
  const portraitShiftX = useSpring(
    useTransform(mouseX, [-400, 400], [-20, 20]),
    springConfig,
  );
  const portraitShiftY = useSpring(
    useTransform(mouseY, [-400, 400], [-20, 20]),
    springConfig,
  );

  const triangleShiftX = useSpring(
    useTransform(mouseX, [-400, 400], [-5, 5]),
    springConfig,
  );
  const triangleShiftY = useSpring(
    useTransform(mouseY, [-400, 400], [-5, 5]),
    springConfig,
  );

  const bgShiftX = useSpring(
    useTransform(mouseX, [-400, 400], [15, -15]),
    springConfig,
  );
  const bgShiftY = useSpring(
    useTransform(mouseY, [-400, 400], [15, -15]),
    springConfig,
  );

  // Halo depth shifts (Depth: +25) - FIXED: Moved to top level
  const haloShiftX = useTransform(portraitShiftX, (v) => v * 1.5);
  const haloShiftY = useTransform(portraitShiftY, (v) => v * 1.5);

  // Computational fragments shift (Max 3px, opposite to portrait)
  const fragmentShiftX = useTransform(mouseX, [-400, 400], [3, -3]);
  const fragmentShiftY = useTransform(mouseY, [-400, 400], [3, -3]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile, mouseX, mouseY]);

  // 🔹 3. Portal Opening Animation
  const beamOpacity = useTransform(smoothProgress, [0.4, 0.7, 1], [0, 0.7, 0]);
  const triangleScale = useTransform(smoothProgress, [0, 0.5], [0.9, 1]);
  const energyRingScale = useTransform(smoothProgress, [0.2, 0.8], [0.6, 1.2]);
  const energyRingOpacity = useTransform(
    smoothProgress,
    [0.2, 0.5, 0.8],
    [0, 1, 0],
  );

  const trianglePath =
    "M 50 10 L 88 84 Q 90 88 85 88 L 15 88 Q 10 88 12 84 L 50 10 Z";

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[600px] h-[550px] flex items-center justify-center pointer-events-none mb-10"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="absolute inset-0 z-0 opacity-15"
        style={{
          x: isMobile ? 0 : bgShiftX,
          y: isMobile ? 0 : bgShiftY,
          backgroundImage:
            "radial-gradient(circle, #7042f8 1.5px, transparent 1.5px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* 🔹 Layer: Computational Background (Code fragments + Data flow) */}
      <motion.div
        className="absolute inset-0 z-[5]"
        style={{
          x: isMobile ? 0 : fragmentShiftX,
          y: isMobile ? 0 : fragmentShiftY,
        }}
      >
        <ComputationalBackground isMobile={isMobile} />
      </motion.div>

      <motion.div
        className="absolute bottom-[10%] md:bottom-[15%] w-[320px] h-[320px] md:w-[400px] md:h-[400px] z-10 flex items-center justify-center opacity-80"
        style={{
          x: isMobile ? 0 : triangleShiftX,
          y: isMobile ? 0 : triangleShiftY,
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          scale: triangleScale,
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_0_20px_rgba(6,182,212,0.4)] overflow-visible"
        >
          <defs>
            <linearGradient id="portalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <filter id="portalGlow">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <path
            d={trianglePath}
            fill="rgba(8, 10, 15, 0.45)"
            style={{ backdropFilter: "blur(16px)" }}
          />

          <path
            d={trianglePath}
            fill="none"
            stroke="url(#portalGrad)"
            strokeWidth="1.2"
            className="opacity-90"
          />

          <motion.path
            d={trianglePath}
            fill="none"
            stroke="#06b6d4"
            strokeWidth="1.5"
            strokeDasharray="20 180"
            animate={{ strokeDashoffset: [0, -200] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            filter="url(#portalGlow)"
          />
        </svg>

        <div
          className="absolute inset-0 flex items-center justify-center overflow-hidden"
          style={{ clipPath: `path("${trianglePath}")` }}
        >
          <motion.div
            className="w-[250%] h-[250%] bg-[conic-gradient(from_0deg,transparent,#06b6d4,#8b5cf6,transparent,#06b6d4,transparent)] opacity-40"
            animate={{ rotate: 360 }}
            transition={{ duration: 7, ease: "linear", repeat: Infinity }}
          />
        </div>

        <motion.div
          className="absolute w-48 h-48 border-[1.5px] border-cyan-400 rounded-full blur-[2px] opacity-40"
          style={{ scale: energyRingScale, opacity: energyRingOpacity }}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full bg-cyan-500/15 blur-[60px] rounded-full" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] md:bottom-[25%] w-32 h-[450px] z-20 origin-bottom"
        style={{ opacity: beamOpacity }}
      >
        <div className="w-full h-full bg-gradient-to-t from-cyan-400/50 via-violet-500/10 to-transparent blur-2xl" />
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="w-full h-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"
            animate={{ y: [0, -450] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute z-40 w-72 h-80 md:w-80 md:h-96 will-change-transform pointer-events-auto"
        style={{
          y: isMobile ? 0 : portraitShiftY,
          x: isMobile ? 0 : portraitShiftX,
          translateY: yReveal,
          opacity: opacityReveal,
          scale: scaleReveal,
          filter: blurReveal,
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
        }}
      >
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
          className="w-full h-full relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 rounded-[2.2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

          <div className="relative w-full h-full overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <Image
              src="/Jubair's pic.png"
              alt="Jubair Ibn Khaled"
              width={400}
              height={500}
              className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 brightness-[1.05]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-50 pointer-events-none"
        style={{
          x: isMobile ? 0 : haloShiftX,
          y: isMobile ? 0 : haloShiftY,
          background:
            "radial-gradient(circle at center, rgba(112, 66, 248, 0.06) 0%, transparent 65%)",
        }}
      />
    </div>
  );
};

export default PortraitPortal;
