import ClinicHighlights from "./components/ClinicHighlights";
import InViewWrapper from "./components/InViewWrapper";
import BookOnline from "./components/BookOnline";
import Map from "./components/Map";

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
      <section className="w-full h-[200px] sm:h-[400px] lg:h-[600px]">
        <Map />
      </section>
    </main>
  );
};

export default Home;
