"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListFilm = ({ data }) => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-2 mt-4">
        {data?.map((item, index) => (
          <div
            key={index}
            className="max-w-sm overflow-hidden border shadow-md rounded-md"
          >
            <Image
              priority={true}
              width={500}
              height={500}
              src={item.images.jpg.image_url}
              alt={item.title}
            />
            <div className="p-4">
              <h5 className="text-sm font-semibold tracking-tight text-gray-900">
                {item.title}
              </h5>
              <p className="text-xs md:text-sm font-normal text-gray-700 line-clamp-3 mb-2">
                {item.synopsis}
              </p>
              <Link href={`/anime/${item.mal_id}`}>
                <button className="px-3 py-1.5 md:py-2 rounded bg-teal-500 hover:bg-teal-600 text-xs font-medium text-white">
                  Lihat lebih
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListFilm;
