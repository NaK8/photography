import React from "react";
import BackgroundImage from "@/components/common/background-image";
import { homeCounter } from "@/data/home-data";
import dynamic from "next/dynamic";

const CounterBox = dynamic(() => import("./counter-box"));

export default function HomeGradient() {
  return (
    <BackgroundImage url="/gradient-bg.webp">
      <section className="container px-4 py-8 text-center font-sans text-white">
        <h3 className="text-4xl">WHAT I DO</h3>
        <p className="text-sm">You can order any type of photo shoot</p>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {homeCounter.map((counter) => (
            <CounterBox
              key={counter.Heading}
              Start={counter.Start}
              Max={counter.Max}
              Heading={counter.Heading}
              Para={counter.Para}
            />
          ))}
        </div>
      </section>
    </BackgroundImage>
  );
}
