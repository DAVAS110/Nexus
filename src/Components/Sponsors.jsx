import Footer from "./Footer.jsx";
import { sponsors } from "../sponsorsData.js";
import { OnRevealWhite } from "./OnRevealWhite.jsx";

const Sponsors = () => {
  return (
    <section
      className="snap-start h-[calc(100vh-90px)] w-screen bg-black flex flex-col lg: justify-evenly items-center"
      id="Sponsors"
    >
      <OnRevealWhite>
        <h1 className="text-5xl text-white text-center font-SairaBold">
          Sponsors
        </h1>
      </OnRevealWhite>
      <div className="flex justify-center flex-col items-center">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 content-center group">
          {sponsors.map(({name, src, href, alt}) => (
            <a
              href={href}
              key={name}
              target="_blank"
              className="flex h-24 w-[10em] lg:w-[13em] items-center justify-center overflow-hidden bg-white duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[1] hover!scale-400 hover:-translate-y-2"
            >
              <img src={src} alt={alt} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Sponsors;
