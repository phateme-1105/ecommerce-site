import useRelatedProducts from "../hooks/useRelatedProducts";
import ProductItem from "./ProductItem";
import Title from "./Title";

interface Props {
  category: string;
  type: string;
  id: string;
}

const RelatedProducts = ({ category, type, id }: Props) => {
  const {
    data: items,
    error,
    isLoading,
  } = useRelatedProducts(category, type, id);

  if (error) throw error;
  if (isLoading) return <p>Loading... </p>;
  return (
    <div>
      <div className="block container">
        <div className="text-center text-3xl pb-2  ">
          <Title text1="RELATED" text2="PRODUCTS" />
        </div>
        <div className="custom flex gap-4 overflow-x-auto pb-4 ">
          {items?.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              img={item.image}
              price={item.price}
              className="flex-shrink-0 w-40  "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
