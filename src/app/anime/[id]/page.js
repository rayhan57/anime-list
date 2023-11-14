import CoverPhoto from "@/components/AnimeDetail/CoverPhoto";
import MovieDetails from "@/components/AnimeDetail/MovieDetails";
import React from "react";

const fetchData = async (id) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${url}/anime/${id}`);
  const result = await response.json();
  return result.data;
};

export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const data = await fetchData(id);

  return {
    title: `Anime List | ${data.title}`,
  };
};

const AnimeDetail = async ({ params }) => {
  const { id } = params;
  const data = await fetchData(id);

  return (
    <>
      <CoverPhoto data={data} />
      <MovieDetails data={data} />
    </>
  );
};

export default AnimeDetail;
