import f1Car from "../assets/f1Car.webp";
import { OnRevealWhite } from "./OnRevealWhite";

const Home = () => {
  return (
    <section
      className="snap-start h-[calc(100vh-90px)] w-screen flex flex-col items-center justify-center"
      id="Home"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-[5.2em] lg:text-[7em] font-SairaBold tracking-widest">
          <OnRevealWhite>NEXUS</OnRevealWhite>
        </h1>
        <div className="w-[35em] h-[14em] lg:w-full lg:h-full mt-[-5em] lg:mt-[-9.8em] z-40">
          <img
            src={f1Car}
            alt="Formula 1 in school Nexus Car Nexus Racing Team Formula 1 competition F1 in School Costa rica Team Silverstone circuit"
            width="100"
            height="100"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
