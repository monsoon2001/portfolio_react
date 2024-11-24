import React from "react";

import CSS from "../assets/css.png";
import GITHUB from "../assets/github.png";
import HTML from "../assets/html.png";
import JS from "../assets/javascript.png";
import MONGO from "../assets/mongo.png";
import NEXT from "../assets/next.png";
import NODE from "../assets/node.png";
import REACTIMG from "../assets/react.png";
import TAILWIND from "../assets/tailwind.png";
import THREE from "../assets/three.png";
import PalmEmoji from "./PalmEmoji";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-auto bg-[#0a192f] text-gray-300 pt-20"
      id="skills"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            <span>
              <PalmEmoji emoji="👉" />
            </span>{" "}
            These are the technologies I've worked with.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="html icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="html icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JS} alt="html icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={REACTIMG} alt="html icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GITHUB} alt="html icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={NODE} alt="html icon" />
            <p className="my-4">NODE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MONGO} alt="html icon" />
            <p className="my-4">MONGODB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={NEXT} alt="html icon" />
            <p className="my-4">NEXT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={THREE} alt="html icon" />
            <p className="my-4">THREE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TAILWIND} alt="html icon" />
            <p className="my-4">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
