import React from "react";
import Batur from "../assets/BH-Bali-Hero3.png";
const Hero = () => {
  return (
    // max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center justify-center pt-20
    <div className="bg-black">
      <div className="mt-0 pb-0.5 pt-10 lg:pt-0 ">
        <img
          className="w-[1000px] md:object-contain md:w-full"
          src={Batur}
          alt=""
        />
        {/* <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold md:py-2">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-3xl text-2xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="md:text-3xl sm:text-2xl text-xl font-bold pl-2"
            strings={["BTC", "BTB", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl font-bold text-gray-500 pl-2 pr-2">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platform.
        </p>
        <button className="bg-[#00df94] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button> */}
      </div>
    </div>
  );
};

export default Hero;
