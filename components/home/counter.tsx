"use client";

import React, { useEffect, useState } from "react";

interface CounterProps {
  Start: number;
  Max: number;
}

export default function Counter({ Start, Max }: CounterProps) {
  const [count, setCount] = useState(Start);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < Max) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(intervalId);
      }
      console.log("interval");
    }, 80);

    return () => clearInterval(intervalId);
  }, [count, Max]);

  return <h4 className="text-[11vw] font-semibold">{count}</h4>;
}
