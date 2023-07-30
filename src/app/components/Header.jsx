import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="absolute top-0 left-0 right-0 z-50 flex gap-12 justify-end bg-teal-600 text-teal-50 py-8 px-8 text-lg font-medium">
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
            <Link href="/about-us" className="peer">
              About Us
            </Link>
            <div className="h-0.5 bg-transparent peer-hover:bg-teal-50 w-0 peer-hover:w-full duration-500 delay-75 rounded-full" />
          </li>
          <li className="flex flex-col items-center justify-center pt-1">
            <Link href="/contact-us" className="peer">
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
