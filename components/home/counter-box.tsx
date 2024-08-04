import React from "react";
import Counter from "@/components/home/counter";

interface CounterBoxProps {
  Start: number;
  Max: number;
  Heading: string;
  Para: string;
}

export default function CounterBox({
  Start,
  Max,
  Heading,
  Para,
}: CounterBoxProps) {
  return (
    <div className="py-4 text-center md:py-3">
      <Counter Start={Start} Max={Max} />
      <h3 className="cursor-pointer py-2 text-xl font-medium hover:text-orange-600">
        {Heading}
      </h3>
      <p className="text-sm">{Para}</p>
    </div>
  );
}
