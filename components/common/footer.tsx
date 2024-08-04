import { Facebook, Twitter, Instagram, Linkedin, Dribbble } from "lucide-react";
import React from "react";
import Logo from "@/components/common/logo";

const socialIcons = [
  { icon: <Facebook /> },
  { icon: <Twitter /> },
  { icon: <Instagram /> },
  { icon: <Linkedin /> },
  { icon: <Dribbble /> },
];

export default function Footer() {
  return (
    <footer className="container flex flex-col items-center gap-y-10 py-12 font-sans">
      <div className="flex items-center justify-center gap-2">
        {socialIcons.map((icon, index) => (
          <div
            key={index}
            className="flex size-12 items-center justify-center rounded-full bg-orange-500 text-white hover:cursor-pointer hover:bg-gray-800"
          >
            {icon.icon}
          </div>
        ))}
      </div>
      <Logo />
      <p className="py-3 text-sm text-gray-400">
        &copy; Copyrights and all rights reserved to photography
      </p>
    </footer>
  );
}
