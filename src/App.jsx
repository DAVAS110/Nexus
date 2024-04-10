import Header from "./Components/Header";
import f1Car from "./assets/f1Car.png";
import f1Car2 from "./assets/f1Car(2).png";
import { useState, Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Text } from "@react-three/drei";
import StandNexus from "../public/StandNexus.jsx";
import Footer from "./Components/Footer.jsx";

import ExtremeTech from "./assets/Logo-extremeTech.png";
import Mission from "./assets/Logo-mission.png";
import Servicentro from "./assets/Logo-servicentro.png";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const rotation = [0, 11, -0.1];

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const position = Math.ceil(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    );
    setScrollPosition(position);
  };

  const users = [
    {
      name: "Celeste Gamboa Brenes",
      img: "src/Celeste.png",
      age: "18 years old",
      role: "Team Manager, Project Manager, Design Engineer",
    },
    {
      name: "Joshua Alvarado Garro",
      img: "src/Celeste.png",
      age: "18 years old",
      role: "Design Engineer,Resources Manager",
    },
    {
      name: "Nicole Villalta Barrantes",
      img: "src/Nicole.png",
      age: "17 years old",
      role: "Social Media Manager, Marketing Manager",
    },
    {
      name: "David Vargas Arias",
      img: "src/David.png",
      age: "18 years old",
      role: "Finance Manager, Sponsorship, Partnerships Manager, Graphic Designer",
    },
    {
      name: "Hillary Soto Martinez",
      img: "src/Hilary.png",
      age: "17 years old",
      role: "Social Media Manager, Marketing Manager",
    },
    {
      name: "Kevin Bolaños Mena",
      img: "src/Kevin.png",
      age: "18 years old",
      role: "Manufacturing Engineer",
    },
  ];

  return (
    <main className="overflow-hidden h-screen">
      <Header className="fixed" scrollStatus={scrollPosition} />
      <div
        className="snap-y snap-mandatory h-[calc(100vh-90px)] w-screen overflow-x-hidden bg-black mx-auto"
        id="test"
        onScroll={handleScroll}
      >
        <section
          className="snap-start h-[calc(100vh-90px)] w-screen flex flex-col items-center justify-center"
          id="Home"
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-8xl font-Tiro tracking-widest">
              NEXUS
            </h1>
            <img src={f1Car} alt="" className="mt-[-4em]" />
          </div>
        </section>

        <section
          className="snap-start h-[calc(100vh-90px)] w-screen flex justify-around bg-white"
          id="AboutUs"
        >
          <div className="h-full w-screen flex items-center justify-center">
            <img src={f1Car2} alt="" />
          </div>
          <div className="h-full w-screen flex items-start justify-center flex-col p-10 gap-5">
            <h1 className="text-5xl font-Tiro">Get to Know Us More</h1>
            <p className="text-justify max-w-[500px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but leap into electronic.
            </p>
          </div>
        </section>

        <section
          className="snap-start h-[calc(100vh-90px)] w-screen flex items-center justify-around bg-black"
          id="OurStand"
        >
          <div className="h-full w-screen flex items-start justify-center flex-col p-10 gap-5 max-w-[500px]">
            <h1 className="text-5xl font-Tiro text-white text-start">
              Our Stand
            </h1>
            <p className="text-justify max-w-[500px] text-white">
              Únete a nosotros mientras llevamos la pasión por la Fórmula 1 a
              una nueva dimensión. ¡Descubre cómo Nexus redefine la velocidad y
              la innovación en F1 in Schools!
            </p>
          </div>
          <div className="h-full w-[90vh] flex items-center justify-center">
            <Canvas>
              <ambientLight />
              <OrbitControls
                autoRotate={false}
                enableZoom={true}
                enablePan={false}
                dampingFactor={1}
                target={[0, 1, 0]}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 3}
              />
              <Suspense fallback={null}>
                <StandNexus
                  position={[0, 0.5, 0]}
                  scale={2}
                  rotation={rotation}
                />
                <Text position={[0, 4, 0]}>36</Text>
              </Suspense>

              <Environment preset="sunset" />
            </Canvas>
          </div>
        </section>

        <section
          className="snap-start h-[calc(100vh-90px)] w-screen flex justify-around bg-white"
          id="OurTeam"
        ></section>

        <section
          className="snap-start h-[calc(100vh-90px)] w-screen bg-black flex flex-col justify-evenly gap-2"
          id="Sponsors"
        >
          <h1 className="text-5xl text-white text-center font-Tiro font-Tira">
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
                <img src={ExtremeTech} alt=""/>
              </a>
              <a
                href="#"
                className="flex h-24 w-[13em] items-center justify-center overflow-hidden bg-white/30 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[1] hover!scale-400"
              >
                <img src={Mission} alt="" className="h-[8em]"/>
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
      </div>
    </main>
  );
};

export default App;
