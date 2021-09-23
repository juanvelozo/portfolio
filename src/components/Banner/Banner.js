import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <motion.div variants={banner}>
      <BannerRowCenter
        title={[
          "Juan Velozo",
          "Full Stack Developer",
          "Web Designer",
          "Tech Lover",
        ]}
        playMarquee={playMarquee}
      />
    </motion.div>
  );
};

const AnimatedLetters = ({ title }) => (
  <motion.span variants={banner} initial="initial" animate="animate">
    {title.map((letter, index) => (
      <motion.span
        key={index}
        className="font-lato text-6xl font-extrabold mx-10"
        variants={letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <motion.div animate={playMarquee}>
      <h1 className="font-lato text-3xl font-semibold w-screen">Hi, I'm</h1>

      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
      >
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
<div>
  <h1 className="font-lato text-3xl font-semibold w-screen">Hi, I'm</h1>
  <motion.div
    className="flex "
    animate={{ translateX: 100 }}
    transition={{ ease: "linear", duration: 5000, repeat: Infinity }}
  >
    <h1 className="">Juan Velozo</h1>
    <h1 className="font-lato text-6xl font-extrabold">Full Stack Developer</h1>
    <h1 className="font-lato text-6xl font-extrabold">Web Designer</h1>
    <h1 className="font-lato text-6xl font-extrabold">Tech Lover</h1>
  </motion.div>
  <h1 className="font-lato text-3xl font-semibold w-screen">
    I'm so glad that you're here :')
  </h1>
</div>;
