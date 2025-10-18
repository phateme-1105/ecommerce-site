import useProductQueryStore from "../store/productQueryStore";

interface Props {
  showFilter: boolean;
}

const TypeSelector = ({ showFilter }: Props) => {
  const types = ["Topwear", "Bottomwear", "Winterwear"];
  const productQuery = useProductQueryStore((s) => s.productQuery);
  const toggleType = useProductQueryStore((s) => s.toggleType);

  return (
    <div
      className={`${
        showFilter ? "" : "hidden"
      } transition-all sm:block border pl-5 py-3  border-gray-300 my-6 rounded-2xl`}
    >
      <p className="mb-3 text-sm font-medium"> TYPE</p>

      <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
        {types.map((item) => (
          <div className="flex gap-2">
            <input
              className="w-3 cursor-pointer"
              type="checkbox"
              value={item}
              checked={productQuery.type?.includes(item)}
              onChange={() => toggleType(item)}
            />{" "}
            <p
              className={`cursor-pointer hover:text-gray-900 hover:font-medium ${
                productQuery.type?.includes(item) ? "text-black" : ""
              }`}
              onClick={() => toggleType(item)}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeSelector;
