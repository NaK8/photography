import { contactMe } from "@/data/home-data";
import { MailOpen, Map, Phone } from "lucide-react";

export default function ContactMe() {
  return (
    <section className="container py-8 text-center font-sans">
      <h3 className="text-4xl font-semibold text-gray-800">
        {contactMe.Heading}
      </h3>
      <p className="text-sm text-gray-400">{contactMe.MiniPara}</p>
      <div className="flex flex-col justify-evenly py-8 md:flex-row">
        <div className="py-6 text-center">
          <Phone
            strokeWidth={1}
            size={150}
            fontWeight={150}
            className="mx-auto cursor-pointer pb-4 hover:text-orange-500"
          />
          <h4 className="font-semibold text-gray-900 hover:cursor-pointer hover:text-orange-500">
            {contactMe.Phone1}
          </h4>
          <h4 className="font-semibold text-gray-900 hover:cursor-pointer hover:text-orange-500">
            {contactMe.Phone2}
          </h4>
        </div>
        <div className="py-6 text-center">
          <Map
            strokeWidth={1}
            size={150}
            fontWeight={150}
            className="mx-auto cursor-pointer pb-4 hover:text-orange-500"
          />
          <h4 className="font-semibold text-gray-900 hover:cursor-pointer hover:text-orange-500">
            {contactMe.Location}
          </h4>
        </div>
        <div className="py-6 text-center">
          <MailOpen
            strokeWidth={1}
            size={150}
            fontWeight={150}
            className="mx-auto cursor-pointer pb-4 hover:text-orange-500"
          />
          <h4 className="font-semibold text-gray-900 hover:cursor-pointer hover:text-orange-500">
            {contactMe.Mail}
          </h4>
        </div>
      </div>
    </section>
  );
}
