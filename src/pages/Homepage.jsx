import React from "react";

const Homepage = () => {
  return (
    <div className="h-screen bg-[#213343] flex items-center justify-center text-heading-1">
      <h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
        className="text-2xl bg-gradient-to-r from-[#c4ddf1] via-[#71edef] to-[#b9daf6] bg-clip-text text-transparent"
      >
        This is Homepage
      </h1>
    </div>
  );
};

export default Homepage;
