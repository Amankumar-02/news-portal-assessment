import React from "react";
import useNewsData from "../hooks/useNewsData";
import CustomPagination from "./CustomPagination";
import { useSelector, useDispatch } from "react-redux";
import { setNewsInfoData } from "../reduxFeatures/customStateMgr";
import { useNavigate } from "react-router-dom";

function NewsList() {
  const { category, currentPage } = useSelector((state) => state.customState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pageSize = 6;

  const { newsData, loading, error } = useNewsData(category);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );
  }

  const totalArticles = newsData.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = newsData.slice(startIndex, endIndex);

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4 ms-4 lg:ms-0 text-center">
        {category
          ? `${
              category.charAt(0).toUpperCase() + category.slice(1)
            } related news`
          : "Top News"}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentArticles?.map((article) => (
          <div
            key={article.url}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:drop-shadow-2xl"
          >
            <img
              className="w-full h-48 object-cover transition-all hover:scale-[1.1]"
              src={article.urlToImage}
              alt="Image not found"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 leading-6">
                {article.title.length > 30
                  ? article.title.slice(0, 30) + " ..."
                  : article.title}
              </h2>
              <p className="text-gray-700 h-[40px] overflow-hidden leading-5">
                {article.description.length > 80
                  ? article.description.slice(0, 80) + " ..."
                  : article.description}
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  className="text-blue-500 hover:underline cursor-pointer"
                  onClick={() => {
                    dispatch(setNewsInfoData(article));
                    navigate(`/info/${article.title}`);
                  }}
                >
                  Read More
                </a>
                <a
                  className="text-blue-500 hover:underline"
                  href={article.url}
                  target="_blank"
                >
                  Official Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CustomPagination totalPages={totalPages} />
    </div>
  );
}

export default NewsList;
