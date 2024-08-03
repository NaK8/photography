import React from "react";
import Logo from "./logo";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="container my-4 flex items-center justify-between px-4 font-sans">
      <Logo />
      <Navbar />
    </header>
  );
}
