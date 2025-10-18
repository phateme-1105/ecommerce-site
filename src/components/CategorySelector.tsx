import useProductQueryStore from "../store/productQueryStore";

interface Props {
  showFilter: boolean;
}

const CategorySelector = ({ showFilter }: Props) => {
  const categories = ["Men", "Women", "Kids"];
  const toggleCategory = useProductQueryStore((s) => s.toggleCategory);
  const productQuery = useProductQueryStore((s) => s.productQuery);
  return (
    <div
      className={`${
        showFilter ? "" : "hidden"
      } transition-all sm:block border pl-5 py-3  border-gray-300 mb-6 rounded-2xl `}
    >
      <p className="mb-3 text-sm font-medium">CATEGORIES</p>

      <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
        {categories.map((item, index) => (
          <div key={index} className="flex gap-2 cursor-pointer ">
            <input
              className="w-3 cursor-pointer"
              type="checkbox"
              value={item}
              checked={productQuery.category?.includes(item)}
              onChange={() => toggleCategory(item)}
            />{" "}
            <p
              className={`hover:text-gray-900 hover:font-medium ${
                productQuery.category?.includes(item) ? "text-black" : ""
              }`}
              onClick={() => toggleCategory(item)}
            >
              {item}|
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
