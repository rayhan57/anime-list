"use client";
import ListFilm from "@/components/ListFilm";
import PaginationComponent from "@/components/PaginationComponent";
import React, { useEffect, useState } from "react";

const AnimeLatest = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState([]);

  const getData = async () => {
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${url}/top/manga?page=${currentPage}`);
    const result = await response.json();
    setData(result.data);
    setTotalPage(result.pagination.last_visible_page);
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
