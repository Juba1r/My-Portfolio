"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

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

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Message sent successfully!");
      setTimeout(() => setStatus(""), 3000);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-full min-h-screen py-32 z-[20] relative overflow-hidden"
    >
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#b49bff] via-[#00d4ff] to-[#ff00cc] mb-20 text-center"
      >
        Get In Touch
      </motion.h1>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-[1200px]">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-3xl font-bold text-foreground">
            Let's build something{" "}
            <span className="text-primary italic">extraordinary</span>.
          </h2>
          <p className="text-foreground/60 text-lg leading-relaxed">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-foreground/5 rounded-2xl flex items-center justify-center border border-foreground/10 group-hover:border-primary group-hover:bg-primary/10 transition-all">
                <Mail className="text-primary w-6 h-6" />
              </div>
              <div>
                <p className="text-foreground/50 text-sm font-medium uppercase tracking-wider">
                  Email Me
                </p>
                <p className="text-foreground font-bold text-lg">
                  jubairibnkhaled@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <a
                href="https://wa.me/8801947270303"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-foreground/5 rounded-2xl flex items-center justify-center border border-foreground/10 group-hover:border-secondary group-hover:bg-secondary/10 transition-all"
              >
                <WhatsAppIcon className="text-secondary w-6 h-6" />
              </a>
              <div>
                <p className="text-foreground/50 text-sm font-medium uppercase tracking-wider">
                  Whatsapp
                </p>
                <p className="text-foreground font-bold text-lg">
                  +880 1947 270303
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-foreground/5 rounded-2xl flex items-center justify-center border border-foreground/10 group-hover:border-accent group-hover:bg-accent/10 transition-all">
                <MapPin className="text-accent w-6 h-6" />
              </div>
              <div>
                <p className="text-foreground/50 text-sm font-medium uppercase tracking-wider">
                  Location
                </p>
                <p className="text-foreground font-bold text-lg">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <motion.a
              whileHover={{ scale: 1.2, y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://wa.me/8801947270303"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-foreground/5 border border-foreground/10 text-foreground/70 hover:text-white hover:bg-[#25D366] hover:border-[#25D366]/20 transition-all duration-300"
              aria-label="Whatsapp"
            >
              <WhatsAppIcon className="w-6 h-6 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://www.linkedin.com/in/jubairibnkhaled/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-foreground/5 border border-foreground/10 text-foreground/70 hover:text-white hover:bg-[#0077B5] hover:border-[#0077B5]/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://www.facebook.com/Jubairibnkhaled/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-foreground/5 border border-foreground/10 text-foreground/70 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2]/20 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="mailto:jubairibnkhaled@gmail.com"
              className="p-4 bg-foreground/5 border border-foreground/10 text-foreground/70 hover:text-white hover:bg-[#EA4335] hover:border-[#EA4335]/20 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="glass-card p-10 rounded-3xl border border-foreground/10 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-3xl -z-10" />
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-gray-400 text-sm font-medium uppercase tracking-widest"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="p-4 bg-foreground/5 border border-foreground/10 rounded-xl text-foreground focus:border-primary focus:bg-foreground/10 focus:outline-none transition-all"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-gray-400 text-sm font-medium uppercase tracking-widest"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="p-4 bg-foreground/5 border border-foreground/10 rounded-xl text-foreground focus:border-secondary focus:bg-foreground/10 focus:outline-none transition-all"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-gray-400 text-sm font-medium uppercase tracking-widest"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="p-4 bg-foreground/5 border border-foreground/10 rounded-xl text-foreground focus:border-accent focus:bg-foreground/10 focus:outline-none transition-all resize-none"
                required
              ></textarea>
            </div>

            <button
              disabled={status === "Sending..."}
              type="submit"
              className="group relative flex items-center justify-center gap-3 p-5 bg-primary text-white font-bold rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(112,66,248,0.4)] active:scale-95 disabled:opacity-50"
            >
              <span className="relative z-10">{status || "Send Message"}</span>
              <Send
                className={`w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10 ${status ? "animate-pulse" : ""}`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
