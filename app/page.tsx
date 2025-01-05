import BackgroundImage from "@/components/common/background-image";
import HelloThere from "@/components/home/hello-there";
import HomeCards from "@/components/home/home-cards";
import HomeContact from "@/components/home/home-contact";
import HomeGradient from "@/components/home/home-gradient";
import Slider from "@/components/home/slider";
import dynamic from "next/dynamic";
import React from "react";

const HtmlMap = dynamic(() => import("@/components/common/html-map"));

/* eslint-disable camelcase */
export const experimental_ppr = true;

export default function Home() {
  return (
    <>
      <Slider />
      <HelloThere />
      <BackgroundImage url="/home-bg.webp" />
      <HomeCards />
      <HomeGradient />
      <HomeContact />
      <BackgroundImage url="/boxer-bg.webp" />
      <HtmlMap />
    </>
  );
}
