import InViewWrapper from "./InViewWrapper";

const AboutUs = () => {
  return (
    <div className="relative overflow-hidden py-[10vw] sm:py-[5vw] ">
      <div className="absolute -top-10 -left-10 w-[60vw] h-[60vw] lg:w-[40vw] lg:h-[40vw] rounded-full bg-rose-300/40" />
      <div className="absolute top-1/4 -right-3 lg:top-1/4 lg:-right-20 2xl:-top-1/4 w-[50vw] h-[50vw] lg:w-[30vw] lg:h-[30vw] rounded-full bg-green-300/40" />
      <div className="absolute -bottom-[10%] left-10 lg:-bottom-20 lg:left-1/2 w-[40vw] h-[40vw] lg:w-[20vw] lg:h-[20vw] rounded-full bg-yellow-300/40" />

      <div className="w-[95vw] lg:w-[75vw] mx-auto px-3 sm:px-10 rounded-2xl">
        <InViewWrapper
          as="div"
          styles="relative whitespace-nowrap duration-700 ease-in-out mb-5"
          inViewStyles="left-0"
          outOfViewStyles="left-[20%]"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
            Our Clinic
          </h1>
        </InViewWrapper>
        <div className="space-y-5 md:space-y-11 first-letter:text-2xl text-lg md:text-xl md:first-letter:text-4xl font-medium">
          <InViewWrapper
            as="p"
            styles="relative duration-700 ease-in-out"
            inViewStyles="left-0"
            outOfViewStyles="left-[20%]"
          >
            Astha Dental Clinic is a highly modernized and best dental clinic in
            Narmadapuram having an experienced lady dentist. If you are
            searching for a dentist in Narmadapuram, then your search ends at
            our clinic as we offer all kinds of dental treatments and take
            complete care of oral hygiene at the most affordable rates.
          </InViewWrapper>
          <InViewWrapper
            styles="hidden sm:block relative duration-700 ease-in-out"
            inViewStyles="left-0"
            outOfViewStyles="left-[20%]"
          >
            Our clinic is equipped with advanced technology and the latest
            equipments for teeth cleaning and whitening, tooth pain treatment,
            almost painless root canal treatment through new specific machine,
            tooth coloured filling, gum surgeries, periodontitis, preparation of
            crowns and bridges, orthodontic treatment, diagnosis and treatment
            planning of oral cancer, treatment of reduced mouth opening,
            removable and fixed dental implants and dentures, veneers, surgical
            tooth extraction, treatment of tobacco-related diseases. We are also
            specialist in providing complete dental care of the children.
          </InViewWrapper>
          <InViewWrapper
            styles="relative duration-700 ease-in-out"
            inViewStyles="left-0"
            outOfViewStyles="left-[20%]"
          >
            Satisfaction of our patients is our motto.
          </InViewWrapper>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
