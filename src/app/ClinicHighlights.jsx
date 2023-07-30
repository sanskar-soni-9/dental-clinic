import Image from "next/image";
import InViewWrapper from "./components/InViewWrapper";

const highlights = [
  {
    imageSrc: "/tooth1.png",
    imageAlt: "tooth icon",
    imageWidth: "1154",
    imageHeight: "1124",
    title: "SAME-DAY APPOINTMENTS",
    description:
      "Swift evaluation and treatment plans for urgent dental issues like tooth pain or broken teeth.",
    background: "bg-teal-600",
  },
  {
    imageSrc: "/tooth2.png",
    imageAlt: "tooth icon",
    imageWidth: "1154",
    imageHeight: "1124",
    title: "Expert Dental Specialists",
    description:
      "Expert dental care, dedicated specialists. Your smile, our priority!",
    background: "bg-sky-600",
  },
  {
    imageSrc: "/tooth3.png",
    imageAlt: "tooth icon",
    imageWidth: "1154",
    imageHeight: "1124",
    title: "Your Safety is Our Priority",
    description:
      "Strict safety measures - PPE, sterilization, disinfection, water quality, waste disposal, air purification, & trained staff.",
    background: "bg-red-600",
  },
  {
    imageSrc: "/tooth4.png",
    imageAlt: "tooth icon",
    imageWidth: "1154",
    imageHeight: "1124",
    title: "State-of-the-Art Equipment",
    description:
      "Electric handpiece, rotary endodontics, zoom whitening, intraoral camera. Your best smile awaits!",
    background: "bg-yellow-500",
  },
  {
    imageSrc: "/tooth5.png",
    imageAlt: "tooth icon",
    imageWidth: "1333",
    imageHeight: "1227",
    title: "Modern dentistry at its finest",
    description:
      "Digital X-rays & impressions for precise oral care. Embrace the future of dental technology!",
    background: "bg-purple-500",
  },
];

const ClinicHighlights = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold text-center text-slate-700 mb-12">
        Clinic Highlights
      </h1>
      <div className="grid grid-cols-2 gap-[10%] items-center">
        <InViewWrapper
          as="div"
          styles="duration-700 ease-in-out p-8 bg-teal-600 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-e-full w-[48vw] duration-1000 ease-in-out"
          inViewStyles="translate-x-0"
          outOfViewStyles="-translate-x-[20%]"
        >
          <Image
            src="/clinic-highlights.jpg"
            alt="clinic highlights display image"
            width="900"
            height="900"
            className="rounded-full w-full h-full"
          />
        </InViewWrapper>
        <ul className="space-y-20 duration-700 ease-in-out">
          {highlights.map((highlight, index) => {
            return (
              <InViewWrapper
                as="li"
                key={index}
                styles={`flex gap-5 items-center duration-700 delay-[${
                  (index + 1) * 100
                }]`}
                inViewStyles="translate-x-0"
                outOfViewStyles="translate-x-[10%]"
              >
                <div className={`p-4 rounded-full ${highlight.background}`}>
                  <Image
                    src={highlight.imageSrc}
                    alt={highlight.imageAlt}
                    width={highlight.imageWidth}
                    height={highlight.imageHeight}
                    className="w-16 h-16"
                  />
                </div>
                <div className="w-[25vw]">
                  <h2 className="text-2xl font-semibold">{highlight.title}</h2>
                  <p>{highlight.description}</p>
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
