import type { Metadata } from "next";
import BackgroundImage from "@/components/common/background-image";
import ImageGallery from "@/components/gallery/image-gallery";
import InterestingInfo from "@/components/gallery/interesting-info";
import React from "react";

export const metadata: Metadata = {
  title: "Gallery | Photography",
  description: "Created by using Next 15 react 19 and react-compiler",
};

export default function Gallery() {
  return (
    <>
      <ImageGallery />
      <BackgroundImage url="/gallery-bg-2.webp" />
      <InterestingInfo />
      <BackgroundImage url="/gallery-bg.webp" />
    </>
  );
}
