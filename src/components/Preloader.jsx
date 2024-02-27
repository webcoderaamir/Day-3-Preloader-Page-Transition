import { motion } from "framer-motion";
import React from "react";

const Preloader = () => {

  const slideUpper = {
    initial: { y: 0 },
    exit: {
      y: "-100vh",
      transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
    },
  };

  return (
    <motion.div
      variants={slideUpper}
      initial="initial"
      exit="exit"
      className="w-full h-screen fixed top-0 left-0 z-[999] flex items-center justify-center bg-white"
    >

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
        className="text-black inline-block text-xl p-2"
      >
        Preloader & Page Transition
      </motion.p>

    </motion.div>
  );
};

export default Preloader;
