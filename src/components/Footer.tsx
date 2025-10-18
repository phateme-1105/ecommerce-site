import { assets } from "../assets/assets";
import Accordion from "./Accordion";

const Footer = () => {
  const items1 = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Our Store", link: "/contact" },
  ];
  const items2 = [
    { name: "+1-212-456-7890", link: `tel:${"+1-212-456-7890"}` },
    {
      name: "contact@foreveryou.com",
      link: `mailto:${"contact@foreveryou.com"}`,
    },
  ];
  return (
    <div className="px-[30px] pt-[30px]  bg-gray-50 ">
      <div className=" flex flex-col gap-4 sm:grid  grid-cols-[1.3fr_1fr_1fr] sm:items-center text-sm pb-5">
        <div>
          <img className="w-28 mb-5" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            possimus assumenda nostrum deleniti praesentium atque itaque, enim
            ab est eos earum eligendi ipsam quae nisi, molestiae, quaerat porro.
            Deleniti, aspernatur.
          </p>
        </div>
        <Accordion title="COMPANY" items={items1} />

        <Accordion title="GET IN TOUCH" items={items2} />
      </div>
      <div>
        <hr className="text-gray-300" />
        <p className="py-5 text-sm text-center">Copyright 2025 </p>
      </div>
    </div>
  );
};

export default Footer;
