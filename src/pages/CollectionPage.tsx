import { useState } from "react";
import { RxChevronRight } from "react-icons/rx";
import CategorySelector from "../components/CategorySelector";
import ProductItem from "../components/ProductItem";
import SortSelector from "../components/SortSelector";
import Title from "../components/Title";
import TypeSelector from "../components/TypeSelector";
import useProducts from "../hooks/useProducts";

const CollectionPage = () => {
  const { data, error, isLoading } = useProducts();
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className=" container">
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 mt-8 ">
        {/* Filter Options */}

        <div className="min-w-60 ">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 cursor-pointer text-xl p-[30px] mb-2 text-gray-700"
          >
            FILTERS
            <RxChevronRight
              className={`sm:hidden transition-all ${
                showFilter ? "rotate-90" : ""
              }`}
            />
          </p>
          <div className="px-[30px] sm:pr-0">
            <CategorySelector showFilter={showFilter} />
            <TypeSelector showFilter={showFilter} />
          </div>
        </div>
        {/* Second sections */}
        <div className="flex-1">
          <div className="p-[30px]">
            <div className="flex justify-between text-base sm:text-xl ">
              <div className="hidden md:block">
                <Title text1="ALL" text2="COLLECTIONS" />
              </div>
              <SortSelector />
            </div>
          </div>
          {/* Products */}
          <div className="px-[30px]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
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
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
