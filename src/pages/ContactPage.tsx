import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const ContactPage = () => {
  return (
    <div>
      <div className="block container">
        <div data-aos="flip-left" className="text-2xl text-center pb-8 ">
          <Title text1="CONTACT" text2="US" />
        </div>
        <div className=" flex flex-col justify-center md:flex-row gap-10 ">
          <img
            className="w-full md:max-w-[450px] rounded-xl"
            src={assets.contact_img}
            alt="contact_img"
          />
          <div className="flex flex-col justify-center items-start gap-6">
            <p className="font-semibold text-xl text-gray-600">Our Store</p>
            <p className="text-gray-500">
              54709 Willms Station <br /> Suit 350, Washington, USA
            </p>
            <p
              className="text-gray-500
            "
            >
              Tel: (415) 555-0132 <br /> Email: admin@forever.com
            </p>
            <p className="font-semibold text-xl text-gray-600">
              {" "}
              Careers at Forever
            </p>
            <p className="text-gray-500">
              Learn more about our teams and job openings.
            </p>
            <button className="cursor-pointer border border-black px-8 py-4 text-sm rounded hover:bg-black hover:text-white transition-all duration-300">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default ContactPage;
