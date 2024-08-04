import { testimonialHeading, testimonials } from "@/data/about-data";
import React from "react";

const Quotes = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="60"
    width="60"
    viewBox="0 0 448 512"
    className="mx-auto"
  >
    <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
  </svg>
);

export default function Testimonial() {
  return (
    <section className="container px-4 py-8 text-center font-sans">
      <h3 className="text-4xl font-semibold text-gray-800">
        {testimonialHeading.Heading}
      </h3>
      <p className="text-sm text-gray-400">{testimonialHeading.ParaMini}</p>
      <div className="flex flex-col justify-evenly py-8 md:flex-row">
        {testimonials.map((testimonial, index) => (
          <div className="py-6 text-center" key={index}>
            {Quotes}
            <p className="p-4 text-sm text-gray-400">
              {testimonial.testimonial}
            </p>
            <h4 className="font-semibold text-gray-900 hover:cursor-pointer hover:text-orange-500">
              {testimonial.number}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
