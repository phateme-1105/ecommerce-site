import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div id="OurPolicy" className="block container">
      <div className=" flex flex-col md:flex-row justify-around gap-12 text-center md:gap-2 text-xs sm:text-sm md:text-base text-gray-700">
        <div data-aos="fade-right" className="flex flex-col items-center gap-2">
          <img className="w-12 mb-5 m-auto" src={assets.exchange_icon} alt="" />
          <p className="font-semibold">Easy Exchange Policy</p>
          <p className="text-gray-400">we offer hassle free exchange policy</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img className="w-12 mb-5 m-auto" src={assets.quality_icon} alt="" />
          <p className="font-semibold">7 Days Return Policy</p>
          <p className="text-gray-400">We provide 7 days free return policy</p>
        </div>
        <div data-aos="fade-left" className="flex flex-col items-center gap-2">
          <img className="w-12 mb-5 m-auto" src={assets.support_img} alt="" />
          <p className="font-semibold">Best customer support</p>
          <p className="text-gray-400">we provide 24/7 customer support</p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
