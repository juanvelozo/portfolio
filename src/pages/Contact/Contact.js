import { motion } from "framer-motion";
import React from "react";

export const Contact = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      className="h-screen w-full flex flex-col justify-evenly items-center overflow-hidden"
    >
      <div className="h-full w-full  dark:bg-black dark:text-white">
        <h1 className="font-mono text-4xl">Mail Me!</h1>
      </div>
      <div className="">
        <h1 className="font-mono text-4xl">Let's keep on touch</h1>
      </div>
    </motion.div>
  );
};
