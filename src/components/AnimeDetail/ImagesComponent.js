import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImagesComponent = async ({ id }) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${url}/anime/${id}/pictures`);
  const result = await response.json();
  const data = result.data;

  const imageElements = data.slice(0, 5).map((image, index) => (
    <div key={index} className={index === 2 ? "md:row-span-2" : ""}>
      <Link href={image.webp.large_image_url}>
        <Image
          src={image.webp.image_url}
          alt={image.webp.image_url}
          width={300}
          height={300}
          className="object-cover w-full h-full rounded-md cursor-pointer"
        />
      </Link>
    </div>
  ));

  return (
    <div className="grid grid-cols-2 md:grid-rows-2 md:grid-flow-col gap-1 md:gap-2 md:h-[70vh] lg:h-[50vh]">
      {imageElements}
    </div>
  );
};

export default ImagesComponent;
