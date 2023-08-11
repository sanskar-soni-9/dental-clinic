import Link from "next/link";
import {
  MdAddLocationAlt,
  MdPhoneIphone,
  MdMail,
  MdArrowForwardIos,
} from "react-icons/md";
import { FaPhoneFlip, FaInstagram } from "react-icons/fa6";
import CopyTextToClipboard from "./CopyTextToClipboard";
import InViewWrapper from "./InViewWrapper";
import BookOnline from "./BookOnline";
import Map from "./Map";

const availableHours = [
  { day: "Sunday", time: "11am - 2pm" },
  { day: "Monday", time: "11am - 8pm" },
  { day: "Tuesday", time: "11am - 8pm" },
  { day: "Wednesday", time: "11am - 8pm" },
  { day: "Thursday", time: "11am - 8pm" },
  { day: "Friday", time: "11am - 8pm" },
  { day: "Saturday", time: "11am - 8pm" },
];

const services = [
  { service: "Teeth Whitening" },
  { service: "Dental Implants" },
  { service: "Digital Dental X-ray" },
  { service: "Root Canal Treatment" },
  { service: "Maxillofacial Surgeries" },
  { service: "Oral Prophylaxis" },
  { service: "Crown / Bridges" },
  { service: "Veneers" },
  { service: "Dental Restoration" },
  { service: "Denture" },
  { service: "Teeth Reshaping" },
  { service: "Laser Dentistry" },
  { service: "Orthodontic Treatment" },
  { service: "Mouth Guards" },
  { service: "Online Follow-up" },
];

