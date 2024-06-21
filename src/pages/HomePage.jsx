import { NewsList } from "../components";
import { useSelector } from "react-redux";

function HomePage() {
  const { category } = useSelector(state=>state.customState);

  return (
    <>
      <div className="relative">
        <div className="container mx-auto w-full lg:w-[80%]">
              <NewsList/>
        </div>
      </div>
    </>
  );
}

export default HomePage;
