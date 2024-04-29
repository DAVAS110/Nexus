import { OnRevealWhite } from "./OnRevealWhite.jsx";
import StandCanvas from "./canvas/Stand.jsx";
import { motion } from "framer-motion";

const Stand = () => {
  //const getScreenWidth = screen.width;

  // let scale = 0.4;

  // let rotation = [0, 0, 0];
  // let position = [0, -0.8, 0];
  // let autoRotate = false;
  // let enableZoom = true;

  // if (getScreenWidth < 1024) {
  //   rotation = [0.3, 0, 0];
  //   position = [0, 1.5, 0];
  //   enableZoom = false;
  //   scale = 0.3;
  // }

  return (
    <section
      className="snap-start h-[calc(100vh-90px)] w-screen flex flex-col lg:flex-row items-center justify-around bg-black"
      id="OurStand"
    >
      <div className="h-full w-screen flex items-start justify-center flex-col p-10 gap-5 max-w-[500px]">
        <OnRevealWhite>
          <h1 className="text-6xl font-SairaBold text-white text-start">
            Our Stand
          </h1>
        </OnRevealWhite>
        <OnRevealWhite>
          <p className="text-justify max-w-[500px] text-white text-">
            Join us as we take the passion for Formula 1 to a new dimension.
            Discover how Nexus redefines speed and innovation in F1 in Schools!
          </p>
        </OnRevealWhite>
      </div>
      <div className="flex h-[25em] w-full lg:w-[90vh] lg:h-full items-center justify-center">
        <StandCanvas />
      </div>
    </section>
  );
};

export default Stand;
