import f1Car from "../../assets/f1Car.png";

const Home = () => {
  return (
    <section
      className="snap-start h-[calc(100vh-90px)] w-screen flex flex-col items-center justify-center"
      id="Home"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-[7em] font-SairaBold tracking-widest">
          NEXUS
        </h1>
        <img src={f1Car} alt="" className="mt-[-4em]" />
      </div>
    </section>
  );
};

export default Home;
