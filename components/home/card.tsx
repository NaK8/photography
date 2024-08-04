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
    <div className="py-8 text-center">
      <h2 className="text-4xl font-semibold text-gray-800">{MainHeading}</h2>
      <p className="text-sm text-gray-400">{MiniPara}</p>
      {children}
      <h3 className="py-3 pb-4 text-xl font-semibold text-gray-800 hover:cursor-pointer hover:text-orange-500">
        {SecondHeading}
      </h3>
      <p className="text-sm leading-5 text-gray-400">{Para}</p>
    </div>
  );
}
