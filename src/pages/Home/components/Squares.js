import { motion } from "framer-motion";
import React from "react";
import { useContext } from "react/cjs/react.development";
import LanguageContext from "../../../context/Language/languageContext";
// import ProfilePhoto from "../../../static/imgs/profile.webp";

const container1 = {
  init: { scale: 0, y: 0 },
  animate: {
    scale: 1.2,
    y: -40,
    x: 40,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 0.4,
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};
const container2 = {
  init: { scale: 0, y: 0 },
  animate: {
    scale: 0.9,
    y: -45,
    x: 20,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 0.7,
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};
const marqueeVariantsX = {
  animate: {
    x: [-50, 50],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 5,
        ease: "linear",
      },
    },
  },
};
const marqueeVariantsY = {
  animate: {
    y: [-200, 200],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15,
        ease: "linear",
      },
    },
  },
};
export const Squares = () => {
  const { text } = useContext(LanguageContext);

  return (
    <div className="flex mobile:flex-wrap w-full justify-around mobile:items-center overflow-hidden h-auto">
      {/* portfolio link */}
      <motion.div
        variants={container1}
        initial="init"
        animate="animate"
        drag
        dragConstraints={{ left: 10, right: 10, bottom: 20, top: 30 }}
        whileTap={{ scale: 1.1 }}
        className="w-96 h-64 m-10 mobile:-mr-20 bg-black dark:bg-white flex justify-center items-center shadow-xl overflow-hidden"
      >
        <div className="flex text-white dark:text-black text-2xl leading-8 overflow-hidden">
          <motion.span
            variants={marqueeVariantsX}
            animate="animate"
            className="flex justify-between items-center space-x-20 w-full  text-justify font-mono text-5xl font-black  leading-none "
          >
            Javascript React Redux NodeJS Serverless
          </motion.span>
        </div>
      </motion.div>
      <motion.div
        drag
        dragConstraints={{ left: 10, right: 10, bottom: 20, top: 30 }}
        whileTap={{ scale: 1.1 }}
        variants={container2}
        initial="init"
        animate="animate"
        className="w-96 h-64 border-2 dark:border-white border-transparent  m-10 mobile:-ml-20 bg-black  flex justify-center items-center shadow-xl overflow-hidden"
      >
        <div className="text-white text-2xl overflow-hidden space-y-4">
          {text.home.square.skill.map((title, index) => {
            return (
              <motion.h1
                variants={marqueeVariantsY}
                initial="initial"
                animate="animate"
                className="flex justify-between items-center space-x-20 w-full font-mono text-5xl font-black text-right leading-none"
                key={index}
              >
                {title}
              </motion.h1>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
