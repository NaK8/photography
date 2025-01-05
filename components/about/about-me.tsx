import { aboutMe } from "@/data/about-data";
import Image from "next/image";
import React from "react";
import ReadMore from "@/components/common/read-more";

export default function AboutMe() {
  return (
    <section className="container grid grid-cols-1 px-4 py-8 font-sans md:grid-cols-[40%_60%]">
      <Image
        src="/about-img.jpg"
        alt="about me"
        fetchPriority="high"
        width={400}
        height={400}
        className="mx-auto size-[350px] rounded-full object-cover md:mx-1 md:size-[400px]"
      />
      <div>
        <div className="w-full py-8 text-left md:w-fit md:text-center">
          <h1 className="text-3xl font-semibold text-gray-800">
            {aboutMe.Heading}
          </h1>
          <p className="text-sm text-gray-400">{aboutMe.ParaMini}</p>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 hover:cursor-pointer hover:text-orange-500">
          {aboutMe.Heading2}
        </h3>
        <p className="py-4 text-sm text-gray-400">{aboutMe.Para}</p>
        <p className="py-4 text-sm text-gray-400">{aboutMe.Para2}</p>
        <ReadMore />
      </div>
    </section>
  );
}
