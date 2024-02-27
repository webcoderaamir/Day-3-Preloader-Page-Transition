import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./components/AllRoutes";
import Preloader from "./components/Preloader";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  // state for the preloader
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0,0)
    }, [1100]);
  });

  return (

    <div>

      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <BrowserRouter>
        {/* Putting all the page components into a All-Routes so we can use useLocation */}
        <AllRoutes />
      </BrowserRouter>

    </div>

  );
};

export default App;
