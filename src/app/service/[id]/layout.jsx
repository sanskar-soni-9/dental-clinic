import { services } from "@/utils/data.js";
import ServicesNav from "./ServicesNav.jsx";

const ServiceLayout = ({ children }) => {
  return (
    <section className="flex flex-col-reverse sm:flex-row gap-10 sm:gap-5 md:gap-10 py-3 sm:py-10 w-[95vw] sm:w-[90vw] xl:w-[65vw] mx-auto rounded-lg min-h-[750px]">
      <ServicesNav services={services} />
      <div className="flex-1">{children}</div>
    </section>
  );
};

export default ServiceLayout;
