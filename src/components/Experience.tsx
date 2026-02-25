"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    location: "Remote",
    period: "2024 - Present",
    description:
      "Leading a team of developers to build scalable enterprise solutions using Next.js and Microservices architecture.",
    color: "#7042f8",
  },
  {
    title: "Freelance Developer",
    company: "Global Clients",
    location: "International",
    period: "2022 - 2024",
    description:
      "Delivered high-quality web applications for international clients, focusing on performance, SEO, and modern UI/UX.",
    color: "#00d4ff",
  },
  {
    title: "Frontend Developer",
    company: "Creative Agency",
    location: "London, UK",
    period: "2020 - 2022",
    description:
      "Specialized in creating interactive frontend experiences using GSAP and Three.js.",
    color: "#ff00cc",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-32 z-[20] relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10" />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#b49bff] via-[#00d4ff] to-[#ff00cc] mb-12 md:mb-20 text-center px-4"
      >
        My Journey
      </motion.h1>

      <div className="w-full max-w-[1000px] px-6 flex flex-col gap-8 md:gap-12 relative">
        {/* Timeline Line */}
        <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-foreground/10 -translate-x-1/2 hidden md:block" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 w-full">
              <div className="glass-card p-8 rounded-3xl border border-foreground/10 hover:border-primary/30 transition-all group relative">
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-3xl"
                  style={{ backgroundColor: exp.color }}
                />
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {exp.title}
                </h2>
                <div className="flex flex-wrap gap-4 mb-4 text-sm font-medium">
                  <span className="flex items-center gap-1 text-primary">
                    <Briefcase className="w-4 h-4" /> {exp.company}
                  </span>
                  <span className="flex items-center gap-1 text-foreground/50">
                    <Calendar className="w-4 h-4" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1 text-foreground/50">
                    <MapPin className="w-4 h-4" /> {exp.location}
                  </span>
                </div>
                <p className="text-foreground/60 leading-relaxed text-lg">
                  {exp.description}
                </p>
              </div>
            </div>

            {/* Dot in middle */}
            <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-background border-4 border-foreground/10 hidden md:flex">
              <div
                className="w-4 h-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                style={{ backgroundColor: exp.color }}
              />
            </div>

            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
