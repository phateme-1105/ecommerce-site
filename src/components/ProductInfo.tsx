import { useState } from "react";
import { assets } from "../assets/assets";
import { currency } from "../constants/constants";
import useCartQueryStore from "../store/cartQueryStore";
import { toast } from "react-toastify";

interface Props {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  sizes: string[];
}

const ProductInfo = ({ id, image, name, price, description, sizes }: Props) => {
  const [size, setSize] = useState("");
  const increaseItem = useCartQueryStore((s) => s.increaseItem);
  const stars = [1, 2, 3, 4];

  const handleAddToCart = () => {
    if (!size) {
      toast.error("Please Select Product Size");
      return;
    }

    increaseItem({ id, name, price, size, image });
  };

  return (
    <>
      <h1 className="font-medium mt-2 text-2xl">{name}</h1>
      <div className="flex items-center gap-1 mt-2">
        {stars.map((index) => (
          <img key={index} src={assets.star_icon} alt="star" className="w-3 " />
        ))}
        <img src={assets.star_dull_icon} className="w-3" alt="" />
      </div>
      <p className="mt-5 font-medium text-3xl">
        {currency}
        {price}
      </p>
      <p className="mt-5 text-gray-500 md:w-4/5">{description}</p>
      <div className="flex flex-col gap-4 my-8">
        <p>Select Size</p>
        <div className="flex gap-2">
          {sizes.map((s, index) => (
            <button
              onClick={() => setSize(s)}
              className={`border-gray-300 border cursor-pointer  px-4 py-2  rounded transition-all duration-200 ${
                s === size
                  ? "bg-black text-white border-black shadow-lg"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              key={index}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className=" bg-black text-white px-8 py-3 text-sm shadow-md hover:bg-gray-300 hover:text-black transition-all duration-200 rounded cursor-pointer"
      >
        ADD TO CART
      </button>
      <hr className="mt-8 sm:w-4/5 text-gray-300" />
      <div className="text-gray-500 flex flex-col gap-2 mt-5 text-sm">
        <p>✅ 100% Original product.</p>
        <p>✅ Cash on delivery is available on this product.</p>
        <p>✅ Easy return and exchange policy within 7 days.</p>
      </div>
    </>
  );
};

export default ProductInfo;
