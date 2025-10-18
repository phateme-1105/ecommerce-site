import React from "react";
import useBestSeller from "../hooks/useBestSeller";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { data, error, isLoading } = useBestSeller();
  return (
    <div className="block container">
      <div
        data-aos="zoom-in"
        className="text-center pb-10 text-2xl sm:text-3xl "
      >
        <Title text1="BEST" text2="SELLERS" />
        <p className="text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, facilis
          voluptate, assumenda, commodi corporis consequatur asperiores quidem
          aperiam nemo doloribus maxime voluptatem porro odio. Fugit maxime a
          eius est laborum?
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {data?.map(({ _id, image, name, price }) => (
          <ProductItem
            key={_id}
            id={_id}
            img={image}
            name={name}
            price={price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
