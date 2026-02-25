"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-glass z-[20] w-full md:w-[380px] shadow-2xl transition-all hover:border-primary/50"
    >
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
      </div>

      <div className="relative p-6 flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h1>
          <p className="mt-2 text-foreground/60 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-xl text-foreground text-sm font-medium hover:bg-foreground/10 transition-all">
            <Github className="w-4 h-4" />
            Code
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-xl text-primary text-sm font-medium hover:bg-primary/30 transition-all">
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </button>
        </div>
      </div>

      {/* Animated border bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};

export default ProjectCard;
