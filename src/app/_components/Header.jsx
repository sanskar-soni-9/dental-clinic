"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "public/logo.png";
import { BiMenuAltRight } from "react-icons/bi";

import { services } from "../constants";

const Header = () => {
  return (
    <header className="bg-teal-600 text-teal-50 py-4 px-8 text-lg font-medium flex justify-between items-center">
      <Link href="/">
        <Image src={logo} alt="logo" width={100} height={100} />
      </Link>
      <div className="md:hidden bg-teal-50/40 rounded-lg p-1 cursor-pointer">
        <BiMenuAltRight className="w-7 h-7" />
      </div>
      <nav className="hidden md:block">
        <ul className="flex z-50 gap-12 justify-end">
          <li className="flex flex-col items-center justify-center pt-1">
            <Link href="/" className="peer">
              Home
            </Link>
            <div className="h-0.5 bg-transparent peer-hover:bg-teal-50 w-0 peer-hover:w-full duration-500 delay-75 rounded-full" />
          </li>
          <li className="flex flex-col items-center justify-center pt-1 group/services relative">
            <Link href="/services">Services</Link>
            <div className="h-0.5 bg-transparent group-hover/services:bg-teal-50 w-0 group-hover/services:w-full duration-500 delay-75 rounded-full" />
            <div className="absolute bg-white text-gray-800 top-full group-hover/services:block text-sm whitespace-nowrap border-4 border-teal-600 rounded-xl hidden">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
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
            <Link href="/#contactUs" className="peer">
              Contact Us
            </Link>
            <div className="h-0.5 bg-transparent peer-hover:bg-teal-50 w-0 peer-hover:w-full duration-500 delay-75 rounded-full" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
