import React from "react";
import useNewsData from "../hooks/useNewsData";
import CustomPagination from "./CustomPagination";
import { useSelector } from "react-redux";

function NewsList() {
  const {category, currentPage} = useSelector(state=>state.customState);

  const pageSize = 5;

  const { newsData, loading, error } = useNewsData(category);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error.message}</div>;
  }

  const totalArticles = newsData.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = newsData.slice(startIndex, endIndex);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentArticles?.map((article) => (
          <div key={article.url} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-48 object-cover" src={article.urlToImage} alt="No Image Found" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-700">{article.description}</p>
              <a className="text-blue-500 hover:underline" href={article.url}>Read More</a>
            </div>
          </div>
        ))}
      </div>
      <CustomPagination
        totalPages={totalPages}
      />
    </div>
  );
}

export default NewsList;
