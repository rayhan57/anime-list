import React from "react";

const CoverPhoto = ({ data }) => {
  const coverPhoto = data?.images.webp.large_image_url;
  const genres = data?.genres.map((genre) => genre.name).join(" | ");

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
            <i className="fa-solid fa-star pl-2"></i>
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
