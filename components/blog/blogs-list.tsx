import React from "react";
import BlogPosts from "@/components/blog/blog-posts";
import { blogData } from "@/data/blog-data";

export default function BlogsList() {
  return (
    <section className="pr-0 md:pr-4">
      {blogData.map((data) => (
        <BlogPosts
          key={data.alt}
          heading={data.heading}
          date={data.date}
          img={data.img}
          alt={data.alt}
          content={data.content}
        />
      ))}
    </section>
  );
}
