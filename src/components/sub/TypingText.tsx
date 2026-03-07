"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface TypingTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
}

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

export const TypingText = ({
  text,
  className,
  once = true,
  delay = 0,
}: TypingTextProps) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={className}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap">
          {Array.from(word).map((char, j) => (
            <motion.span
              key={j}
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {/* Add space after word if it's not the last one */}
          {i !== words.length - 1 && (
            <motion.span variants={letterVariants} className="inline-block">
              &nbsp;
            </motion.span>
          )}
        </span>
      ))}
    </motion.span>
  );
};

interface TypingContainerProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  stagger?: number;
  delay?: number;
}

export const TypingContainer = ({
  children,
  className,
  once = true,
  stagger = 0.02,
  delay = 0,
}: TypingContainerProps) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.p
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={className}
    >
      {children}
    </motion.p>
  );
};

export const TypingSegment = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap">
          {Array.from(word).map((char, j) => (
            <motion.span
              key={j}
              variants={letterVariants}
              className={`inline-block ${className || ""}`}
            >
              {char}
            </motion.span>
          ))}
          {/* Add space if not the last word OR if there was a trailing space in original text */}
          {(i !== words.length - 1 || text.endsWith(" ")) && (
            <motion.span
              variants={letterVariants}
              className={`inline-block ${className || ""}`}
            >
              &nbsp;
            </motion.span>
          )}
        </span>
      ))}
    </>
  );
};
