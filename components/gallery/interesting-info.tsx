import {
  interestingInfoHeading,
  interestingInfoPara,
} from "@/data/gallery-data";
import React from "react";
import ReadMore from "../common/read-more";

export default function InterestingInfo() {
  return (
    <section className="container px-4 py-8 text-center font-sans">
      <h3 className="text-4xl font-semibold text-gray-800">
        {interestingInfoHeading.Heading}
      </h3>
      <p className="text-sm text-gray-400">{interestingInfoHeading.ParaMini}</p>
      <div className="flex flex-col justify-evenly py-8 md:flex-row">
        {interestingInfoPara.map((info, index) => (
          <div key={index} className="px-4 py-6 text-left">
            <h4 className="text-xl font-semibold text-gray-900 hover:cursor-pointer hover:text-orange-500">
              {info.Heading}
            </h4>
            <p className="py-5 text-sm text-gray-400">{info.Para}</p>
            <ReadMore />
          </div>
        ))}
      </div>
    </section>
  );
}
