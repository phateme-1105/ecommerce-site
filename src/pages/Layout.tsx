import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { SearchContext } from "../context/searchProvider";

const Layout = () => {
  const location = useLocation();
  const isLoadingPage = location.pathname === "/login";
  const { showSearch, setShowSearch } = useContext(SearchContext);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ToastContainer />
      <SearchBar />
      <div className="flex-grow w-full flex justify-center  ">
        <div
          className={`w-full flex flex-col ${
            location.pathname === "/collection" ? "pt-0" : "pt-[60px]"
          } `}
        >
          <Outlet />
        </div>
      </div>

      {!isLoadingPage && <Footer />}
    </div>
  );
};

export default Layout;
