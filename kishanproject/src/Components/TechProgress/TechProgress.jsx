import { CircularProgress } from "@nextui-org/react";
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
export default function TechProgress() {
  return (
    <div className="py-2 px-4">
      <h1 className="text-3xl text-center bg-neutral-900 rounded-lg px-4 py-2 font-extrabold text-white ">
        Technologies Progress
      </h1>
      <div className="languages  bg-neutral-900 px-5 py-3  mt-4 flex justify-center flex-col gap-4 rounded-2xl">
        <h1 className="ttext-tiny uppercase font-bold">
          Languages & Runtime Environment
        </h1>
        <div className="Languages  flex flex-wrap gap-4 p-5 border-b-2">
          <div className="js bg-white text-black  rounded-lg flex justify-center items-center gap-4 p-5 flex-col ">
            <span className="text-yellow-400 bg-slate-900 w-[60px] flex justify-center items-center h-[60px] rounded-full p-2 text-4xl ">
              {" "}
              <DiJavascript />
            </span>
            <span>
              <CircularProgress
                color="success"
                className="text-green-500"
                showValueLabel={true}
                size="lg"
                value={70}
              />
            </span>
          </div>
          <div className="nodejs bg-white text-black  rounded-lg flex justify-center items-center flex-col gap-4 p-5">
            <span className="text-green-400 bg-slate-900 w-[60px] flex justify-center items-center h-[60px] rounded-full p-2 text-4xl">
              <FaNodeJs />
            </span>
            <span>
              <CircularProgress
                color="success"
                className="text-green-500"
                showValueLabel={true}
                size="lg"
                value={70}
              />
            </span>
          </div>
          <div className="Python bg-white text-black  rounded-lg flex justify-center items-center flex-col gap-4 p-5">
            <span className="text-blue-600 bg-slate-900 w-[60px] flex justify-center items-center h-[60px] rounded-full p-2 text-4xl">
              <IoLogoPython />
            </span>
            <CircularProgress
              className="text-orange-500"
              showValueLabel={true}
              size="lg"
              value={60}
            />
          </div>
          <div className="cpp bg-white text-black  rounded-lg flex justify-center items-center flex-col gap-4 p-5">
            <span className="text-blue-400 bg-slate-900 w-[60px] flex justify-center items-center h-[60px] rounded-full p-2 text-4xl">
              <TbBrandCpp />
            </span>
            <CircularProgress
              color="success"
              className="text-green-500"
              showValueLabel={true}
              size="lg"
              value={70}
            />
          </div>
          <div className="html bg-white text-black  rounded-lg flex justify-center items-center flex-col gap-4 p-5">
            <span className="text-orange-500 bg-slate-900 w-[60px] flex justify-center items-center h-[60px] rounded-full p-2 text-4xl">
              <FaHtml5 />
            </span>
            <CircularProgress
              color="success"
              className="text-green-500"
              showValueLabel={true}
              size="lg"
              value={90}
            />
          </div>
          <div className="css bg-white text-black  rounded-lg flex justify-center items-center flex-col gap-4 p-5">
            <span className="text-sky-400 bg-slate-900 w-[60px] flex justify-center items-center h-[60px] rounded-full p-2 text-4xl">
              <IoLogoCss3 />
            </span>
            <CircularProgress
              color="success"
              className="text-green-500"
              showValueLabel={true}
              size="lg"
              value={90}
            />
          </div>
        </div>
        <h1 className="text-tiny uppercase font-bold">
          Libraries & Frameworks
        </h1>
        <div className="Libraries border-b-2 flex flex-wrap gap-4 p-5">
          <div className="js bg-white text-black  rounded-lg flex justify-center items-center gap-4 p-5 flex-col ">
            <span className="text-white bg-slate-900 w-[60px] flex justify-center items-center h-[60px] rounded-full p-2 text-4xl ">
              {" "}
              <SiExpress />
            </span>
            <span>
              <CircularProgress
                color="success"
                className="text-green-500"
                showValueLabel={true}
                size="lg"
                value={70}
              />
            </span>
          </div>
          <div className="nodejs bg-white text-black  rounded-lg flex justify-center items-center flex-col gap-4 p-5">
            <span className="text-cyan-300 bg-slate-900 w-[60px] flex justify-center items-center h-[60px] rounded-full p-2 text-4xl">
              <FaReact />
            </span>
            <span>
              <CircularProgress
                color="success"
                className="text-green-500"
                showValueLabel={true}
                size="lg"
                value={70}
              />
            </span>
          </div>
          <div className="Python bg-white text-black  rounded-lg flex justify-center items-center flex-col gap-4 p-5">
            <span className="text-green-700 bg-slate-900 w-[60px] flex justify-center items-center h-[60px] rounded-full p-2 text-4xl">
              <SiDjango />
            </span>
            <CircularProgress
              className="text-orange-500"
              showValueLabel={true}
              size="lg"
              value={60}
            />
          </div>
          <div className="cpp bg-white text-black  rounded-lg flex justify-center items-center flex-col gap-4 p-5">
            <span className="text-sky-300 bg-slate-900 w-[60px] flex justify-center items-center h-[60px] rounded-full p-2 text-4xl">
              <SiTailwindcss />
            </span>
            <CircularProgress
              color="success"
              className="text-green-500"
              showValueLabel={true}
              size="lg"
              value={70}
            />
          </div>
        </div>
        <h1 className="text-tiny uppercase font-bold">Databases</h1>
        <div className="Libraries border-b-2 flex flex-wrap gap-4 p-5 ">
          <div className="js bg-white text-black  rounded-lg flex justify-center items-center gap-4 p-5 flex-col ">
            <span className="text-cyan-600 bg-slate-900 w-[60px] flex justify-center items-center h-[60px] rounded-full p-2 text-4xl ">
              {" "}
              <BiLogoPostgresql />
            </span>
            <span>
              <CircularProgress
                color="success"
                className="text-green-500"
                showValueLabel={true}
                size="lg"
                value={70}
              />
            </span>
          </div>
          <div className="nodejs bg-white text-black  rounded-lg flex justify-center items-center flex-col gap-4 p-5">
            <span className="text-green-300 bg-slate-900 w-[60px] flex justify-center items-center h-[60px] rounded-full p-2 text-4xl">
              <SiMongodb />
            </span>
            <span>
              <CircularProgress
                color="success"
                className="text-green-500"
                showValueLabel={true}
                size="lg"
                value={70}
              />
            </span>
          </div>
        </div>
        <h1 className="text-tiny uppercase font-bold">Other tools</h1>
        <div className="Libraries  flex flex-wrap gap-4 p-5 ">
          <div className="js bg-white text-black  rounded-lg flex justify-center items-center gap-4 p-5 flex-col ">
            <span className="text-amber-600 bg-slate-900 w-[60px] flex justify-center items-center h-[60px] rounded-full p-2 text-4xl ">
              {" "}
              <FaGitAlt />
            </span>
            <span>
              <CircularProgress
                color="success"
                className="text-green-500"
                showValueLabel={true}
                size="lg"
                value={70}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
