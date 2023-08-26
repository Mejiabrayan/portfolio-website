'use client'
import { motion } from "framer-motion";
import { useState } from "react";

const fallDown = {
  init: {
    y: "0%"
  },

  hover: (i: number) => ({
    y: "-100%",
    transition: { ease: [0.25, 1, 0.5, 1], delay: i * 0.015 }
  }),

  exit: (i: number) => ({
    y: "0%",
    transition: { ease: [0.83, 0, 0.17, 1], delay: i * 0.024 }
  })
};

export default function Hover({ children }: { children: string }) {
  const [variant, setVariant] = useState("init");

  const letters = children.split("").map((letter, i) => (
    <motion.span
      className="relative inline-block"
      key={i}
      custom={i}
      variants={fallDown}
      animate={variant}
    >
      {letter}
    </motion.span>
  ));

  return (
    <span
      onMouseEnter={() => setVariant("hover")}
      onMouseLeave={() => setVariant("exit")}
      className="relative leading-none inline-flex overflow-hidden uppercase"
    >
      <motion.span transition={{ staggerChildren: 0.1 }}>{letters}</motion.span>
      <motion.span
        transition={{ staggerChildren: 0.1 }}
        className="absolute top-0 left-0 translate-y-full"
      >
        {letters}
      </motion.span>
    </span>
  );
}
