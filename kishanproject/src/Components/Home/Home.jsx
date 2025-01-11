import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import kishan from "../../assets/kishan.jpeg";
import { motion } from "framer-motion";
import Technologies from "../Technologies/Technologies";
import Contact from "../Contact/Contact.jsx";
import { IoChatbubblesSharp } from "react-icons/io5";
import Aibot from "../Aibot/Aibot.jsx";
import { useState } from "react";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-neutral-950 text-neutral-300 rounded-t-3xl z-40"
    >
      <div className=" isolate md:px-8 px-4 pt-14 lg:px-6">
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
        <div className="mx-auto max-w-2xl py-28 sm:py-48 lg:py-56">
          <div className="text-center flex flex-col items-center gap-3">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-7xl">
              KISHAN RANA GHOSH
            </h1>
            <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-6xl ">
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
            <div>
              <p className="px-4 mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 text-left">
                I am a Developer, and I love to drink coffee, I live in Malda.
                Passinate React JS developer with 2 year of experience,
                dedicated to make impressive web experience and solving complex
                challenges.
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6 mb-4 z-50">
              <NavLink
                to="/Contact"
                className="relative inline-flex items-center rounded-md z-[100] bg-pink-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact Me <span aria-hidden="true"> → </span>
              </NavLink>
            </div>
            <div className="image h-52 w-52">
              <img
                src={kishan}
                alt=""
                className="image h-52 w-52 rounded-md rounded-br-3xl rounded-tl-3xl shadow-2xl"
              />
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Technologies />
            </div>
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
      {/* <div
        onClick={() => setIsOpen(!isOpen)}
        className="aibot absolute top-[80%] right-4 text-4xl  bg-pink-600 shadow-lg z-[50] px-2 py-2  rounded-full hover:bg-teal-500 hover:scale-110"
      >
        <IoChatbubblesSharp />
      </div>
      {isOpen && (
        <div className="aibot absolute top-[30%] left-4 z-[40]">
          <Aibot />
        </div>
      )} */}
      <Contact />
    </motion.div>
  );
}
