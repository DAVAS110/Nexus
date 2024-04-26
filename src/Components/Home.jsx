import f1Car from "../assets/f1Car.png";
import { Reveal } from "../components/Reveal";

const Home = () => {
  return (
    <section
      className="snap-start h-[calc(100vh-90px)] w-screen flex flex-col items-center justify-center"
      id="Home"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-[5.2em] lg:text-[7em] font-SairaBold tracking-widest">
          <Reveal>NEXUS</Reveal>
        </h1>
        <Reveal>
          <img
            src={f1Car}
            alt="Formula 1 in school Nexus Car Nexus Racing Team Formula 1 competition F1 in School Costa rica Team"
            className="w-full h-[6em] lg:w-full lg:h-full mt-[-3em] lg:mt-[-4em]"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Home;
