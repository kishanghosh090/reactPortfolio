import React from "react";
import { motion } from "framer-motion";
import Education from "../Education/Education.jsx";
import { TypeAnimation } from "react-type-animation";
import kishan from "../../assets/kishan.jpeg";
import iitm from "../../assets/iitm.jpg";
import gour from "../../assets/gour.jpg";
import Technologies from "../Technologies/Technologies.jsx";
import TechProgress from "../TechProgress/TechProgress.jsx";
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-neutral-950 rounded-t-3xl   z-50 transition-opacity py-4 pb-6"
    >
      <div className="text-center px-6 pt-3">
        <div className="flex justify-between items-center  mx-auto max-w-full py-2 px-3 bg-slate-800 rounded-2xl mb-4">
          <div className="image  h-20 w-20">
            <img src={kishan} alt="" className="image h-20 w-20 rounded-full" />
          </div>
          <h1 className="text-balance text-xl font-semibold tracking-tight sm:text-7xl ">
            <TypeAnimation
              sequence={[
                "I Am A Web Developer",
                2000,
                "I Am A Tech Enthusiast",
                2000,
                "I Am A Mobile Developer",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500  tracking-tight text-transparent bg-clip-text"
            />
          </h1>
        </div>
      </div>
      <div className="education mt-3">
        <h1 className="text-4xl  text-center bg-neutral-900 rounded-lg mx-4 py-2 font-extrabold text-white">
          Education
        </h1>
        <Education
          collageImage={iitm}
          collagename="Indian Institue of Technology Madras"
          discription=" I'm a dedicated college student of IITM with a passion for exploring
            data-driven solution! As a college student passionate about data
            science, I've been exploring various projects."
        />
        <Education
          collageImage={gour}
          collagename="Gour Mahavidyalya"
          discription="A dedicated 1st-year Computer Science student with a growing expertise in software development and problem-solving. Proficient in technologies like javascript, Python, and Linux systems, with hands-on experience in various projects. Eager to expand my skills and contribute to cutting-edge technological solutions"
        />
      </div>
      <div className=" isolate px-6 pt-14 lg:px-8">
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
      <div className="mt-10 flex items-center justify-center gap-x-6 mb-16 text-white">
        <Technologies />
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6 mb-16 text-white">
        <TechProgress />
      </div>
    </motion.div>
  );
}
