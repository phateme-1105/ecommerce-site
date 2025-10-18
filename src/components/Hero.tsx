import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 shadow-sm overflow-hidden">
      <div className="flex flex-col  sm:flex-row   overflow-hidden  ">
        <div
          data-aos="fade-right"
          className="w-full sm:w-1/2 flex flex-col items-center justify-center py-5 sm:py-20 "
        >
          <div className="text-[#414141] flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141] "></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl py-3 leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="text-[#414141] flex items-center gap-2">
            <p className="font-medium text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141] "></p>
          </div>
        </div>
        <img
          className="w-full max-h-100 object-cover sm:w-1/2"
          src={assets.hero_img}
          alt="clothes"
        />
      </div>
    </div>
  );
};

export default Hero;
