import { circleCardData } from "@/data/home-data";
import Image from "next/image";
import React from "react";
import Card from "@/components/home/card";

export default function HomeCards() {
  return (
    <section className="flex flex-col gap-4 p-4 font-sans md:flex-row">
      {circleCardData.map((item, index) => (
        <Card
          key={index}
          MainHeading={item.MainHeading}
          MiniPara={item.MiniPara}
          SecondHeading={item.SecondHeading}
          Para={item.Para}
        >
          <Image
            src={item.Circle.Img}
            alt={item.Circle.Alt}
            height={370}
            width={370}
            className="mx-auto w-3/6 py-6 md:w-[350px]"
          />
        </Card>
      ))}
    </section>
  );
}
