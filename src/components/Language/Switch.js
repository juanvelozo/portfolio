import { motion } from "framer-motion";
import React from "react";
import { IoLanguage, IoCloseOutline } from "react-icons/io5";
import { useContext } from "react/cjs/react.development";
import LanguageContext from "../../context/Language/languageContext";

export const Switch = ({ close }) => {
  const { handleLang } = useContext(LanguageContext);
  return (
    <div className="bg-white dark:bg-black dark:text-white shadow-sm flex flex-col justify-center items-center space-y-6 border-2 select-none">
      <div className="border shadow-sm w-full h-auto flex justify-between items-center px-2 py-1 ">
        <motion.button
          onClick={close}
          whileTap={{ scale: 0.8 }}
          className="border hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-transparent transition duration-75 ease-in-out"
        >
          <IoCloseOutline />
        </motion.button>
        <h1 className="text-lg">Language</h1>
        <IoLanguage />
      </div>

      <div
        className="space-x-4 p-5 text-lg"
        onChange={handleLang}
        onClick={close}
      >
        <button onClick={handleLang} value="en" className="">
          ESP
        </button>
        <button onClick={handleLang} value="es" className="">
          ENG
        </button>
      </div>
    </div>
  );
};
