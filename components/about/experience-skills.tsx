import { experienceSkills, skillPercentage } from "@/data/about-data";
import React from "react";
import dynamic from "next/dynamic";

const CircleMeter = dynamic(() => import("./circle-meter"));

export default function ExperienceSkills() {
  return (
    <section className="container px-4 py-8 text-center font-sans">
      <h3 className="text-4xl font-semibold text-gray-800">
        {experienceSkills.Heading}
      </h3>
      <p className="text-sm text-gray-400">{experienceSkills.MiniPara}</p>
      <p className="py-5 text-sm text-gray-400">{experienceSkills.Para}</p>
      <div className="flex flex-col items-center justify-center pb-4 pt-8 md:flex-row md:items-baseline md:justify-evenly">
        {skillPercentage.map((skill, index) => (
          <CircleMeter
            key={index}
            heading={skill.Message}
            percentage={skill.Percentage}
            textValue={skill.TextValue}
          />
        ))}
      </div>
    </section>
  );
}
