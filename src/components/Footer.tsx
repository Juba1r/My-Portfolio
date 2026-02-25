"use client";

import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  Heart,
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
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 bg-transparent text-foreground/60 z-[20] relative border-t border-foreground/5">
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
            <a href="#" className="flex items-center gap-2 group w-fit">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                <span className="text-white font-black text-xl italic">J</span>
              </div>
              <span className="font-bold text-xl md:text-2xl text-foreground tracking-tight">
                Jubair <span className="text-primary">Ibn</span> Khaled
              </span>
            </a>
            <p className="text-lg leading-relaxed max-w-[400px]">
              Crafting high-performance digital experiences with cutting-edge
              technologies. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-foreground font-bold text-lg">Platform</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#about"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-6">
            <h3 className="text-foreground font-bold text-lg">Socials</h3>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2, y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="https://wa.me/8801947270303"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-foreground/5 rounded-xl border border-foreground/10 hover:bg-[#25D366] hover:border-[#25D366]/50 hover:text-white transition-all duration-300"
                aria-label="Whatsapp"
              >
                <WhatsAppIcon className="w-5 h-5 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="https://www.linkedin.com/in/jubairibnkhaled/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-foreground/5 rounded-xl border border-foreground/10 hover:bg-[#0077B5] hover:border-[#0077B5]/50 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="https://www.facebook.com/Jubairibnkhaled/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-foreground/5 rounded-xl border border-foreground/10 hover:bg-[#1877F2] hover:border-[#1877F2]/50 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="mailto:jubairibnkhaled@gmail.com"
                className="p-3 bg-foreground/5 rounded-xl border border-foreground/10 hover:bg-[#EA4335] hover:border-[#EA4335]/50 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 transition-transform" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <p>&copy; 2026 Jubair Ibn Khaled. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
