import React from "react";
import { DiJavascript } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
function Technologies() {
  return (
    <div className="py-2 px-4">
      <h1 className="text-3xl text-center bg-slate-800 rounded-lg px-4 py-2 font-extrabold text-white ">
        Technologies
      </h1>
      <div className="technologies bg-slate-800 px-5 py-3  mt-4 flex justify-center flex-col gap-4 rounded-xl">
        <h1 className="text-2xl text-left p-2 rounded-xl bg-slate-600">
          Languages and Runtime Environment
        </h1>
        <div className="Languages bg-white text-black text-5xl rounded-lg flex flex-wrap gap-4 p-5">
          <div className="text-yellow-400 bg-slate-900 w-[65px] flex justify-center items-center h-[65px] rounded-full p-2">
            <DiJavascript />
          </div>

          <div className="text-blue-600 bg-slate-900 w-[65px] flex justify-center items-center h-[65px] rounded-full p-2">
            <IoLogoPython />
          </div>
          <div className="text-blue-400 bg-slate-900 w-[65px] flex justify-center items-center h-[65px] rounded-full p-2">
            <TbBrandCpp />
          </div>
          <div className="text-orange-500 bg-slate-900 w-[65px] flex justify-center items-center h-[65px] rounded-full p-2">
            <FaHtml5 />
          </div>
          <div className="text-sky-400 bg-slate-900 w-[65px] flex justify-center items-center h-[65px] rounded-full p-2">
            <IoLogoCss3 />
          </div>
          <div className="text-green-400 bg-slate-900 w-[65px] flex justify-center items-center h-[65px] rounded-full p-2">
            <FaNodeJs />
          </div>
        </div>
        <h1 className="text-2xl text-left p-2 rounded-xl bg-slate-600">
          Frameworks & Libraries
        </h1>
        <div className="frameworks Languages bg-white text-black text-5xl rounded-lg flex flex-wrap gap-4 p-5">
          <div className="text-white bg-slate-900 w-[65px] flex justify-center items-center h-[65px] rounded-full p-2">
            <SiExpress />
          </div>
          <div className="text-cyan-300 bg-slate-900 w-[65px] flex justify-center items-center h-[65px] rounded-full p-2">
            <FaReact />
          </div>
          <div className="text-green-700 bg-slate-900 w-[65px] flex justify-center items-center h-[65px] rounded-full p-2">
            <SiDjango />
          </div>
          <div className="text-sky-300 bg-slate-900 w-[65px] flex justify-center items-center h-[65px] rounded-full p-2">
            <SiTailwindcss />
          </div>
        </div>
        <h1 className="text-2xl text-left p-2 rounded-xl bg-slate-600">Databases</h1>
        <div className="database Languages bg-white text-black text-5xl rounded-lg flex flex-wrap gap-4 p-5">
          <div className="text-green-300 bg-slate-900 w-[65px] flex justify-center items-center h-[65px] rounded-full p-2">
            <SiMongodb />
          </div>
          <div className="text-cyan-600 bg-slate-900 w-[65px] flex justify-center items-center h-[65px] rounded-full p-2">
            <BiLogoPostgresql />
          </div>
        </div>
        <h1 className="text-2xl text-left p-2 rounded-xl bg-slate-600">other tools</h1>
        <div className="tools Languages bg-white text-black text-5xl rounded-lg flex flex-wrap gap-4 p-5">
          <div className="text-amber-600 bg-slate-900 w-[65px] flex justify-center items-center h-[65px] rounded-full p-2">
            <FaGitAlt />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
