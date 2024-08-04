import React from "react";

interface SlideTypes {
  url: string;
  heading: string;
}
export default function Slide({ url, heading }: SlideTypes) {
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className="flex h-auto min-h-[350px] items-center justify-center bg-cover bg-fixed bg-[top_center] bg-no-repeat text-center md:min-h-[500px]"
    >
      <h3 className="font-sans text-[10vw] font-bold capitalize leading-normal text-white">
        {heading}
      </h3>
    </div>
  );
}
