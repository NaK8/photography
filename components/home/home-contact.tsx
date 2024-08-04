import React from "react";
import ContactMe from "@/components/common/contact-me";
import { contactMe } from "@/data/home-data";

export default function HomeContact() {
  return (
    <section className="container px-4 py-12 text-center font-sans">
      <ContactMe />
      <p className="text-sm text-gray-400">{contactMe.Para}</p>
    </section>
  );
}
