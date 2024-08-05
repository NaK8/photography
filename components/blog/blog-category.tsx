import { category } from "@/data/blog-data";
import React from "react";

export default function BlogCategory() {
  return (
    <section className="pb-4">
      <h3 className="py-2 text-3xl font-bold text-gray-800">Category</h3>
      {category.map((cate) => (
        <span
          key={cate}
          className="block py-2 transition-all hover:cursor-pointer hover:text-orange-500"
        >
          {cate}
        </span>
      ))}
    </section>
  );
}
