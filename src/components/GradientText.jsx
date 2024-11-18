import React from "react";
import { motion } from "framer-motion";

// GradientText component for rendering text with an animated gradient stroke
const GradientText = ({ text }) => {
  return (
    <svg
      width="100%"
      height="80%"
      viewBox="0 0 390 100"
      xmlns="http://www.w3.org/2000/svg"
      className="select-none"
    >
      <defs>
        <motion.linearGradient
          id="animatedGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          animate={{
            x1: ["0%", "100%"],
            y1: ["0%", "100%"],
            x2: ["100%", "0%"],
            y2: ["100%", "0%"],
          }}
          transition={{
            duration: 6,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="25%" stopColor="#EF4444" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="75%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </motion.linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#animatedGradient)"
        strokeWidth="0.3"
        className="font-bold fill-transparent text-7xl"
      >
        {text}
      </text>
    </svg>
  );
};

export default GradientText;
