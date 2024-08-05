import { galleryCategoryies, galleryImages } from "@/data/gallery-data";
import React from "react";
import Picture from "./picture";

export default function ImageGallery() {
  return (
    <>
      <div className="container flex flex-col items-center justify-center gap-8 px-4 pt-12 font-sans md:flex-row">
        {galleryCategoryies.map((category, index) => (
          <span
            key={index}
            className="font-bold uppercase text-gray-800 transition-all hover:cursor-pointer hover:text-orange-500 md:font-semibold"
          >
            {category}
          </span>
        ))}
      </div>
      <section className="container grid grid-cols-1 place-items-center gap-4 px-4 py-8 md:grid-cols-4">
        {galleryImages.map((image, index) => (
          <Picture key={index} src={image.src} alt={image.alt} />
        ))}
      </section>
    </>
  );
}
