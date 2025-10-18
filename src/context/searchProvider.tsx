import React, { use, useState } from "react";

interface SearchContextType {
  showSearch: boolean;
  setShowSearch: (show: boolean) => void;
}

export const SearchContext = React.createContext<SearchContextType>(
  {} as SearchContextType
);

interface Props {
  children: React.ReactNode;
}

const searchProvider = ({ children }: Props) => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <SearchContext.Provider value={{ showSearch, setShowSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default searchProvider;
