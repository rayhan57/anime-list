import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";
import ButtonFavorite from "./ButtonFavorite";
import { checkFavoriteAnime } from "@/app/libs/fetching-data";

const CoverPhoto = async ({ data }) => {
  const session = await getServerSession(authOptions);

  const coverPhoto = data?.images.webp.large_image_url;
  const genres = data?.genres.map((genre) => genre.name).join(" | ");

  const isFavoriteAnime = await checkFavoriteAnime(
    data.mal_id,
    session.user.email
  );

  return (
    <>
      <div
        className={`min-h-[40vh] md:min-h-[70vh] lg:min-h-[50vh] bg-no-repeat bg-cover bg-center relative`}
        style={{ backgroundImage: `url('${coverPhoto}')` }}
      >
        <div className="text-white bg-teal-500 absolute bottom-0 flex justify-between items-center w-full px-5 md:px-10 lg:px-20 py-2.5 md:py-2 lg:py-5">
          <div className="flex items-center">
            <div className="border-r pr-2">
              <h2 className="text-[10px] lg:text-xs float-right">
                <span className="text-sm lg:text-lg font-semibold">
                  {data?.score.toFixed(1)}
                </span>
                /10
              </h2>
              <p className="text-[10px] md:text-xs">
                Popularity {data?.popularity}
              </p>
            </div>

            <div className="pl-2">
              <i className="fa-solid fa-star"></i>
              {isFavoriteAnime ? (
                <p className="text-xs md:text-sm">Favorited</p>
              ) : (
                <ButtonFavorite
                  mal_id={data.mal_id}
                  cover_photo={data.images.webp.image_url}
                  title={data.title}
                  user_email={session.user.email}
                />
              )}
            </div>
          </div>

          <div className="text-[10px] md:text-xs lg:text-sm font-light">
            <p className="font-medium float-right">{data?.rating}</p>
            <p className="uppercase clear-both">{genres}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverPhoto;
