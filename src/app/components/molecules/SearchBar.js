// molecules/SearchBar.js
import React from "react";
import { SearchIcon } from "../../../../public/icons";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative">
      <SearchIcon
        width={16}
        height={16}
        className="absolute top-[13px] left-3 text-gray-500"
      />
      <input
        autoFocus
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 pl-8 w-full rounded-full focus:outline-0"
      />
    </div>
  );
}

export default SearchBar;
