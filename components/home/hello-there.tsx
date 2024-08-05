import { helloThere } from "@/data/home-data";
import Image from "next/image";
import React from "react";

export default function HelloThere() {
  return (
    <section className="container py-8 text-center font-sans">
      <h3 className="text-3xl md:text-5xl">{helloThere.MainHeading}</h3>
      <p className="text-sm text-gray-400">{helloThere.MiniPara}</p>
      <Image
        className="mx-auto w-1/2 py-8 md:w-[395px]"
        src={helloThere.ImgUrl}
        alt={helloThere.AltTag}
        width={395}
        height={395}
      />
      <p className="px-4 text-sm leading-6 text-gray-400">{helloThere.Para}</p>
      <p className="px-4 pt-1 text-sm text-gray-400">{helloThere.LastPara}</p>
    </section>
  );
}
