import { notFound } from "next/navigation";
import { services } from "../../data.js";
import InViewWrapper from "../../_components/InViewWrapper.jsx";

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
      styles="py-2 text-slate-600 traking-wider duration-1000 ease-in-out"
      inViewStyles="opacity-100"
      outOfViewStyles="opacity-0"
    >
      <div className="mb-5 space-y-4">
        <h1 className="font-semibold text-3xl sm:text-4xl">{service.name}</h1>
        <p>{service.description}</p>
      </div>
      <div>
        {service.sections.map((section, index) => (
          <div className="mb-6" key={index}>
            <h2 className="font-semibold mb-0.5 text-xl">{section.title}</h2>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
    </InViewWrapper>
  );
};

export default Service;
