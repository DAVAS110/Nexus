
import ExtremeTech from "../assets/Logo-extremeTech.png";
import Servicentro from "../assets/Logo-servicentro.png";
import Mission from "../assets/Logo-mission.png";
import Rabsa from "../assets/Logo-rabsa.png";
import Ricsa from "../assets/Logo-ricsa.png";
import UCA from "../assets/Logo-uca.png";

import Footer from "../Components/Footer.jsx";

const Sponsors = () => {
  return (
    <section
      className="snap-start h-[calc(100vh-90px)] w-screen bg-black flex flex-col justify-evenly gap-2"
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
