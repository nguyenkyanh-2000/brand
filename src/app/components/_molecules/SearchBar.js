// molecules/SearchBar.js
import React from "react";
import { SearchIcon } from "../../../../public/icons";

function SearchBar({ searchTerm, setSearchTerm }) {
  useEffect(() => {
    const filtered = predefinedResults.filter((result) =>
      result.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(filtered);
  }, [searchTerm]);

  return (
    <div className="relative">
      <SearchIcon
        width={16}
        height={16}
        className="absolute top-[13px] left-3 text-gray-500"
      />
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 pl-8 border w-full rounded-full"
      />
    </div>
  );
}

export default SearchBar;
