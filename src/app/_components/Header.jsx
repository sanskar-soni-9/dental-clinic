"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import logo from "public/logo.png";
import logoDark from "public/logo-dark.png";

import { services } from "../data.js";
import BookOnline from "./BookOnline.jsx";

const NavLinks = ({ path, isSmallView = false }) => {
  return (
    <nav
      className={`${isSmallView ? "" : "hidden md:block"}`}
    >
      <ul
        className={`flex ${
          isSmallView ? "flex-col items-start gap-6" : "z-50 gap-14 justify-end"
        }`}
      >
        <li className="flex flex-col items-center justify-center pt-1">
          <Link
            href="/"
            className={`peer ${path === "/" ? "text-teal-100" : ""}`}
          >
            Home
          </Link>
          <div className="h-0.5 bg-teal-50 w-0 peer-hover:w-full duration-500 delay-75 rounded-full" />
        </li>
        <li className="flex flex-col items-center justify-center pt-1 group/services relative">
          <Link
            href="/service"
            className={path.match("^/service(/[w-]*)?") ? "text-teal-100" : ""}
          >
            Services
          </Link>
          <div className="h-0.5 bg-transparent group-hover/services:bg-teal-50 w-0 group-hover/services:w-full duration-500 delay-75 rounded-full" />
          <div className="absolute bg-white text-gray-800 top-full md:group-hover/services:block text-sm whitespace-nowrap border-4 border-teal-600 rounded-xl hidden">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/service/${service.id}`}
                className="block py-3 px-4 hover:text-teal-600 hover:bg-teal-100 first:rounded-t-xl last:rounded-b-xl"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </li>
        <li className="flex flex-col items-center justify-center pt-1">
          <Link href="/#aboutUs" className="peer">
            About Us
          </Link>
          <div className="h-0.5 bg-transparent peer-hover:bg-teal-50 w-0 peer-hover:w-full duration-500 delay-75 rounded-full" />
        </li>
        <li className="flex flex-col items-center justify-center pt-1">
          <Link href={`${path}#contactUs`} className="peer">
            Contact Us
          </Link>
          <div className="h-0.5 bg-transparent peer-hover:bg-teal-50 w-0 peer-hover:w-full duration-500 delay-75 rounded-full" />
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  const path = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="bg-teal-600 text-teal-50 py-4 px-8 text-lg font-medium flex justify-between items-center">
      <Link href="/">
        <Image src={logo} alt="logo" width={100} height={100} />
      </Link>
      <div className="md:hidden bg-teal-50/40 rounded-lg p-1 cursor-pointer">
        <BiMenu className="w-7 h-7" onClick={openNav} />
      </div>
      <NavLinks path={path} />
      {isNavOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-screen bg-black/70 flex z-50 md:hidden"
          onClick={closeNav}
        >
          <div className="bg-stone-800 w-3/4 sm:w-1/2 p-10 pt-16 flex flex-col justify-between gap-6 text-base animate-to-right relative">
            <div className="flex flex-col gap-10">
              <AiOutlineClose
                className="self-end text-3xl absolute right-5 top-5 cursor-pointer"
                onClick={closeNav}
              />
              <div className="bg-stone-200 rounded-full self-center flex items-center justify-center w-[140px] h-[140px]">
                <Image src={logoDark} alt="logo" width={125} height={125} />
              </div>
              <NavLinks path={path} isSmallView={true} />
            </div>
            <div
              className="text-sm sm:text-base"
              onClick={(e) => e.stopPropagation()}
            >
              <BookOnline isDark={true} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
