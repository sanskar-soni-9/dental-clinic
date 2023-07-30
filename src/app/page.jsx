import Image from "next/image";
import ClinicHighlights from "./ClinicHighlights";
import PrimaryButton from "./components/PrimaryButton";
import InViewWrapper from "./components/InViewWrapper";

const Home = () => {
  return (
    <main className="flex flex-col gap-20">
      <section className="relative">
        <Image
          src="/display.jpg"
          alt="display image"
          width="1920"
          height="1080"
          className="w-screen h-screen"
        />
        <div className="absolute z-20 w-full h-full top-0 right-0 bottom-0 left-0 bg-black/60 bg-gradient-to-r from-teal-600/40 to-transparent animate-gradient">
          <div className="absolute top-1/2 left-[15%] flex flex-col gap-6 cursor-default">
            <InViewWrapper
              as="strong"
              styles="capitalize duration-1000 h-12 overflow-x-hidden leading-9 text-teal-100 font-extrabold text-5xl whitespace-nowrap"
              inViewStyles="w-full"
              outOfViewStyles="w-0"
            >
              <span className="hover:text-teal-600">Brush, </span>
              <span className="hover:text-teal-600">Floss, </span>
              <span className="hover:text-teal-600">Smile, </span>
              <span className="hover:text-teal-600">Repeat...</span>
            </InViewWrapper>
            <PrimaryButton text="Book Appointment" href="/contact-us" />
          </div>
        </div>
      </section>
      <section>
        <ClinicHighlights />
      </section>
      <section className="w-full h-[600px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3384574555243!2d77.72436257655656!3d22.752817426338613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397dcfa6924f763d%3A0xc8026ca5055dbb4e!2sAstha%20dental%20clinic!5e0!3m2!1sen!2sin!4v1690704862477!5m2!1sen!2sin"
          className="w-full h-full border-2 border-teal-600"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
};

export default Home;
