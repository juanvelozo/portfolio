import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../toggleDarkLight/darkMode";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import LanguageContext from "../../context/Language/languageContext";
import { Modal } from "../../Modal/Modal";

export const NavBar = () => {
  const { text } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);

  const handleNavBar = () => {
    setOpen(!open);
  };
  const containerVariants = {
    open: {
      height: `100vh`,
      transition: {
        staggerChildren: 0.2,
        childrenDelay: 3,
      },
    },
    closed: {
      height: `0`,
      transition: {
        staggerChildren: 0.2,
        when: "afterChildren",
        staggerDirection: -1,
        childrenDelay: 1,
      },
    },
  };
  const menuItemsVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <>
      <nav className="h-auto p-4 flex mobile:relative justify-around mobile:justify-between mobile:px-10 items-center dark:bg-black dark:text-gray-50">
        {/* burger button */}
        <div className="md:hidden">
          <motion.div
            className=" flex text-4xl"
            onClick={handleNavBar}
            whileTap={{ scale: 0.8 }}
          >
            {open ? <IoCloseOutline /> : <GiHamburgerMenu />}
          </motion.div>
        </div>
        <Link to="/" className="font-bold text-2xl mobile:text-4xl md:hidden">
          JV
        </Link>

        {/* navbar desktop */}
        <div className="flex w-full justify-around items-center mobile:hidden">
          <Link to="/" className="font-bold text-2xl">
            JV
          </Link>
          <Link to="/portolio" className="  ">
            {text.navbar.links[0]}
          </Link>
          <Link to="/about" className="  ">
            {text.navbar.links[1]}
          </Link>
          <Link to="/contact" className="  ">
            {text.navbar.links[2]}
          </Link>
          <div className="flex space-x-4 items-center text-2xl">
            <DarkMode />
            <Modal />
          </div>
        </div>
      </nav>
      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="bg-white dark:bg-black absolute dark:text-white h-screen w-screen flex flex-col justify-start items-center z-50 md:hidden"
            variants={containerVariants}
            initial={`closed`}
            animate={open ? `open` : `closed`}
            exit={`closed`}
          >
            <motion.div
              variants={menuItemsVariants}
              initial={{ opacity: 0 }}
              whileTap={{ scale: 0.8 }}
              className=" w-full flex justify-center items-center text-4xl h-1/5 "
            >
              <Link
                to="/portolio"
                className="text-6xl"
                onClick={() => {
                  setOpen(false);
                }}
              >
                {text.navbar.links[0]}
              </Link>
            </motion.div>
            <motion.div
              variants={menuItemsVariants}
              initial={{ opacity: 0 }}
              whileTap={{ scale: 0.6 }}
              className=" w-full flex justify-center items-center text-4xl h-1/5 "
            >
              <Link
                to="/about"
                className="text-6xl"
                onClick={() => {
                  setOpen(false);
                }}
              >
                {text.navbar.links[1]}
              </Link>
            </motion.div>
            <motion.div
              variants={menuItemsVariants}
              initial={{ opacity: 0 }}
              whileTap={{ scale: 0.6 }}
              className=" w-full flex justify-center items-center text-4xl h-1/5 "
            >
              <Link
                to="/about"
                className="text-6xl"
                onClick={() => {
                  setOpen(false);
                }}
              >
                {text.navbar.links[2]}
              </Link>
            </motion.div>
            <motion.div
              variants={menuItemsVariants}
              initial={{ opacity: 0 }}
              className="w-full flex justify-evenly items-center space-x-4 h-1/5 text-5xl "
            >
              <motion.div whileTap={{ scale: 0.6 }}>
                <DarkMode />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.6 }}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Modal />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
