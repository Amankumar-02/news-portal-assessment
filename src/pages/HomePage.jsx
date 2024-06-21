import { categoryData } from "../utils";
import { NewsList } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setCurrentPage } from "../reduxFeatures/customStateMgr";

function HomePage() {
  const dispatch = useDispatch();
  const { category, currentPage } = useSelector(state=>state.customState);

  const handleCategoryClick = (selectedCategory) => {
    dispatch(setCategory(selectedCategory));
    dispatch(setCurrentPage(1));
  };

  return (
    <>
      <div className="relative">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="hidden lg:block lg:w-1/5">
              <h5 className="font-bold text-lg mb-2">Categories</h5>
              <div className="flex flex-col space-y-2">
                {categoryData.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategoryClick(`${item.toLowerCase()}`)}
                    className="text-gray-700 hover:text-blue-500 text-start"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:w-4/5">
              <h3 className="text-2xl font-bold mb-4 ms-4 lg:ms-0">
                {category
                  ? `${
                      category.charAt(0).toUpperCase() + category.slice(1)
                    } related news`
                  : "Top News"}
              </h3>
              <NewsList/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
