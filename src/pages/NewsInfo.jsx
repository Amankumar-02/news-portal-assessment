import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function NewsInfo() {
  const { newsTitle } = useParams();
  const navigate = useNavigate();
  const { newsInfoData } = useSelector((state) => state.customState);
  console.log(newsInfoData);

  if (!newsInfoData || newsInfoData.length <= 0) {
    useEffect(() => {
      navigate("/");
    }, []);
    return null;
  }

  return (
    <>
      <div className="w-full lg:w-[80%] m-auto flex items-center flex-col mb-10">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={newsInfoData.urlToImage}
          alt="Image not found"
        />
        <div className="py-6 px-4 lg:px-10 lg:text-center">
          <h2 className="text-xl lg:text-3xl font-bold mb-4 leading-6">
            {newsInfoData.title}
          </h2>
          <p className="text-gray-700 text-lg lg:text-xl overflow-hidden mb-2 leading-5 lg:leading-normal">
            {newsInfoData.description}
          </p>
          <p className="text-gray-700 lg:text-lg overflow-hidden leading-5 lg:leading-6 italic">
            {newsInfoData.content}
          </p>
        </div>
        <a
          className="bg-blue-500 py-2 px-4 rounded-lg text-white font-semibold transition-all hover:scale-[1.1]"
          href={newsInfoData.url}
          target="_blank"
        >
          Go to official link
        </a>
      </div>
    </>
  );
}

export default NewsInfo;
