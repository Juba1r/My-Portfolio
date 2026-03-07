"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 bg-transparent z-[20]"
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center mb-10 w-full text-center"
      >
        <h1 className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#b49bff] via-[#00d4ff] to-[#ff00cc] mb-4 text-center">
          My Work
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-[600px] px-6">
          A showcase of my recent projects, featuring modern design systems and
          interactive experiences.
        </p>
      </motion.div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 justify-center flex-wrap">
        <ProjectCard
          src="/portfolio thumbnail.png"
          title="Modern Next.js Portfolio"
          description="A futuristic portfolio built with Next.js 15, TailwindCSS v4, Framer Motion and Three.js, featuring interactive 3D elements."
        />
        <ProjectCard
          src="/forestry reserve thumbnail.png"
          title="Forestry Reserve"
          description="A global NGO platform focused on environmental awareness and fundraising, built with Next.js and secure payment integration."
          liveLink="https://forestryreserve.vercel.app/"
        />
        <ProjectCard
          src="/pizza paradise thumbnail.png"
          title="Pizza Paradise"
          description="Interactive food ordering platform with real-time updates, smoke animations, and a mouth-watering UI."
          liveLink="https://pizzaparadisepp.vercel.app/"
        />
        <ProjectCard
          src="/payside thumnail.png"
          title="Payside"
          description="A high-performance fintech business platform enabling BNPL solutions with a proprietary high-frequency payment engine and post-quantum security."
          liveLink="https://payside.vercel.app"
        />
      </div>
    </div>
  );
};

export default Projects;
