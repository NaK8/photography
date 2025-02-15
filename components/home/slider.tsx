"use client";

import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slide from "@/components/home/slide";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Slider() {
  const [click, setClick] = useState(false);
  return (
    <section onClick={() => setClick(true)} className="h-[350px] md:h-[500px]">
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
      >
        <Slide url="/slider-1.webp" heading="artistic eye" />
        {click && <Slide url="/slider-2.webp" heading="latest technologies" />}
        {click && <Slide url="/slider-3.webp" heading="impressive works" />}
      </Carousel>
    </section>
  );
}
