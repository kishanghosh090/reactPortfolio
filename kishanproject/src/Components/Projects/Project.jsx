import React from "react";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import geminClone from "../../assets/gemini-clone.png";
import weatherApp from "../../assets/weatherApp.png";
function Project() {
  const container = {
    geminiClone: {
      name: "Gemini Clone (API Integration)",
      description:
        " This project is a clone of the Gemini UI, designed to provide users with an intuitive and responsive interface Utilizing the Gemini API,the application offers real-time data, the interface is crafted to mirror the original Gemini platform while incorporating unique enhancements for improved usability. Explore the power of cryptocurrency trading with this sleek, functional, and visually appealing clone",
      image: geminClone,
      codeLink: "https://github.com/kishanghosh090/gemini",
    },
    weatherApp: {
      name: "Weather App (API)",
      description: `Curious about tomorrow's weather? Need to know if it's a good day for soccer practice? Our app is here to help! Just enter your city or , and it'll give you the latest forecast.click get code button to get code of this APP`,
      image: weatherApp,
      codeLink: "https://github.com/kishanghosh090/weatherAppProject",
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-slate-900 text-white rounded-t-3xl z-40"
    >
      <div className=" isolate px-6  z-40 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] z-30"
          />
        </div>
        {/* main content */}
        <div className="py-12 ">
          <div className="webProjects bg-green-900 px-2 py-4 rounded-2xl">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-7xl">
              Web Devlopment Projects
            </h1>
            <ProjectCard content={container.geminiClone} />
            <ProjectCard content={container.weatherApp} />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
