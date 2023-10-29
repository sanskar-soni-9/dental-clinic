import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import InViewWrapper from "@/utils/InViewWrapper.jsx";
import { services } from "@/utils/data.js";

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.id,
  }));
}

const Service = ({ params }) => {
  const { id } = params;
  const serviceIndex = services.findIndex((value) => value.id === id);
  if (serviceIndex === -1) notFound();

  const service = services[serviceIndex];

  return (
    <InViewWrapper
      as="main"
      styles="py-2 text-slate-600 traking-wider duration-1000 ease-in-out space-y-6"
      inViewStyles="opacity-100"
      outOfViewStyles="opacity-0"
    >
      <Link href={service.sourceUrl} target="_blank" className="relative block group/serviceImage">
        <Image src={service.image} alt={service.name + " Image"} width={1000} height={800} className="w-full h-auto" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/20 text-white hidden group-hover/serviceImage:flex">
          <p className="w-full text-end self-end text-sm">{service.source}</p>
        </div>
      </Link>
      <div className="mb-5 space-y-4">
        <h1 className="font-semibold text-3xl sm:text-4xl">{service.name}</h1>
        <p>{service.description}</p>
      </div>
      <div className="space-y-6">
        {service.sections.map((section, index) => (
          <div className="mb-6" key={index}>
            <h2 className="font-semibold text-xl">{section.title}</h2>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
    </InViewWrapper>
  );
};

export default Service;
