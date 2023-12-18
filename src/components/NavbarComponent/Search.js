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
    <div className="w-[80%] lg:w-auto lg:ms-auto lg:mr-2 relative">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          id="search"
          className="w-full border-none rounded-md focus:ring-1 focus:ring-black"
          placeholder="Cari film..."
          ref={searchRef}
          required
        />
        <i
          className="fa-solid fa-magnifying-glass absolute cursor-pointer bg-white rounded-md p-3 top-0 right-0"
          onClick={handleSearch}
        ></i>
      </form>
    </div>
  );
};

export default Search;
