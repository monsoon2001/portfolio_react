import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
      id="about"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Monsoon, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Passionate about technology and problem-solving, I have a
              methodical approach and keen attention to detail. With expertise
              in programming, software development, and system design, I'm eager
              to explore new technologies and collaborate with others. I'm
              driven by a desire to make a meaningful impact in the field of
              computer engineering through innovation and teamwork.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
