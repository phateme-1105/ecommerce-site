import React, { useContext, useEffect, useRef, useState } from "react";
import { SearchContext } from "../context/searchProvider";
import { CiSearch } from "react-icons/ci";
import useProductQueryStore from "../store/productQueryStore";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { showSearch } = useContext(SearchContext);
  const [isVisible, setIsVisible] = useState(true);
  const setSearchText = useProductQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) setIsVisible(true);
    else setIsVisible(false);
  });

  return showSearch && isVisible ? (
    <div className="container   text-center pt-10 ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) setSearchText(ref.current.value);
        }}
        className="inline-flex justify-center items-center border border-gray-400 1 px-5 py-2 rounded-full w-3/4 sm:w-1/2 "
      >
        <input
          ref={ref}
          className="flex-1 w-0 bg-inherit text-sm focus:outline-none"
          type="text"
          placeholder="Search..."
        />
        <button type="submit">
          <CiSearch size={25} />
        </button>
      </form>
    </div>
  ) : null;
};

export default SearchBar;
