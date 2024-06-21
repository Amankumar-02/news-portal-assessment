import React from "react";
import { categoryData } from "../utils";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setCurrentPage } from "../reduxFeatures/customStateMgr";

function NavBar() {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.customState);

  const handleCategoryClick = (selectedCategory) => {
    dispatch(setCategory(selectedCategory));
    dispatch(setCurrentPage(1));
  };

  const handleSearch = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="sticky top-0 left-0 bg-gray-100 shadow p-4 mb-4">
        <div className="container mx-auto flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between items-center">
          <a href="/" className="text-2xl font-bold">
            News App
          </a>
          <div className="flex lg:hidden gap-2 lg:gap-4">
            {categoryData.map((item, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(`${item.toLowerCase()}`)}
                className="text-gray-700 hover:text-blue-500"
              >
                {item}
              </button>
            ))}
          </div>
          <form onSubmit={handleSearch} className="flex space-x-2">
            <input
              type="text"
              placeholder="Search"
              value={category}
              onChange={(e) => {
                dispatch(setCategory(e.target.value));
                //   setCategory(e.target.value);
              }}
              name="search"
              autoComplete="off"
              required
              className="px-4 py-2 rounded border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
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
