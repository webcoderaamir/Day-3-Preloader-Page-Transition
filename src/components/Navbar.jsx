import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full bg-[#fe704d] px-[5vw] fixed p-5 text-black flex items-center justify-between z-[99] mix-blend-soft-difference">
      <a className="text-2xl" href="">Transition</a>
      <nav className="flex gap-6 text-lg">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
      </nav>
    </header>
  );
};

export default Navbar;
