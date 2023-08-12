"use client";
import { SearchIcon } from "../../../../public/icons";
import { useState, useEffect, useRef } from "react";
import IconButton from "../_atoms/button/IconButton";
import SlideIn from "@/app/animation/SlideIn";

function SearchDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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
              <SearchIcon
                width={16}
                height={16}
                className="absolute top-[13px] left-3"
              />
              <input
                type="text"
                placeholder="Search products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 pl-8 border w-full rounded-full"
              />
            </div>
          </SlideIn>
        </div>
      )}
    </div>
  );
}

export default SearchDialog;
