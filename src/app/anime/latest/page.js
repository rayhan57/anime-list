"use client";
import { getAnimeData, getPaginationData } from "@/app/libs/fetching-data";
import ListFilm from "@/components/ListFilm";
import PaginationComponent from "@/components/PaginationComponent";
import React, { useEffect, useState } from "react";

const AnimeLatest = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState([]);

  const getData = async () => {
    const animeLatest = await getAnimeData("/top/manga", `page=${currentPage}`);
    setData(animeLatest);

    const pagination = await getPaginationData("/top/manga");
    setTotalPage(pagination?.last_visible_page);
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

  return (
    <div className="container mt-4 mx-auto">
      <h1 className="text-2xl font-bold">Semua Terbaru</h1>
      <ListFilm data={data} />
      <PaginationComponent
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      />
    </div>
  );
};

export default AnimeLatest;
