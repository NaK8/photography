import React from "react";
import Logo from "./logo";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="container flex flex-col items-center justify-between gap-4 border-b border-gray-300 p-4 font-sans md:flex-row">
      <Logo />
      <Navbar />
    </header>
  );
}
