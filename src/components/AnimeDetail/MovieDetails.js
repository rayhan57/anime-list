"use client";
import Image from "next/image";
import React, { useState } from "react";
import ModalTrailer from "./ModalTrailer";
import ImagesComponent from "./ImagesComponent";

const MovieDetails = ({ data }) => {
  const [show, setShow] = useState(false);
  const producers = data?.producers.map((producer) => producer.name).join(", ");
  const licensors = data?.licensors.map((licensor) => licensor.name).join(", ");

  return (
    <>
      <div className="container mt-8 mx-auto">
        <div className="flex items-center gap-4">
          <div className="relative overflow-hidden rounded-md">
            <Image
              className="w-40 lg:w-48"
              src={data?.images.webp.large_image_url}
              alt={data?.title}
              width={200}
              height={400}
            />
            <span className="absolute bottom-0 right-0 p-1 bg-teal-500 text-white text-xs md:text-sm rounded-tl-md font-medium">
              {data?.type}
            </span>
          </div>

          <div>
            <div>
              <h2 className="font-bold text-lg lg:text-2xl -mb-2">
                {data?.title}
              </h2>
              <span className="text-slate-500 text-xs lg:text-sm">
                Year of release {data?.year}
              </span>
            </div>
            <div className="mt-1 lg:mt-2">
              <h4 className="font-semibold text-sm lg:text-lg">Producers</h4>
              <p className="text-xs lg:text-sm">{producers}</p>
            </div>
            <div className="mt-1 lg:mt-2">
              <h4 className="font-semibold text-sm lg:text-lg">Licensors</h4>
              <p className="text-xs lg:text-sm">{licensors}</p>
            </div>
            <div className="mt-1 lg:mt-2">
              <h4 className="font-semibold text-sm lg:text-lg">Duration</h4>
              <p className="text-xs lg:text-sm">{data?.duration}</p>
            </div>
            <div className="mt-1 lg:mt-4">
              <button
                className="bg-teal-500 hover:bg-teal-600 px-7 py-2 rounded-md text-white text-xs lg:text-sm"
                onClick={() => setShow(true)}
              >
                Watch Trailer
              </button>
              <ModalTrailer
                youtubeId={data?.trailer.youtube_id}
                show={show}
                hide={() => setShow(false)}
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold text-sm lg:text-lg">Synopsis</h4>
          <p className="text-xs lg:text-sm">{data?.synopsis}</p>
        </div>
        <div className="mt-4">
          <h1 className="font-semibold text-sm lg:text-lg">Images</h1>
          <ImagesComponent id={data?.mal_id} />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
