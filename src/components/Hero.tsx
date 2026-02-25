"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Facebook,
} from "lucide-react";

const WhatsAppIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 510 512.459"
    {...props}
  >
    <path
      fill="currentColor"
      d="M435.689 74.468C387.754 26.471 324 .025 256.071 0 116.098 0 2.18 113.906 2.131 253.916c-.024 44.758 11.677 88.445 33.898 126.946L0 512.459l134.617-35.311c37.087 20.238 78.85 30.891 121.345 30.903h.109c139.949 0 253.88-113.917 253.928-253.928.024-67.855-26.361-131.645-74.31-179.643v-.012zm-179.618 390.7h-.085c-37.868-.011-75.016-10.192-107.428-29.417l-7.707-4.577-79.886 20.953 21.32-77.889-5.017-7.987c-21.125-33.605-32.29-72.447-32.266-112.322.049-116.366 94.729-211.046 211.155-211.046 56.373.025 109.364 22.003 149.214 61.903 39.853 39.888 61.781 92.927 61.757 149.313-.05 116.377-94.728 211.058-211.057 211.058v.011zm115.768-158.067c-6.344-3.178-37.537-18.52-43.358-20.639-5.82-2.119-10.044-3.177-14.27 3.178-4.225 6.357-16.388 20.651-20.09 24.875-3.702 4.238-7.403 4.762-13.747 1.583-6.343-3.178-26.787-9.874-51.029-31.487-18.86-16.827-31.597-37.598-35.297-43.955-3.702-6.355-.39-9.789 2.775-12.943 2.849-2.848 6.344-7.414 9.522-11.116s4.225-6.355 6.343-10.581c2.12-4.238 1.06-7.937-.522-11.117-1.584-3.177-14.271-34.409-19.568-47.108-5.151-12.37-10.385-10.69-14.269-10.897-3.703-.183-7.927-.219-12.164-.219s-11.105 1.582-16.925 7.939c-5.82 6.354-22.209 21.709-22.209 52.927 0 31.22 22.733 61.405 25.911 65.642 3.177 4.237 44.745 68.318 108.389 95.812 15.135 6.538 26.957 10.446 36.175 13.368 15.196 4.834 29.027 4.153 39.96 2.52 12.19-1.825 37.54-15.353 42.824-30.172 5.283-14.818 5.283-27.529 3.701-30.172-1.582-2.641-5.819-4.237-12.163-7.414l.011-.024z"
    />
  </svg>
);

import { useTheme } from "next-themes";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full items-center justify-center overflow-hidden z-[20]">
      {/* Background Accent */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center w-full px-5 md:px-20 z-[20]"
      >
        <div className="flex flex-col gap-8 justify-center items-center text-center m-auto max-w-[900px]">
          <motion.div
            variants={itemVariants}
            className="welcome-box py-[10px] px-[20px] border border-primary/30 rounded-full flex items-center gap-3 bg-glass backdrop-blur-md shadow-[0_0_15px_rgba(112,66,248,0.2)]"
          >
            <Sparkles className="text-primary h-5 w-5 animate-pulse" />
            <span className="text-foreground/70 text-[14px] font-medium tracking-wide uppercase">
              Senior Fullstack Developer
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-black text-foreground leading-tight tracking-tight"
          >
            Crafting Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-text-shimmer">
              Masterpieces
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-foreground/60 max-w-[700px] leading-relaxed"
          >
            Deeply passionate about building high-performance,
            <span className="text-primary font-semibold"> scalable</span>, and
            <span className="text-secondary font-semibold">
              {" "}
              visisually stunning
            </span>{" "}
            applications that push the boundaries of the web.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 mt-8"
          >
            <a
              href="#projects"
              className="group relative flex items-center gap-2 px-10 py-4 bg-primary text-white font-bold rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(112,66,248,0.5)] active:scale-95"
            >
              <span className="relative z-10">Explore Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <div className="flex items-center gap-4">
              {[
                {
                  Icon: null,
                  href: "https://wa.me/8801947270303",
                  label: "Whatsapp",
                  hoverColor: "hover:text-[#25D366]",
                  hoverBg: "hover:bg-[#25D366]/10",
                  hoverBorder: "hover:border-[#25D366]/20",
                },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/jubairibnkhaled/",
                  label: "LinkedIn",
                  hoverColor: "hover:text-[#0077B5]",
                  hoverBg: "hover:bg-[#0077B5]/10",
                  hoverBorder: "hover:border-[#0077B5]/20",
                },
                {
                  Icon: Facebook,
                  href: "https://www.facebook.com/Jubairibnkhaled/",
                  label: "Facebook",
                  hoverColor: "hover:text-[#1877F2]",
                  hoverBg: "hover:bg-[#1877F2]/10",
                  hoverBorder: "hover:border-[#1877F2]/20",
                },
                {
                  Icon: Mail,
                  href: "mailto:jubairibnkhaled@gmail.com",
                  label: "Email",
                  hoverColor: "hover:text-[#EA4335]",
                  hoverBg: "hover:bg-[#EA4335]/10",
                  hoverBorder: "hover:border-[#EA4335]/20",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2, y: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`p-4 rounded-2xl bg-foreground/5 border border-foreground/10 text-foreground/70 hover:text-white ${social.hoverBg.replace("/10", "")} ${social.hoverBorder} transition-all duration-300 active:scale-95 shadow-sm hover:shadow-lg`}
                  aria-label={social.label}
                >
                  {social.label === "Whatsapp" ? (
                    <WhatsAppIcon className="w-6 h-6 transition-transform" />
                  ) : (
                    social.Icon && (
                      <social.Icon className="w-6 h-6 transition-transform" />
                    )
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/30 rotate-180 [writing-mode:vertical-lr]">
          Scroll
        </span>
      </motion.div>
    </div>
  );
};

export default Hero;
