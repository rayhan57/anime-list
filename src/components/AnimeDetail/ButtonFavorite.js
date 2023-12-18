"use client";
import { addFavoriteAnime } from "@/app/libs/fetching-data";
import React, { useState } from "react";

const ButtonFavorite = ({ mal_id, cover_photo, title, user_email }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const addFavorite = async () => {
    await addFavoriteAnime(mal_id, cover_photo, title, user_email, () =>
      setIsFavorite(true)
    );
  };

  return (
    <div>
      {isFavorite ? (
        <p className="text-xs md:text-sm">Favorited</p>
      ) : (
        <button
          className="text-xs md:text-sm hover:underline"
          onClick={addFavorite}
        >
          Add favorite
        </button>
      )}
    </div>
  );
};

export default ButtonFavorite;
