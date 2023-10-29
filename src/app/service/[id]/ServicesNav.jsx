"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const ServicesNav = ({ services }) => {
  const { id } = useParams();

  return (
    <div className="flex flex-col gap-2 rounded-lg">
      {services.map((service) => (
        <Link
          key={service.id}
          href={`/service/${service.id}`}
          className={`flex items-center gap-8 whitespace-nowrap px-5 py-2 rounded-full font-semibold hover:bg-teal-500 hover:text-teal-50 group/service ${
            id === service.id ? "bg-teal-500 text-teal-50" : "text-teal-900"
          }`}
        >
          <RiCheckboxBlankCircleFill
            className={`${
              id === service.id ? "block" : "hidden group-hover/service:block"
            }`}
          />
          <BsArrowRight
            className={`${
              id === service.id ? "hidden" : "block group-hover/service:hidden"
            }`}
          />
          <p>{service.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default ServicesNav;
