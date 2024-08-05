import BackgroundImage from "@/components/common/background-image";
import ImageGallery from "@/components/gallery/image-gallery";
import InterestingInfo from "@/components/gallery/interesting-info";
import React from "react";

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
