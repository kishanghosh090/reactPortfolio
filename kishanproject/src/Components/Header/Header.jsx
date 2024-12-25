import React from "react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navMenu = function () {
    setIsOpen(!isOpen);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className=" text-black px-5 py-4 z-50 md:px-20 "
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl ">Kishan Rana Ghosh</h1>

        <button
          className="bg-gradient-to-tr border border-pink-600 shadow-lg z-[50] px-2 py-0 text-2xl  text-slate-700 rounded-full"
          onClick={navMenu}
        >
          Menu
        </button>
      </div>
      {isOpen && (
        <div className="transition-transform z-50 ">
          <motion.div className="absolute top-[55px] left-0 bg-slate-200 text-slate-900 text-4xl  h-[30%] w-[100vw] p-14 flex flex-col gap-12 transition-transform shadow-2xl rounded-sm z-50 rounded-b-3xl ">
            <NavLink to="https://github.com/kishanghosh090">
              <li className="hover:text-[#66aaf9] cursor-pointer flex gap-4 bg-pink-600 w-auto py-2 px-3 rounded-full justify-start items-center md:w-[50%]">
                <FaGithub />
                Github
              </li>
            </NavLink>
            <NavLink to="https://in.linkedin.com/in/kishan-rana-ghosh-8b95832b9">
              <li className="hover:text-[#66aaf9] cursor-pointer flex gap-4 bg-pink-600 w-auto py-2 px-3 rounded-full justify-start items-center md:w-[50%]">
                <FaLinkedin />
                Linkedin
              </li>
            </NavLink>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

export default Header;
