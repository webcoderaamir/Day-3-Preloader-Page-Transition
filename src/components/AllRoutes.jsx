import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Layout from "../layouts/Layout";
import { AnimatePresence } from "framer-motion";

const AllRoutes = () => {

  // Need useLocation for framer motion to know which page is current
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AllRoutes;
