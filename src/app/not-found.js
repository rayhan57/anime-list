import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-[90vh] flex justify-center items-center">
      <div className="text-center">
        <h1 className="font-bold text-7xl md:text-8xl bg-gradient-to-tr from-teal-500 to-teal-800 p-2 text-transparent bg-clip-text">
          Oops!
        </h1>
        <h2 className="font-semibold text-sm md:text-lg mt-4">
          404 - PAGE NOT FOUND
        </h2>
        <p className="text-xs md:text-lg mt-2">
          We are sorry but the page you are looking for does not exist.
        </p>
        <Link href="/">
          <button
            type="button"
            className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-2 rounded-md mt-4 shadow-lg text-sm"
          >
            GO TO HOMEPAGE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
