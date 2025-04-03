import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link prefetch href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link prefetch href={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link prefetch href={"/blog"}>
            Blog
          </Link>
        </li>
        <li>
          <Link prefetch href={"/gallery"}>
            Gallery
          </Link>
        </li>
        <li>
          <Link prefetch href={"/contact"}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
