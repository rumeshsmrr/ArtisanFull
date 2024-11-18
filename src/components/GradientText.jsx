import React from "react";
import { motion } from "framer-motion";

// GradientText component for rendering text with an animated gradient stroke
const GradientText = ({ text }) => {
  return (
    <motion.div
      className="relative flex justify-center items-center w-full h-[80%] select-none"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="font-bold text-7xl text-transparent bg-clip-text"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(245, 158, 11, 0.7), rgba(239, 68, 68, 0.7), rgba(59, 130, 246, 0.7), rgba(6, 182, 212, 0.7), rgba(139, 92, 246, 0.7))",
          backgroundSize: "200% 200%",
          animation: "gradientAnimation 6s linear infinite",
        }}
      >
        {text}
      </motion.h1>

      <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default GradientText;
