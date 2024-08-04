import AboutMe from "@/components/about/about-me";
import AboutOffer from "@/components/about/about-offer";
import ExperienceSkills from "@/components/about/experience-skills";
import Testimonial from "@/components/about/testimonial";
import BackgroundImage from "@/components/common/background-image";
import React from "react";

export default function About() {
  return (
    <>
      <AboutMe />
      <BackgroundImage url="/about-bg-1.webp" />
      <ExperienceSkills />
      <AboutOffer />
      <Testimonial />
      <BackgroundImage url="/about-bg-2.webp" />
    </>
  );
}
