import React from "react";

interface CardTypes {
  MainHeading: string;
  MiniPara: string;
  children: React.ReactNode;
  SecondHeading: string;
  Para: string;
}

export default function Card({
  MainHeading,
  MiniPara,
  children,
  SecondHeading,
  Para,
}: CardTypes) {
  return (
    <div className="py-4 text-center md:py-8">
      <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
        {MainHeading}
      </h2>
      <p className="text-sm text-gray-400">{MiniPara}</p>
      {children}
      <h3 className="py-3 pb-4 text-lg font-semibold text-gray-800 hover:cursor-pointer hover:text-orange-500 md:text-xl">
        {SecondHeading}
      </h3>
      <p className="text-sm leading-5 text-gray-400">{Para}</p>
    </div>
  );
}
