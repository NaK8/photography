"use client";

import Image from "next/image";
import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface NewModelTypes {
  src: string;
  alt: string;
}

export default function Picture({ src, alt }: NewModelTypes) {
  return (
    <Zoom>
      <Image
        className="size-[280px] rounded-full object-cover hover:cursor-pointer hover:grayscale"
        alt={alt}
        src={src}
        width={500}
        height={500}
      />
    </Zoom>
  );
}
