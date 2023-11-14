import ListFilm from "@/components/ListFilm";
import React from "react";

const SearchAnime = async ({ params }) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${url}/anime?q=${params.keyword}`);
  const result = await response.json();
  const data = result.data;

  return (
    <>
      <div className="container mt-4 mx-auto">
        <h1 className="text-sm md:text-lg">
          Hasil pencarian untuk "{params.keyword}"
        </h1>
        {data.length > 0 ? (
          <ListFilm data={data} />
        ) : (
          <h1 className="text-center text-lg font-medium">
            {params.keyword} tidak ditemukan
          </h1>
        )}
      </div>
    </>
  );
};

export default SearchAnime;
