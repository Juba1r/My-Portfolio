"use client";

import React from "react";
import { motion } from "framer-motion";
import { Skill_data } from "@/constants";
import SkillDataProvider from "./sub/SkillDataProvider";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-6 h-full relative overflow-hidden py-32 z-[20]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center mb-10 w-full text-center"
      >
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#b49bff] via-[#00d4ff] to-[#ff00cc] mb-4">
          My Tech Stack
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-[600px] px-6">
          A suite of modern technologies I use to build world-class digital
          experiences.
        </p>
      </motion.div>

      <div className="flex flex-row justify-center flex-wrap mt-4 gap-8 items-center max-w-[1200px] px-6">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            name={image.skill_name}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
