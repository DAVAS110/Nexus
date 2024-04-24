import Footer from "./Footer.jsx";

import ExtremeTech from "../assets/Logos-Sponsors/Logo-extremeTech.webp";
import Servicentro from "../assets/Logos-Sponsors/Logo-servicentro.webp";
import Mission from "../assets/Logos-Sponsors/Logo-mission.webp";
import Rabsa from "../assets/Logos-Sponsors/Logo-rabsa.webp";
import Ricsa from "../assets/Logos-Sponsors//Logo-ricsa.webp";
import UCA from "../assets/Logos-Sponsors/Logo-uca.webp";

const logos = {
  ExtremeTech: ExtremeTech,
  Servicentro: Servicentro,
  Mission: Mission,
  Rabsa: Rabsa,
  Ricsa: Ricsa,
  UCA: UCA,
};

const Sponsors = () => {
  return (
    <section
      className="snap-start h-[calc(100vh-90px)] w-screen bg-black flex flex-col justify-evenly"
      id="Sponsors"
    >
      <h1 className="text-5xl text-white text-center font-SairaBold">
        Sponsors
      </h1>
      <div className="flex justify-center flex-col items-center">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 content-center group">
          {Object.entries(logos).map(([name, src]) => (
            <a
              href="#"
              key={name}
              className="flex h-24 w-[13em] items-center justify-center overflow-hidden bg-white/30 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[1] hover!scale-400"
            >
              <img
                src={src}
                alt={name}
                className="h-full w-full"
              />
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Sponsors;
