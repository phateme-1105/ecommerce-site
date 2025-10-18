import React from "react";
import { Link } from "react-router-dom";
import { currency } from "../constants/constants";

interface Props {
  id: string;
  img: string[];
  name: string;
  price: number;
  className?: string;
}

const ProductItem = ({ id, img, name, price, className }: Props) => {
  return (
    <Link
      className={`text-shadow-gray-700 cursor-pointer ${className}`}
      to={`/product/${id}`}
    >
      <div className="rounded-2xl overflow-hidden">
        <img
          className=" hover:scale-105 transition-transform duration-100 ease-in-out"
          src={img[0]}
          alt="product"
        />
      </div>

      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
