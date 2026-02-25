"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 z-[20]"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#b49bff] via-[#00d4ff] to-[#ff00cc] py-10 text-center"
      >
        About Me
      </motion.h1>

      <div className="flex flex-row items-center justify-center w-full px-6 md:px-[100px] gap-10 flex-wrap">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-12 rounded-3xl max-w-[800px] border border-foreground/10 relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          <p className="text-xl text-foreground/70 mb-6 leading-relaxed">
            I am a{" "}
            <span className="text-foreground font-bold">
              visionary Full Stack Developer
            </span>{" "}
            with a passion for building software that matters. My journey began
            with a curiosity for how things work, leading me to master the art
            of coding.
          </p>
          <p className="text-xl text-foreground/70 mb-6 leading-relaxed">
            With expertise in{" "}
            <span className="text-secondary font-bold">Next.js</span>,{" "}
            <span className="text-primary font-bold">React</span>, and modern
            web technologies, I craft user experiences that are not only
            functional but also{" "}
            <span className="text-accent font-bold italic">
              visually stunning
            </span>
            .
          </p>
          <p className="text-xl text-foreground/70 leading-relaxed">
            I believe in the power of{" "}
            <span className="text-foreground font-semibold">collaboration</span>{" "}
            and{" "}
            <span className="text-foreground font-semibold">innovation</span>.
            Whether it's a small project or a large-scale enterprise
            application, I bring the same level of dedication and technical
            excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
