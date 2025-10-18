import { useParams } from "react-router-dom";
import ProductImg from "../components/ProductImg";
import ProductInfo from "../components/ProductInfo";
import useProduct from "../hooks/useProduct";
import RelatedProducts from "../components/RelatedProducts";
import { useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const { data: product, error, isLoading } = useProduct(id!);
  const [activeTab, setActiveTab] = useState("Description");

  if (isLoading) return <p>Loading...</p>;
  if (error || !product) throw error;

  return (
    <>
      <div className="block container">
        <div key={id} className="flex flex-col gap-12 sm:flex-row">
          {/* Product images */}
          <div className="flex-1">
            <ProductImg image={product.image} name={product.name} />
          </div>
          {/* Product Information */}
          <div className="flex-1">
            <ProductInfo
              id={product._id}
              image={product.image[0]}
              name={product.name}
              price={product.price}
              description={product.description}
              sizes={product.sizes}
            />
          </div>
        </div>
      </div>
      {/* Description & Review Section */}
      <div className="block container">
        <div className="">
          <div className="inline-flex border border-gray-300 overflow-hidden rounded-lg">
            {["Description", "Reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === tab
                    ? "bg-white text-black shadow"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 border border-gray-300 p-6 text-sm text-gray-500 mt-1 rounded-lg">
          {activeTab === "Description" ? (
            <>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                alias asperiores id error repellendus officiis vitae sapiente
                impedit perferendis debitis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                alias asperiores id error repellendus officiis vitae sapiente
                impedit perferendis debitis.
              </p>
            </>
          ) : (
            <p>
              Reviews section placeholder. Add user reviews here with rating
              stars, comments, etc.
            </p>
          )}
        </div>
      </div>
      {/* Related Products    */}
      <RelatedProducts
        id={product._id}
        category={product.category}
        type={product.subCategory}
      />
    </>
  );
};

export default ProductPage;
