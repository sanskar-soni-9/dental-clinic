import Image from "next/image";
import InViewWrapper from "./InViewWrapper";
import ClinicHighlightImage from "@/public/clinic-highlights.jpg"
import toothImg1 from "@/public/tooth1.png"
import toothImg2 from "public/tooth2.png"
import toothImg3 from "public/tooth3.png"
import toothImg4 from "public/tooth4.png"
import toothImg5 from "public/tooth5.png"

const toothImgs = [toothImg1, toothImg2, toothImg3, toothImg4, toothImg5]

const highlights = [
  {
    title: "SAME-DAY APPOINTMENTS",
    description:
      "Swift evaluation and treatment plans for urgent dental issues like tooth pain or broken teeth.",
    background: "bg-teal-600",
  },
  {
    title: "Expert Dental Specialists",
    description:
      "Expert dental care, dedicated specialists. Your smile, our priority!",
    background: "bg-sky-600",
  },
  {
    title: "Your Safety Is Our Priority",
    description:
      "Strict safety measures - PPE, sterilization, disinfection, water quality, waste disposal, air purification, & trained staff.",
    background: "bg-red-600",
  },
  {
    title: "State-Of-The-Art Equipment",
    description:
      "Electric handpiece, rotary endodontics, zoom whitening, intraoral camera. Your best smile awaits!",
    background: "bg-yellow-500",
  },
  {
    title: "Modern Dentistry At Its Finest",
    description:
      "Digital X-rays & impressions for precise oral care. Embrace the future of dental technology!",
    background: "bg-purple-500",
  },
];

const ClinicHighlights = () => {
  return (
    <>
      <InViewWrapper
        as="div"
        styles="relative whitespace-nowrap duration-700 ease-in-out mb-10"
        inViewStyles="top-0"
        outOfViewStyles="top-20"
        rootMargin="100px 0px 0px 0px"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-slate-700">
          Clinic Highlights
        </h1>
      </InViewWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-[10%] items-center">
        <InViewWrapper
          as="div"
          styles="duration-700 ease-in-out p-8 bg-teal-600 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-e-full hidden lg:w-[48vw] lg:block duration-1000 ease-in-out"
          inViewStyles="animate-to-right"
        >
          <Image
            src={ClinicHighlightImage}
            alt="clinic highlights display image"
            className="rounded-full w-full h-full"
          />
        </InViewWrapper>
        <ul className="space-y-8 sm:space-y-10 xl:space-y-16 px-5 sm:w-[85vw] mx-auto lg:w-full">
          {highlights.map((highlight, index) => {
            return (
              <InViewWrapper
                as="li"
                key={index}
                styles="flex gap-2 sm:gap-5 sm:items-center duration-700 ease-in-out"
                inViewStyles="translate-y-0"
                outOfViewStyles="translate-y-[50px]"
                rootMargin="50px 0px 50px 0px"
              >
                <div
                  className={`w-fit h-fit p-2 lg:p-3 rounded-full ${highlight.background}`}
                >
                  <Image
                    src={toothImgs[index]}
                    alt="tooth icon"
                    className="min-w-[30px] min-h-[30px] max-w-[30px] max-h-[30px] sm:min-w-[40px] sm:max-w-[40px] sm:max-h-[40px] sm:min-h-[40px] lg:min-w-[60px] lg:max-w-[60px] lg:max-h-[60px] lg:min-h-[60px]"
                  />
                </div>
                <div className="lg:w-[30vw]">
                  <h2 className="text-base sm:text-lg font-semibold">
                    {highlight.title}
                  </h2>
                  <p className="text-xs sm:text-sm">{highlight.description}</p>
                </div>
              </InViewWrapper>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ClinicHighlights;
