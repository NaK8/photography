import ContactMe from "@/components/common/contact-me";
import ContactForm from "@/components/contact/contact-form";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

const HtmlMap = dynamic(() => import("@/components/common/html-map"));

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
