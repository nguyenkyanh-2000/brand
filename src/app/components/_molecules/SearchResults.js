// molecules/SearchResults.js
import React, { useEffect } from "react";

const predefinedResults = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Iphone 3" },
  { id: 5, name: "Bathtub 3" },
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Iphone 3" },
  { id: 5, name: "Bathtub 3" },
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Iphone 3" },
  { id: 5, name: "Bathtub 3" },
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Iphone 3" },
  { id: 5, name: "Bathtub 3" },
  // Add more predefined results as needed
];

function SearchResults({ filteredResults, searchTerm }) {
  useEffect(() => {
    const filtered = predefinedResults.filter((result) =>
      result.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(filtered);
  }, [searchTerm]);

  return (
    <div className="mt-2 p-4 bg-white border rounded-2xl shadow-md max-h-96 overflow-y-auto">
      {filteredResults.length > 0 ? (
        filteredResults.map((result) => (
          <div key={result.id} className="py-1">
            {result.name}
          </div>
        ))
      ) : (
        <div className="flex justify-center">{`No results for "${searchTerm}"`}</div>
      )}
    </div>
  );
}

export default SearchResults;
