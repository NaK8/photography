import type { Metadata } from "next";
import Blogs from "@/components/blog/blogs";
import React from "react";

export const metadata: Metadata = {
  title: "Blogs | Photography",
  description: "Created by using Next 15 react 19 and react-compiler",
};

export default function Blog() {
  return (
    <>
      <Blogs />
    </>
  );
}
