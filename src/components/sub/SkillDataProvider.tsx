"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  Code,
  Palette,
  Atom,
  Layers,
  Globe,
  FileCode,
  Zap,
  Move,
  CreditCard,
  Server,
  Database,
  Wind,
  FileJson,
  Cpu,
} from "lucide-react";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  name: string;
}

const iconMap: { [key: string]: any } = {
  "Html 5": Code,
  Css: Palette,
  "Java Script": FileJson,
  "Tailwind Css": Wind,
  React: Atom,
  Redux: Layers,
  "React Query": Globe,
  "Type Script": FileCode,
  "Next js 13": Zap,
  "Framer Motion": Move,
  "Stripe Payment": CreditCard,
  "Node js": Server,
  "Mongo db": Database,
};

const SkillDataProvider = ({ src, width, height, index, name }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const [imageError, setImageError] = useState(false);
  const FallbackIcon = iconMap[name] || Cpu;

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const animationDelay = 0.05;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{
        delay: index * animationDelay,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{ y: -10 }}
      className="flex items-center justify-center"
    >
      <div className="relative group cursor-pointer w-28 h-28 md:w-36 md:h-36 rounded-3xl flex flex-col items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-primary/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-12 h-12 mb-3 relative group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
          {!imageError ? (
            <Image
              src={src}
              alt={name}
              width={width}
              height={height}
              className="object-contain"
              onError={() => setImageError(true)}
            />
          ) : (
            <FallbackIcon className="w-full h-full text-primary" />
          )}
        </div>
        <span className="text-[10px] md:text-sm font-bold text-gray-400 group-hover:text-white text-center px-2 z-10 break-words w-full uppercase tracking-tighter">
          {name}
        </span>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </motion.div>
  );
};

export default SkillDataProvider;
