import { FiSearch, FiUser, FiChevronDown } from "react-icons/fi";
import SearchBar from "../Layouts/SearchBar";
import DashboardSummary from "./DashboardSummary";
import TopArticles from "./TopArticles";
import TopStories from "./TopStories";
import Advertisements from "./Advertisements";

const MainContent = () => {
  return (
    <div className="w-full">
      <div className="mb-4 flex items-center justify-between bg-whhite  shadow-sm p-0  rounded-md">
        <SearchBar />
        <div className="user flex justify-between items-center mx-4">
          {/* Calendar */}
          <div className="flex items-center space-x-2 mr-4">
            <div>
              <input
                type="date"
                className="bg-transparent border-b border-gray-700 focus:outline-none text-sm text-black"
              />
            </div>
            <span className="text-black">Or</span>
            <div>
              <input
                type="date"
                className="bg-transparent border-b border-gray-700 focus:outline-none text-sm text-black"
              />
            </div>
          </div>
          {/* User Avatar and Dropdown */}
          <div className="flex justify-evenly items-center">
            <div className="user-left flex items-center">
              <div>
                <FiUser className="text-gray-300 mr-2" />
              </div>
              <div>
                <span className="text-black text-xs"> Welcome Back</span>
                <h4 className="text-sm font-semibold text-black">
                  Aditya Dixit
                </h4>
              </div>
            </div>
            <div className="user-right">
              <FiChevronDown className="ml-1 text-black" />
            </div>
          </div>
        </div>
      </div>

      {/* dashboard summary */}
      <div className="mt-10">
        <DashboardSummary />
      </div>

      {/* top articles */}
      <div className="mt-10">
        <TopArticles />
      </div>

      {/* top stories */}
      <div className="mt-10">
        <TopStories />
      </div>
      {/* advertisements */}
      <div className="mt-10">
        <Advertisements />
      </div>
    </div>
  );
};

export default MainContent;
