import React from "react";
import { Search } from "lucide-react";
const SearchBar = () => {
  return (
    <div className="flex justify-start items-center space-x-3 mx-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-full"
      />
      <div className="bg-violet-500 h-10 w-10 flex justify-center items-center cursor-pointer rounded-xl">
        <Search className=" text-black" />
      </div>
    </div>
  );
};

export default SearchBar;
