"use client";
import React from "react";

const PaginationComponent = ({ currentPage, setCurrentPage, totalPage }) => {
  const displayPagination = 5;

  let startPage = Math.max(currentPage - Math.floor(displayPagination / 2), 1);
  let endPage = Math.min(startPage + displayPagination, totalPage);

  const paginationItems = [];

  for (let page = startPage; page < endPage; page++) {
    paginationItems.push(
      <button
        key={page}
        className={`px-2.5 md:px-5 py-1.5 md:py-2.5 hover:text-teal-500 ${
          currentPage === page ? "pagination-active" : ""
        }`}
        onClick={() => {
          setCurrentPage(page);
          scrollToTop();
        }}
      >
        {page}
      </button>
    );
  }

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
    scrollToTop();
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
    scrollToTop();
  };

  const scrollToTop = () => window.scroll({ top: 0, behavior: "smooth" });

  return (
    <div className="mt-4 py-2 flex justify-center">
      <div className="flex gap-4 bg-slate-100 shadow-md rounded-md font-medium text-xs md:text-sm">
        <button
          className="px-2.5 md:px-5 py-1.5 md:py-2.5 hover:text-teal-500 disabled:text-slate-400"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {paginationItems}

        <button
          className="px-2.5 md:px-5 py-1.5 md:py-2.5 hover:text-teal-500 disabled:text-slate-400"
          onClick={handleNext}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;
