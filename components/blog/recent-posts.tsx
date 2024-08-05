import { blogData } from "@/data/blog-data";
import Image from "next/image";
import React from "react";

export default function RecentPosts() {
  return (
    <section className="pb-4">
      <h3 className="py-2 text-3xl font-bold text-gray-800 md:py-4">
        Recent Posts
      </h3>
      {blogData.map((blog) => (
        <article className="py-3" key={blog.alt}>
          <Image
            width={308}
            height={154}
            className="w-full md:w-auto"
            src={blog.img}
            alt={blog.alt}
          />
          <span className="block py-2 text-lg font-semibold transition-all hover:cursor-pointer hover:text-orange-500">
            {blog.heading}
          </span>
        </article>
      ))}
    </section>
  );
}
