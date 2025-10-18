import React from "react";

interface Props {
  text1: string;
  text2: string;
}

const Title = ({ text1, text2 }: Props) => {
  return (
    <div className="inline-flex items-center gap-1  mb-2">
      <p className="text-gray-500">
        {text1} <span className="text-gray-600 fw-medium">{text2}</span>
      </p>
      <p className="w-8 sm:w-12 h-[2px] bg-[#414141]"></p>
    </div>
  );
};

export default Title;
