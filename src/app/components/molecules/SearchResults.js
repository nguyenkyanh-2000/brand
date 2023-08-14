// molecules/SearchResults.js
import React from "react";

function SearchResults({ filteredResults, searchTerm }) {
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
