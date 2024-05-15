import React from "react";

import bgImg from "../assets/images/pp1.jpeg";
import Skills from "./skills";

const Hero = () => {
  return (
    <div
      name="home"
      className="hero-body w-full h-screen flex flex-col justify-between items-center"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">

        <div className="flex flex-col justify-center md:items-start w-full ">
          <h1 className="py-3 text-6xl md:text-7xl font-bold text-zinc-500 text-center">
            Bryan Peens
          </h1>
          <h1 className="text-4xl md:text-7xl font-bold text-zinc-500">
            React Developer
          </h1>
          <Skills />
        </div>

        <div className="items-center">
          <img
            className="mx-auto w-[95%] hover:w-full rounded-full"
            src={bgImg}
            alt="/"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
