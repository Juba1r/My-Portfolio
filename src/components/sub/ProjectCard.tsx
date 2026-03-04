"use client";

import Image from "next/image";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ExternalLink, Terminal } from "lucide-react";

interface Props {
  src: string;
  title: string;
  description: string;
  liveLink?: string;
}

const ProjectCard = ({ src, title, description, liveLink }: Props) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    rotateY.set(xPct * 20);
    rotateX.set(yPct * -20);

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative h-[450px] w-full md:w-[400px] rounded-[2rem] bg-black/40 border border-white/10 overflow-hidden cursor-pointer"
    >
      {/* Digital Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]" />

      {/* Dynamic Glow Following Move */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseXSpring}px ${mouseYSpring}px,
              rgba(112, 66, 248, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Card Content Wrapper for 3D */}
      <div
        style={{ transform: "translateZ(50px)" }}
        className="relative h-full flex flex-col p-6 z-20"
      >
        <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-6 border border-white/5">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Status Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest">
              Active_Node
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors tracking-tight">
              {title}
            </h3>
            <Terminal className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />
          </div>

          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed line-clamp-3 font-medium">
            {description}
          </p>

          <div className="mt-auto pt-6 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-white/30 font-mono">
                Project_Auth
              </span>
              <span className="text-xs font-bold text-white/60">
                Jubair Ibn Khaled
              </span>
            </div>

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-2 px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group/btn overflow-hidden"
              >
                <span className="relative z-10 text-xs font-bold text-white flex items-center gap-2">
                  LIVE DEMO
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-primary opacity-0 group-hover/btn:opacity-20 transition-opacity" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Animated Corner Borders */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-[2rem] group-hover:border-primary/80 transition-colors duration-500" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-[2rem] group-hover:border-primary/80 transition-colors duration-500" />
    </motion.div>
  );
};

export default ProjectCard;
