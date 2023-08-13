import ClinicHighlights from "./_components/ClinicHighlights";
import InViewWrapper from "./_components/InViewWrapper";
import BookOnline from "./_components/BookOnline";
import AboutUs from "./_components/AboutUs";

const Home = () => {
  return (
    <main className="mb-14">
      <section className="bg-[url('/display.jpg')] sm:bg-fixed bg-cover bg-bottom bg-no-repeat">
        <div className="w-screen h-[80vh] sm:h-screen flex flex-col justify-center bg-black/60 bg-gradient-to-r from-teal-400/40 to-transparent pl-[5vw] sm:pl-[10vw] gap-1 sm:gap-3 md:gap-6">
          <div className="flex flex-col">
            <InViewWrapper
              as="strong"
              styles="capitalize duration-1000 sm:h-10 md:h-14 overflow-x-hidden leading-9 text-teal-100 font-extrabold lg:text-5xl whitespace-nowrap sm:text-4xl text-2xl"
              inViewStyles="w-full"
              outOfViewStyles="w-0"
            >
              <span className="hover:text-teal-600">Brush, </span>
              <span className="hover:text-teal-600">Floss, </span>
              <span className="hover:text-teal-600">Smile, </span>
            </InViewWrapper>
            <InViewWrapper
              as="strong"
              styles="capitalize duration-1000 sm:h-14 overflow-x-hidden leading-9 text-teal-100 font-extrabold lg:text-5xl delay-500 whitespace-nowrap sm:text-4xl text-2xl"
              inViewStyles="w-full"
              outOfViewStyles="w-0"
            >
              <span className="hover:text-teal-600">Repeat...</span>
            </InViewWrapper>
          </div>
          <div className="mt-5 sm:mt-0">
            <BookOnline />
          </div>
        </div>
      </section>
      <section id="aboutUs" className="mb-10">
        <AboutUs />
      </section>
      <section className="mb-20">
        <ClinicHighlights />
      </section>
    </main>
  );
};

export default Home;
