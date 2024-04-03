import Header from "./Components/Header.jsx";
import f1Car from "./assets/f1Car.png";
import f1Car2 from "./assets/f1Car(2).png";

const App = () => {
  return (
    <main className="overflow-hidden h-screen">
      <Header className="fixed" />
      <div className="snap-y snap-mandatory h-[calc(100vh-90px)] w-screen overflow-x-hidden bg-black">
        <section className="snap-start h-[calc(100vh-90px)] w-screen flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-8xl font-Tiro tracking-widest">
              NEXUS
            </h1>
            <img src={f1Car} alt="" className="mt-[-4em]" />
          </div>
        </section>
        <section className="snap-start h-[calc(100vh-90px)] w-screen flex justify-around bg-white">
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
      </div>
    </main>
  );
};

export default App;
