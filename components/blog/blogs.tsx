import React from "react";
import BlogCategory from "@/components/blog/blog-category";
import RecentPosts from "@/components/blog/recent-posts";
import BlogsList from "@/components/blog/blogs-list";

export default function Blogs() {
  return (
    <section className="container grid grid-cols-1 gap-4 px-4 pt-8 font-sans md:grid-cols-[72.5%_27.5%]">
      <BlogsList />
      <aside className="pb-4">
        <BlogCategory />
        <RecentPosts />
      </aside>
    </section>
  );
}
