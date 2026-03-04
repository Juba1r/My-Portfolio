"use client";

import React, { ReactNode, useRef, useEffect } from "react";
import { motion, useTransform, useSpring, MotionValue } from "framer-motion";

interface SpatialPanelProps {
  children: ReactNode;
  index: number;
  scrollYProgress: MotionValue<number>;
  totalLayers: number;
}

const SpatialPanel = ({
  children,
  index,
  scrollYProgress,
  totalLayers,
}: SpatialPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const layerDepth = 1200; // Increased spacing for more breathing room
  const initialZ = -index * layerDepth;

  const totalTravel = (totalLayers - 1) * layerDepth;

  const z = useTransform(
    scrollYProgress,
    [0, 1],
    [initialZ, initialZ + totalTravel],
  );

  // Opacity: Sharper fade peaks at z=0
  const opacity = useTransform(
    z,
    [initialZ, -layerDepth * 0.5, 0, layerDepth * 0.3, layerDepth * 0.6],
    [0, 1, 1, 0, 0],
  );

  const blur = useTransform(
    z,
    [-layerDepth, -layerDepth * 0.3, 0, layerDepth * 0.3],
    ["blur(12px)", "blur(0px)", "blur(0px)", "blur(8px)"],
  );

  const scale = useTransform(
    z,
    [-layerDepth, 0, layerDepth * 0.5],
    [0.85, 1, 1.1],
  );

  const springZ = useSpring(z, { stiffness: 80, damping: 30 }); // Slightly lazier spring for premium feel

  // Handle nested scrolling correctly by stopping propagation if over the panel
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const el = panelRef.current;
      if (!el) return;

      // If the panel content is scrollable and we are hovering it
      const isScrollable = el.scrollHeight > el.clientHeight;
      if (isScrollable) {
        const atTop = el.scrollTop === 0;
        const atBottom = el.scrollHeight - el.scrollTop === el.clientHeight;

        // If scrolling down and not at bottom, or scrolling up and not at top
        if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) {
          e.stopPropagation(); // Stop window from scrolling Z-axis
        }
      }
    };

    const element = panelRef.current;
    if (element) {
      element.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (element) element.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <motion.div
      style={{
        z: springZ,
        opacity,
        filter: blur,
        scale,
        transformStyle: "preserve-3d",
      }}
      className="absolute inset-0 flex items-center justify-center p-4 md:p-10 pointer-events-none"
    >
      <motion.div
        ref={panelRef}
        whileHover={{ z: 30, scale: 1.01 }}
        className="w-full max-w-7xl h-full max-h-[85vh] overflow-y-auto pointer-events-auto glass-container rounded-[28px] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] relative group bg-black/40 backdrop-blur-md custom-scrollbar"
      >
        {/* Holographic Border Shine */}
        <div className="absolute inset-0 rounded-[28px] border border-primary/20 pointer-events-none group-hover:border-primary/50 transition-colors duration-700 z-50" />

        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-[28px] shadow-[inset_0_0_100px_rgba(112,66,248,0.1)] pointer-events-none" />

        {/* Content Section */}
        <div className="relative z-10 w-full p-6 md:p-12 flex flex-col items-center">
          {children}
        </div>

        {/* Reflective Sheen Layer */}
        <div className="absolute top-0 left-0 w-full h-[150%] bg-gradient-to-b from-white/10 to-transparent skew-y-[-15deg] -translate-y-1/2 pointer-events-none rotate-[20deg] opacity-30" />
      </motion.div>

      {/* Persistent floating oscillation */}
      <motion.div
        animate={{ y: [-5, 5, -5], rotateZ: [-0.5, 0.5, -0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 pointer-events-none w-full h-full"
      />
    </motion.div>
  );
};

export default SpatialPanel;
