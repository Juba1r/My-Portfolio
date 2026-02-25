"use client";

import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
  Sun,
  Moon,
  Facebook,
  Mail,
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
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav
          className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "bg-glass border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo/Name */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
              <span className="text-white font-black text-xl italic">J</span>
            </div>
            <span className="font-bold text-xl text-foreground tracking-tight hidden md:block transition-colors duration-300">
              Jubair <span className="text-primary">Ibn</span> Khaled
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.15, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="text-sm font-medium text-foreground/70 hover:text-black dark:hover:text-white transition-colors relative group"
              >
                <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(112,66,248,0.4)] dark:group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-300">
                  {link.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(112,66,248,0.5)]" />
              </motion.a>
            ))}
          </div>

          {/* Socials & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <motion.a
                whileHover={{ scale: 1.2, y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="https://wa.me/8801947270303"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-foreground/60 hover:text-white hover:bg-[#25D366] rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(37,211,102,0.4)]"
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
                className="p-2.5 text-foreground/60 hover:text-white hover:bg-[#0077B5] rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,119,181,0.4)]"
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
                className="p-2.5 text-foreground/60 hover:text-white hover:bg-[#1877F2] rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(24,119,242,0.4)]"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="mailto:jubairibnkhaled@gmail.com"
                className="p-2.5 text-foreground/60 hover:text-white hover:bg-[#EA4335] rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,67,53,0.4)]"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 transition-transform" />
              </motion.a>
            </div>
            <ModeToggle />

            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full px-6 py-4 md:hidden"
          >
            <div className="bg-glass border border-white/10 backdrop-blur-xl rounded-2xl p-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="text-lg font-medium text-foreground/70 hover:text-primary dark:hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(112,66,248,0.4)] dark:hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
