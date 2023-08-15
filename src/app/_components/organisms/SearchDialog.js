"use client";

import { SearchIcon } from "../../../../public/icons";
import { useState, useEffect, useRef } from "react";
import IconButton from "../atoms/button/IconButton";
import SlideIn from "@/app/_components/animation/SlideIn";
import SearchResults from "../molecules/SearchResults";
import SearchBar from "../molecules/SearchBar";
import { useProductStore } from "@/app/_store/productStore";

function SearchDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const inputRef = useRef(null);
  const { products, fetchProducts } = useProductStore((state) => {
    return { products: state.products, fetchProducts: state.fetchProducts };
  });

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsDialogOpen(false);
      setSearchTerm("");
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
    const filtered = products.filter((result) =>
      result.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(filtered);
  }, [searchTerm, products]);

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
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              {searchTerm && (
                <SearchResults
                  searchTerm={searchTerm}
                  filteredResults={filteredResults}
                  setFilteredResults={setFilteredResults}
                />
              )}
            </div>
          </SlideIn>
        </div>
      )}
    </div>
  );
}

export default SearchDialog;
