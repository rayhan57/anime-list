import { getAnimeData } from "@/app/libs/fetching-data";
import CoverPhoto from "@/components/AnimeDetail/CoverPhoto";
import MovieDetails from "@/components/AnimeDetail/MovieDetails";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const data = await getAnimeData(`/anime/${id}`);

  return {
    title: `Anime List | ${data.title}`,
  };
};

const AnimeDetail = async ({ params }) => {
  const { id } = params;
  const data = await getAnimeData(`/anime/${id}`);

  return (
    <>
      <CoverPhoto data={data} />
      <MovieDetails data={data} />
    </>
  );
};

export default AnimeDetail;
