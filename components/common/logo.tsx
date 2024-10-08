import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <Image
        src={"/logo-photography.png"}
        alt="logo"
        width={57}
        height={44}
        priority
      />
      <h1 className="text-xl uppercase md:text-2xl">Photography</h1>
    </Link>
  );
}
