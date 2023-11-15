"use client";
import { getAnimeData, getPaginationData } from "@/app/libs/fetching-data";
import ListFilm from "@/components/ListFilm";
import PaginationComponent from "@/components/PaginationComponent";
import React, { useEffect, useState } from "react";

const AnimePopuler = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState([]);

  const getData = async () => {
    const popularAnime = await getAnimeData(
      "/top/anime",
      `page=${currentPage}`
    );
    setData(popularAnime);

    const pagination = await getPaginationData("/top/anime");
    setTotalPage(pagination?.last_visible_page);
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

  return (
    <>
      <div className="container mt-4 mx-auto">
        <h1 className="text-2xl font-bold">Semua Populer</h1>
        <ListFilm data={data} />
        <PaginationComponent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
        />
      </div>
    </>
  );
};

export default AnimePopuler;
