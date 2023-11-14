"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const Search = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = searchRef.current.value;
    if (searchValue === "") {
      return;
    }
    router.push(`/search/${searchValue}`);
  };

  return (
    <div className="w-auto relative md:ms-auto mr-2">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          id="search"
          className="border-none rounded-md focus:ring-1 focus:ring-black"
          placeholder="Cari film..."
          ref={searchRef}
          required
        />
        <i
          className="fa-solid fa-magnifying-glass absolute top-3 right-3 cursor-pointer"
          onClick={handleSearch}
        ></i>
      </form>
    </div>
  );
};

export default Search;
