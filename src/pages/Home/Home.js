import { motion } from "framer-motion";
import React from "react";
import { Squares } from "./components/Squares";
import { Marquee } from "./components/Marquee";

const marqueeVariants = {
  animate: {
    x: [0, -1250],
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 37,
        ease: "linear",
      },
    },
  },
};

export const Home = () => {
  return (
    <motion.div
      className="h-screen w-full flex flex-col justify-between bg-white dark:bg-black dark:text-gray-50  p-1"
      exit={{ x: "-100vw" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div>
        <div>
          <Marquee animation={marqueeVariants} />
        </div>
        <div>
          <Squares />
        </div>
      </div>
    </motion.div>
  );
};
