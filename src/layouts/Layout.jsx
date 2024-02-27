import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { motion, useIsPresent } from "framer-motion";

const Layout = () => {
  const isPresent = useIsPresent();

  return (
    <div className="bg-black">
      <Navbar />
      <Outlet />

      {/* Putting the motion div here will add the page transitions for all routes */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 left-0 w-full h-screen bg-[#FFF6E9] text-black flex items-center justify-center"
      >
        <span className="font-bold text-xl">Transition</span>
      </motion.div>
    </div>
  );
};

export default Layout;
