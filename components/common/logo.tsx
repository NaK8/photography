import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={"/logo-photography.png"}
        alt="logo"
        width={57}
        height={44}
        priority
      />
      <h1 className="text-2xl uppercase">Photography</h1>
    </div>
  );
}
