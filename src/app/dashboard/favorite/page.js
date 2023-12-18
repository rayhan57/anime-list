import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { listFavoriteAnime } from "@/app/libs/fetching-data";
import ListFavorite from "@/components/FavoriteAnime/ListFavorite";
import { getServerSession } from "next-auth";
import React from "react";

const Favorite = async () => {
  const session = await getServerSession(authOptions);

  const favoriteAnime = await listFavoriteAnime(session.user.email);

  return (
    <div className="container mt-4 mx-auto">
      <h1 className="text-xl lg:text-2xl font-bold mb-3">Favorite Anime</h1>

      {favoriteAnime.length > 0 ? (
        <ListFavorite
          favoriteAnime={favoriteAnime}
          user_email={session.user.email}
        />
      ) : (
        <h4 className="text-center text-sm lg:text-lg">No favorite anime</h4>
      )}
    </div>
  );
};

export default Favorite;
