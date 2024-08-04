import React from "react";

export default function ContactForm() {
  return (
    <section className="mx-auto w-full px-3 py-16 text-center font-sans md:w-4/5">
      <form>
        <div className="py-5">
          <input
            className="w-full border-b border-gray-300 p-4 outline-none focus:border-orange-500 focus:outline-none"
            type="text"
            placeholder="Name*"
          />
        </div>
        <div className="py-5">
          <input
            type="email"
            placeholder="Email*"
            className="w-full border-b border-gray-300 p-4 outline-none focus:border-orange-500 focus:outline-none"
          />
        </div>
        <div className="py-5">
          <textarea
            name="message"
            id="message"
            rows={7}
            placeholder="Message*"
            className="w-full border-b border-gray-300 p-4 outline-none focus:border-orange-500 focus:outline-none"
          ></textarea>
        </div>
      </form>
      <button className="rounded-md bg-orange-500 px-12 py-5 uppercase text-white transition-all hover:bg-gray-800">
        Submit Comment
      </button>
    </section>
  );
}
