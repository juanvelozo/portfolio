import { motion } from "framer-motion";
import React from "react";
import { useContext } from "react/cjs/react.development";
import LanguageContext from "../../../context/Language/languageContext";
const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};
const letterAnimation = {
  initial: {
    y: 200,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.4, 0.02, -0.05, 0.97],
      duration: 1,
    },
  },
};
export const Marquee = ({ animation }) => {
  const { text } = useContext(LanguageContext);
  return (
    <div className="w-full py-5 px-10 mobile:p-10 select-none space-y-6 overflow-hidden">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="font-lato text-3xl font-semibold "
      >
        {text.home.banner.one}
      </motion.h1>
      <div>
        <motion.div
          className="flex justify-between items-center space-x-20 w-full"
          variants={animation}
          animate="animate"
        >
          {text.home.banner.two.map((title, index) => {
            return (
              <motion.div variants={banner} key={index} animate="animate">
                <motion.h1
                  variants={letterAnimation}
                  initial="initial"
                  animate="animate"
                  className="font-lato text-9xl font-black whitespace-nowrap leading-none"
                >
                  {title}
                </motion.h1>
              </motion.div>
            );
          })}
        </motion.div>
        <div>
          <h1 className="font-lato text-3xl font-light text-right p-3">
            {text.home.banner.three}
          </h1>
        </div>
      </div>
    </div>
  );
};
