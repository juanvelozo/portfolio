import { motion, AnimatePresence } from "framer-motion";

export const ModalItem = ({ children, open, close }) => {
  const dontCloseYouStupidDivItsJustForTheBackground = (e) =>
    e.stopPropagation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              duration: 0.5,
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            className="fixed bg-black dark:bg-white dark:bg-opacity-20 bg-opacity-20 z-50 top-0 left-0 w-full h-full flex justify-center items-center"
            onClick={close}
          >
            {open && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  type: "spring",
                  duration: 1,
                  opacity: 1,
                  stiffness: 1000,
                }}
                exit={{ scale: 0, opacity: 0 }}
                className="relative w-96"
                onClick={dontCloseYouStupidDivItsJustForTheBackground}
              >
                {children}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
