import React from "react";
import ListFilm from "../components/ListFilm";
import Link from "next/link";

const Section = async ({ title, linkApi, linkSeeAll }) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${url}${linkApi}?limit=12`);
  const result = await response.json();
  const data = result.data;

  return (
    <>
      <div className="container pt-4 mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-2xl">{title}</h1>
          <Link href={linkSeeAll}>
            <h3 className="text-sm underline hover:text-teal-500">
              Lihat semua
            </h3>
          </Link>
        </div>
        <ListFilm data={data} />
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Section
        title={"Populer"}
        linkApi={"/top/anime"}
        linkSeeAll={"/anime/populer"}
      />
      <Section
        title={"Terbaru"}
        linkApi={"/top/manga"}
        linkSeeAll={"/anime/latest"}
      />
    </>
  );
};

export default Home;
