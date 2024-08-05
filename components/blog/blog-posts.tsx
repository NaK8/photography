import { Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";

interface BlogPostTypes {
  heading: string;
  img: string;
  content: string;
  date: string;
  alt: string;
}

export default function BlogPosts({
  heading,
  img,
  content,
  date,
  alt,
}: BlogPostTypes) {
  return (
    <article className="mb-5 border-b border-gray-300">
      <h3 className="py-2 text-xl font-bold text-gray-800 transition-all hover:cursor-pointer hover:text-orange-500 md:py-4 md:text-4xl">
        {heading}
      </h3>
      <div className="flex py-2 md:py-4">
        <Calendar height={18} width={18} color="#6b7280" />
        <span className="px-2 text-sm text-gray-500">{date}</span>
      </div>
      <Image
        width={900}
        height={450}
        src={img}
        alt={alt}
        className="w-full py-4"
      />
      <p className="py-2 text-sm leading-loose text-gray-400 md:py-4">
        {content}
      </p>
      <button className="my-3 rounded-md bg-orange-500 px-10 py-4 text-white transition hover:bg-gray-800 md:my-5">
        Read More
      </button>
    </article>
  );
}
