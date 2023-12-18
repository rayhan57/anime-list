"use client";
import { removeAnimeFromFavorite } from "@/app/libs/fetching-data";
import Image from "next/image";
import React, { useState } from "react";

const ListFavorite = ({ favoriteAnime, user_email }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [title, setTitle] = useState("");

  const removeAnime = async (mal_id, title) => {
    await removeAnimeFromFavorite(mal_id, user_email);
    setShowAlert(true);
    setTitle(title);

    setTimeout(() => {
      setShowAlert(false);
      window.location.reload();
    }, 3000);
  };

  return (
    <>
      {showAlert && (
        <div className="bg-green-400 text-white flex items-center gap-2 rounded-md p-2 mb-3">
          <i className="fa-solid fa-circle-check"></i>
          <p className="font-semibold">
            {title} <span className="font-light">removed</span>
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favoriteAnime.map((item, index) => (
          <div
            key={index}
            className="border shadow-md overflow-hidden rounded-md"
          >
            <Image
              className="h-60 lg:h-96 object-cover"
              src={item.cover_photo}
              alt={item.mal_id}
              width={500}
              height={500}
            />
            <div className="text-center text-sm lg:text-base p-1.5 space-y-1">
              <h2 className="font-semibold">{item.title}</h2>
              <button
                className="w-full bg-teal-500 hover:bg-teal-600 text-white px-3 py-1.5 rounded-md"
                onClick={() => removeAnime(item.mal_id, item.title)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListFavorite;
