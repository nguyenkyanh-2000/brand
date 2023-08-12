"use client";

import { SearchIcon } from "../../../../public/icons";
import { useState, useEffect, useRef } from "react";
import IconButton from "../_atoms/button/IconButton";
import SlideIn from "@/app/animation/SlideIn";

const predefinedResults = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Iphone 3" },
  { id: 5, name: "Bathtub 3" },
  { id: 6, name: "Product 1" },
  { id: 7, name: "Product 2" },
  { id: 8, name: "Product 3" },
  { id: 9, name: "Iphone 3" },
  { id: 10, name: "Bathtub 3" },
  { id: 11, name: "Product 1" },
  { id: 12, name: "Product 2" },
  { id: 13, name: "Product 3" },
  { id: 14, name: "Iphone 3" },
  { id: 15, name: "Bathtub 3" },
  { id: 16, name: "Product 1" },
  { id: 17, name: "Product 2" },
  { id: 18, name: "Product 3" },
  { id: 19, name: "Iphone 3" },
  { id: 20, name: "Bathtub 3" },
  // Add more predefined results as needed
];

function SearchDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const inputRef = useRef(null);

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsDialogOpen(false);
    }
  };

  useEffect(() => {
    if (isDialogOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDialogOpen]);

  useEffect(() => {
    const filtered = predefinedResults.filter((result) =>
      result.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(filtered);
  }, [searchTerm]);

  return (
    <div className="flex justify-center">
      <IconButton
        width={24}
        height={24}
        Icon={SearchIcon}
        onClick={() => setIsDialogOpen(true)}
      />
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex justify-center w-screen bg-black bg-opacity-40">
          <SlideIn direction="down" duration={0.5}>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-4/5 lg:w-1/2 mt-10"
              ref={inputRef}
            >
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
              {searchTerm && (
                <div className="mt-2 p-4 bg-white border rounded-2xl shadow-md max-h-96 overflow-y-auto">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((result) => (
                      <div key={result.id} className="py-1">
                        {result.name}
                      </div>
                    ))
                  ) : (
                    <div className="flex justify-center">
                      {`No results for "${searchTerm}"`}
                    </div>
                  )}
                </div>
              )}
            </div>
          </SlideIn>
        </div>
      )}
    </div>
  );
}

export default SearchDialog;
