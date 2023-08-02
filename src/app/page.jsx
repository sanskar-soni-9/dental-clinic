import ClinicHighlights from "./ClinicHighlights";
import InViewWrapper from "./components/InViewWrapper";
import BookOnline from "./components/BookOnline";

const Home = () => {
  return (
    <main className="flex flex-col gap-14">
      <section className="bg-[url('/display.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="w-screen h-screen bg-black/60 bg-gradient-to-r from-teal-600/40 to-transparent">
          <div className="pt-[50vh] pl-[10vw] flex flex-col gap-2 md:gap-6">
            <InViewWrapper
              as="strong"
              styles="capitalize duration-1000 h-14 overflow-x-hidden leading-9 text-teal-100 font-extrabold lg:text-5xl whitespace-nowrap sm:text-4xl text-xl"
              inViewStyles="w-full"
              outOfViewStyles="w-0"
            >
              <span className="hover:text-teal-600">Brush, </span>
              <span className="hover:text-teal-600">Floss, </span>
              <span className="hover:text-teal-600">Smile, </span>
              <span className="hover:text-teal-600">Repeat...</span>
            </InViewWrapper>
            <BookOnline />
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
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
};

export default Home;
