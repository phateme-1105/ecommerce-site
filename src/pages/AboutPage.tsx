import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const AboutPage = () => {
  return (
    <>
      <div className="block container">
        <div data-aos="flip-left" className="text-2xl text-center pb-10">
          <Title text1="ABOUT" text2="US" />
        </div>
        <div className=" flex flex-col md:flex-row md:justify-center gap-16 ">
          <img
            className="w-full md:max-w-[400px] lg:max-w-[450px] object-cover rounded-xl"
            src={assets.about_img}
            alt="about us"
          />
          <div className="flex flex-col justify-center gap-6 md:w-1/2 text-gray-600">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              temporibus expedita voluptatem, voluptas vitae molestias velit
              totam quae corrupti accusantium, sit maxime obcaecati, modi magni!
              Corporis ipsam officiis non hic.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              minima enim quae expedita minus alias molestias ab totam cumque
              fugiat, amet debitis iure impedit quidem voluptatem nam eum
              tempore sapiente.
            </p>
            <p className="font-bold">Our Mission</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              corrupti dicta similique pariatur cumque et voluptatibus harum
              aspernatur quis deleniti alias tenetur explicabo, eius cupiditate
              quasi debitis odio quia fuga?
            </p>
          </div>
        </div>
      </div>
      <div className="block container">
        <div className="text-xl ">
          <Title text1="WHY" text2="CHOOSE US" />
        </div>
        <div className="flex flex-col md:flex-row text-sm ">
          <div className="border border-gray-100 px-10 py-8 md:px-20 md:py-16 flex flex-col gap-5">
            <p className="font-bold">Quality Assurance:</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              corporis?
            </p>
          </div>
          <div className="border border-gray-100 px-10 py-8 md:px-20 md:py-16 flex flex-col gap-5">
            <p className="font-bold">Convenience:</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              corporis?
            </p>
          </div>
          <div className="border border-gray-100 px-10 py-8 md:px-20 md:py-16 flex flex-col gap-5">
            <p className="font-bold">Exceptional Customer Service:</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              corporis?
            </p>
          </div>
        </div>
      </div>
      <NewsletterBox />
    </>
  );
};

export default AboutPage;
