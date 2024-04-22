
import ExtremeTech from "../assets/Logos-Sponsors/Logo-extremeTech.webp";
import Servicentro from "../assets/Logos-Sponsors/Logo-servicentro.webp";
import Mission from "../assets/Logos-Sponsors/Logo-mission.webp";
import Rabsa from "../assets/Logos-Sponsors/Logo-rabsa.webp";
import Ricsa from "../assets/Logos-Sponsors//Logo-ricsa.webp";
import UCA from "../assets/Logos-Sponsors/Logo-uca.webp";

import Footer from "./Footer.jsx";

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
        <div className="grid grid-cols-3 gap-4 content-center group">
          <a
            href="#"
            className="flex h-24 w-[13em] items-center justify-center overflow-hidden bg-white/30 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[1] hover!scale-400"
          >
            <img src={Servicentro} alt="" />
          </a>
          <a
            href="#"
            className="flex h-24 w-[13em] items-center justify-center overflow-hidden bg-white/30 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[1] hover!scale-400"
          >
            <img src={ExtremeTech} alt="" />
          </a>
          <a
            href="#"
            className="flex h-24 w-[13em] items-center justify-center overflow-hidden bg-white/30 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[1] hover!scale-400"
          >
            <img src={Mission} alt="" className="h-[8em]" />
          </a>
          <a
            href="#"
            className="flex h-24 w-[13em] items-center justify-center overflow-hidden bg-white/30 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[1] hover!scale-400"
          >
            <img src={Rabsa} alt="" />
          </a>
          <a
            href="#"
            className="flex h-24 w-[13em] items-center justify-center overflow-hidden bg-white/30 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[1] hover!scale-400"
          >
            <img src={UCA} alt="" className="h-[7em]" />
          </a>
          <a
            href="#"
            className="flex h-24 w-[13em] items-center justify-center overflow-hidden bg-white/30 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[1] hover!scale-400"
          >
            <img src={Ricsa} alt="" className="h-[7em]" />
          </a>
          <a
            href="#"
            className="flex h-24 w-[13em] items-center justify-center overflow-hidden bg-white/30 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[1] hover!scale-400"
          ></a>
          <a
            href="#"
            className="flex h-24 w-[13em] items-center justify-center overflow-hidden bg-white/30 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[1] hover!scale-400"
          ></a>
          <a
            href="#"
            className="flex h-24 w-[13em] items-center justify-center overflow-hidden bg-white/30 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[1] hover!scale-400"
          ></a>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Sponsors;
