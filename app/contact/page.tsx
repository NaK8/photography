import ContactMe from "@/components/common/contact-me";
import HtmlMap from "@/components/common/html-map";
import ContactForm from "@/components/contact/contact-form";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us | Photography",
  description: "Created by using Next 15 react 19 and react-compiler",
};

export default function Contact() {
  return (
    <>
      <HtmlMap />
      <ContactMe />
      <ContactForm />
    </>
  );
}
