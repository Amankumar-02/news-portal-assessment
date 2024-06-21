import React from "react";
import 'remixicon/fonts/remixicon.css'
import { categoryData } from "../utils";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setCurrentPage } from "../reduxFeatures/customStateMgr";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.customState);
  const navigate = useNavigate();

  const handleCategoryClick = (selectedCategory) => {
    dispatch(setCategory(selectedCategory));
    dispatch(setCurrentPage(1));
    navigate("/");
  };
  
  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(setCurrentPage(1));
    navigate("/");
  };

  return (
    <>
      <div className="sticky top-0 left-0 z-50 bg-red-500 shadow p-4 mb-4">
        <div className="container mx-auto flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between items-center">
          <a href="/" className="text-2xl font-bold text-white">
            News App
          </a>
          <div className="flex items-center justify-center flex-wrap space-x-2 lg:space-x-6">
            {categoryData.map((item, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(`${item.toLowerCase()}`)}
                className="text-white font-bold transition-all hover:scale-[1.1]"
              >
                {item}
              </button>
            ))}
          </div>
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              value={category}
              onChange={(e) => {
                dispatch(setCategory(e.target.value));
                dispatch(setCurrentPage(1));
                navigate("/");
              }}
              name="search"
              autoComplete="off"
              required
              className="px-2 py-1 rounded-lg rounded-e-none border border-gray-300 outline-none"
            />
            <div className="bg-white text-gray-400 py-1 px-2 rounded-lg rounded-s-none border border-gray-300 cursor-pointer transition-all hover:scale-[1.1]" onClick={handleSearch}>
            <i className="ri-search-line"></i>
            </div>
            <button
              type="submit"
              className="px-2 py-1 bg-blue-500 text-white rounded-lg hidden"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NavBar;
