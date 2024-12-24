import React from "react";

function ProjectCard(props) {
  return (
    <div className=" md:grid-cols-2 lg:grid-cols-3  border-0 border-gray-200 rounded-lg shadow-lg bg-white py-2 px-4 mt-3 flex flex-wrap z-50 gap-2 justify-evenly items-center">
      <div className="image name relative block overflow-hidden rounded-lg  z-50 px-1 py-3">
        <div className=" title">
          <h3 className="text-gray-700 text-sm tracking-widest uppercase mb-2">
            {props.content.name}
          </h3>
        </div>
        <img
          alt="Portfolio"
          src={props.content.image}
          className="object-cover transition duration-500 group-hover:scale-105 sm:h-72 xl:h-80"
        />
        <a
          href={props.content.codeLink}
          className=" bg-slate-600 text-white px-2 py-1 text-xs rounded-bl-lg rounded-lg mt-3"
        >
          Get Code
        </a>
      </div>
      <div className="description text-gray-500 text-sm  mb-2 md:w-[30%] md:text-xl">
        <p>{props.content.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
