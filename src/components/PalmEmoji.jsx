import React from "react";
import { motion } from "framer-motion";

const PalmEmoji = ({ emoji }) => {
  // Define animation logic
  const animation =
    emoji === "👇"
      ? { y: [0, 10, 0] } // Moves emoji up and down
      : { x: [-2.5, 0, 2.5, 0] }; // Moves emoji left and right

  return (
    <motion.span
      animate={animation}
      transition={{
        duration: 1.5, // Duration for one cycle
        repeat: Infinity, // Repeat animation indefinitely
        ease: "easeInOut", // Smooth transition
      }}
      style={{ display: "inline-block" }}
      className="text-2xl" // Ensures inline-block for proper movement
    >
      {emoji}
    </motion.span>
  );
};

export default PalmEmoji;
