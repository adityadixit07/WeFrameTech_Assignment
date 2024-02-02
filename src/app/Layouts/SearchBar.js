// components/SearchBar.js

import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className="relative">
      <div className="flex items-center  py-2">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiSearch className="text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search here..."
          className="bg-transparent border-none focus:outline-none text-sm text-black pl-8"
        />
      </div>
    </div>
  );
};

export default SearchBar;