const Footer = () => {
  return (
    <>
      <section className="w-full h-[200px] sm:h-[400px] lg:h-[600px]">
        <Map />
      </section>
      <footer className="bg-slate-800 pt-10 pb-2 overflow-hidden">
        <div className="grid w-screen grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-8 px-5 pb-4">
          <InViewWrapper
            as="div"
            id="contactUs"
            styles="group space-y-6 gap-8 text-sm py-5"
            inViewStyles="animate-to-right"
          >
            <div className="w-fit mx-auto">
              <h2 className="text-teal-500 cursor-default text-xl font-semibold">
                Contact Us
              </h2>
              <div className="group-hover:w-full group-hover:left-0 bg-teal-500 h-0.5 rounded-full relative left-[50%] w-0 duration-500 ease-in-out" />
            </div>
            <div className="flex gap-5 items-center group/item">
              <div className="p-2 rounded-full border-2 border-teal-100 group-hover/item:border-teal-200 group-hover/item:rotate-[360deg] duration-700 ease-in-out">
                <MdAddLocationAlt className="text-teal-100 group-hover/item:text-teal-200 w-5 h-5" />
              </div>
              <Link
                href="https://goo.gl/maps/kQq2urtYy67GgAQx7"
                target="_blank"
                className="text-teal-100 group-hover/item:text-teal-200"
              >
                QP3G+4QX, Astha dental clinic, Sadar Bazar, Narmadapuram, Madhya
                Pradesh 461001
              </Link>
            </div>
            <div className="flex gap-5 items-center group/item">
              <div className="p-2 rounded-full border-2 border-teal-100 group-hover/item:border-teal-200 group-hover/item:rotate-[360deg] duration-700 ease-in-out">
                <FaPhoneFlip className="text-teal-100 group-hover/item:text-teal-200 w-5 h-5" />
              </div>
              <CopyTextToClipboard
                text="+91 07574358007"
                styles="text-teal-100 group-hover/item:text-teal-200 cursor-pointer"
              />
            </div>
            <div className="flex gap-5 items-center group/item">
              <div className="p-2 rounded-full border-2 border-teal-100 group-hover/item:border-teal-200 group-hover/item:rotate-[360deg] duration-700 ease-in-out">
                <MdPhoneIphone className="text-teal-100 group-hover/item:text-teal-200 w-5 h-5" />
              </div>
              <CopyTextToClipboard
                text="+91 9981707303"
                styles="text-teal-100 group-hover/item:text-teal-200 cursor-pointer"
              />
            </div>
            <div className="flex gap-5 items-center group/item">
              <div className="p-2 rounded-full border-2 border-teal-100 group-hover/item:border-teal-200 group-hover/item:rotate-[360deg] duration-700 ease-in-out">
                <MdMail className="text-teal-100 group-hover/item:text-teal-200 w-5 h-5" />
              </div>
              <Link
                href="mailto:drasthasoni111@gmail.com"
                className="text-teal-100 group-hover/item:text-teal-200"
              >
                drasthasoni111@gmail.com
              </Link>
            </div>
            <div className="flex gap-5 items-center group/item">
              <div className="p-2 rounded-full border-2 border-teal-100 group-hover/item:border-teal-200 group-hover/item:rotate-[360deg] duration-700 ease-in-out">
                <FaInstagram className="text-teal-100 group-hover/item:text-teal-200 w-5 h-5" />
              </div>
              <Link
                href="https://www.instagram.com/asthadentalclinic_/"
                target="_blank"
                className="text-teal-100 group-hover/item:text-teal-200"
              >
                @asthadentalclinic_
              </Link>
            </div>
            <div>
              <BookOnline />
            </div>
          </InViewWrapper>
          <InViewWrapper
            as="div"
            styles="group flex flex-col gap-8 md:items-center py-5"
            inViewStyles="animate-to-right"
          >
            <div className="w-fit mx-auto">
              <h2 className="text-teal-500 cursor-default text-xl font-semibold">
                Quick Links
              </h2>
              <div className="group-hover:w-full group-hover:left-0 bg-teal-500 h-0.5 rounded-full relative left-[50%] w-0 duration-500 ease-in-out" />
            </div>
            <div className="space-y-6">
              <Link
                href="/"
                className="flex items-center text-teal-100 gap-4 hover:text-teal-600 font-semibold"
              >
                <MdArrowForwardIos /> <p>Home</p>
              </Link>
              <Link
                href="/patient-information"
                className="flex items-center text-teal-100 gap-4 hover:text-teal-600 font-semibold"
              >
                <MdArrowForwardIos /> <p>Patient Information</p>
              </Link>
              <Link
                href="/about-us"
                className="flex items-center text-teal-100 gap-4 hover:text-teal-600 font-semibold"
              >
                <MdArrowForwardIos /> <p>About Us</p>
              </Link>
              <Link
                href="/contact-us"
                className="flex items-center text-teal-100 gap-4 hover:text-teal-600 font-semibold"
              >
                <MdArrowForwardIos /> <p>Contact Us</p>
              </Link>
            </div>
          </InViewWrapper>
          <InViewWrapper
            as="div"
            styles="group flex flex-col gap-8 py-5"
            inViewStyles="animate-to-right"
          >
            <div className="w-fit mx-auto">
              <h2 className="text-teal-500 cursor-default text-xl font-semibold">
                Services
              </h2>
              <div className="group-hover:w-full group-hover:left-0 bg-teal-500 h-0.5 rounded-full relative left-[50%] w-0 duration-500 ease-in-out" />
            </div>
            <div className="sm:flex text-teal-100 justify-between whitespace-nowrap">
              <div className="space-y-2">
                {services.map((service, index) => {
                  if (index > (services.length - 1) / 2) return "";
                  return (
                    <p key={index} className="hover:text-teal-200">
                      {service.service}
                    </p>
                  );
                })}
              </div>
              <div className="space-y-2">
                {services.map((service, index) => {
                  if (index <= (services.length - 1) / 2) return "";
                  return (
                    <p key={index} className="hover:text-teal-200">
                      {service.service}
                    </p>
                  );
                })}
              </div>
            </div>
          </InViewWrapper>
          <InViewWrapper
            as="div"
            styles="w-full h-fit"
            inViewStyles="animate-to-right"
          >
            <div className="group flex flex-col gap-3 bg-teal-600 rounded-3xl pt-6 p-3 mx-auto sm:w-[75%] md:w-[80%] lg:w-[90%] xl:w-full">
              <div className="w-fit mx-auto">
                <h2 className="text-teal-50 cursor-default text-xl font-semibold">
                  Available Hours
                </h2>
                <div className="group-hover:w-full group-hover:left-0 bg-teal-50 h-0.5 rounded-full relative left-[50%] w-0 duration-500 ease-in-out" />
              </div>
              <div className="text-teal-50 space-y-2 font-medium text-sm bg-slate-800 rounded-3xl py-4">
                {availableHours.map((day) => {
                  return (
                    <div
                      key={day.day}
                      className="flex justify-between hover:text-teal-500 px-4 py-2 rounded-full"
                    >
                      <p>{day.day}</p>
                      <p>{day.time}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </InViewWrapper>
        </div>
        <p className="text-center text-teal-600 text-xs">
          © Copyright 2023 | All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
