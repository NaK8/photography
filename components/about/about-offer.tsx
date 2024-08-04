import React from "react";
import BackgroundImage from "@/components/common/background-image";
import { offers, whatOffer } from "@/data/about-data";

export default function AboutOffer() {
  return (
    <BackgroundImage url="/gradient-bg.webp">
      <section className="container p-4 text-center font-sans">
        <h3 className="text-4xl font-semibold text-white">
          {whatOffer.Heading}
        </h3>
        <p className="pb-8 text-sm text-white">{whatOffer.MiniPara}</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {offers.map((offer, index) => (
            <div className="p-3" key={index}>
              <h3 className="text-xl font-semibold text-white hover:cursor-pointer hover:text-orange-500">
                {offer.Heading}
              </h3>
              <p className="py-3 text-sm text-white">{offer.Para}</p>
            </div>
          ))}
        </div>
      </section>
    </BackgroundImage>
  );
}
