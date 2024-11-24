import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import PalmEmoji from "./PalmEmoji";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]" id="home">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">
          Hi{" "}
          <span>
            <PalmEmoji emoji="✋" />
          </span>{" "}
          , My name is
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Monsoon Parajuli
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] hover:text-yellow-200 duration-300">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] hover:text-stone-50 duration-300 tracking-wide">
          I'm a full stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently,I'm focused on
          building responsive full-stack web applications.
        </p>

        <div>
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="flex items-center"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowRight className="ml-3" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
