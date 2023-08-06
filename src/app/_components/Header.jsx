"use client"
import Link from "next/link";
import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  return (
    <header className="overflow-hidden bg-teal-600 text-teal-50 py-4 px-8 text-lg font-medium flex justify-between items-center">
      <Image src="/IMG92.png" alt="logo" width={100} height={100} />
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
          <li className="flex flex-col items-center justify-center pt-1">
            <Link href="/patient-information" className="peer">
              Patient Information
            </Link>
            <div className="h-0.5 bg-transparent peer-hover:bg-teal-50 w-0 peer-hover:w-full duration-500 delay-75 rounded-full" />
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
