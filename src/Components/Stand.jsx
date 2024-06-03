import { OnRevealWhite } from "./OnRevealWhite.jsx";
import StandCanvas from "./canvas/Stand.jsx";

const Stand = () => {
  return (
    <section
      className="snap-start h-[calc(100vh-90px)] w-screen flex flex-col lg:flex-row items-center justify-around bg-black"
      id="OurStand"
    >
      <div className="h-full w-screen flex items-start justify-center flex-col p-10 gap-5 max-w-[500px]">
        <OnRevealWhite>
          <h2 className="text-6xl font-SairaBold text-white text-start">
            Our Stand
          </h2>
        </OnRevealWhite>
        <OnRevealWhite>
          <p className="text-justify max-w-[500px] text-white text-base lg:text-lg">
            Join us as we take the passion for Formula 1 to a new dimension.
            Discover how Nexus redefines speed and innovation in F1 in Schools!
          </p>
          <p className="font-bold text-white">Press and hold to interact with the 3D model.</p>
        </OnRevealWhite>
      </div>
      <div className="flex h-[30em] w-[30em] lg:w-[90vh] lg:h-full items-center justify-center">
        <StandCanvas />
      </div>
    </section>
  );
};

export default Stand;
