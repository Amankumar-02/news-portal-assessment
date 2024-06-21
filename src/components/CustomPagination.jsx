import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../reduxFeatures/customStateMgr";

function CustomPagination({ totalPages}) {
  const dispatch = useDispatch();
  const { currentPage } = useSelector(state=>state.customState)
  const handlePageClick = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const renderPageItems = () => {
    const pageItems = [];
    for (let i = 1; i <= totalPages; i++) {
      pageItems.push(
        <button
          key={i}
          className={`px-3 py-1 rounded ${i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => dispatch(setCurrentPage(i))}
        >
          {i}
        </button>
      );
    }
    return pageItems;
  };

  return (
    <div className="flex justify-center space-x-2 my-4">
      <button
        className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-gray-200'}`}
        disabled={currentPage === 1}
        onClick={() => handlePageClick(currentPage - 1)}
      >
        Prev
      </button>
      {renderPageItems()}
      <button
        className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-gray-200'}`}
        disabled={currentPage === totalPages}
        onClick={() => handlePageClick(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default CustomPagination;

