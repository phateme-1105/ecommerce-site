import useLatestProducts from "../hooks/useLatestProducts";
import ProductItem from "./ProductItem";
import Title from "./Title";

const LatestCollection = () => {
  const { data: product, error, isLoading } = useLatestProducts();

  return (
    <div className="container block">
      <div className="text-center pb-10 text-2xl sm:text-3xl ">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {product?.map(({ _id, image, name, price }) => (
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

export default LatestCollection;
