import { OnRevealBlack } from "./OnRevealBlack";
import CarCanvas from "./canvas/Car.jsx";


const About = () => {
  return (
    <section
      className="relative snap-start h-[calc(100vh-90px)] w-screen flex justify-around bg-white lg:items-center flex-col-reverse lg:flex-row"
      id="AboutUs"
    >
      <div className="flex h-[16em] w-[100%] lg:w-[90vh] lg:h-full justify-around z-50 ">
        <CarCanvas/>
      </div>

      <div className="absolute top-24 left-2 w-32 h-32 lg:w-64 lg:h-64 bg-[#0072bb] rounded-full opacity-85 lg:opacity-70 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 z-0"></div>
      <div className="absolute top-24 right-4 w-32 h-32 lg:w-64 lg:h-64 bg-[#CC0000] rounded-full opacity-85 lg:opacity-70 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 z-0"></div>
      <div className="absolute -bottom-10 left-4  w-32 h-32 lg:w-56 lg:h-56 bg-[#0072bb] rounded-full opacity-85 lg:opacity-70 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 z-0"></div>

      <div className="h-full w-screen flex items-stretch lg:items-start justify-start lg:justify-center flex-col px-10 pt-10 lg:p-10 lg:pb-2">
        <OnRevealBlack>
          <h2 className="text-justify max-w-[500px] text-5xl lg:text-6xl font-SairaBold z-50">
            Get to Know Us More
          </h2>
        </OnRevealBlack>
        <OnRevealBlack>
          <p className="text-justify max-w-[500px] text-base lg:text-lg z-50">
            Explore our essence through our logo, echoing the legendary
            Silverstone circuit. Rooted in Formula 1s heritage, we blend
            passion and innovation. Our colors signify historic triumphs,
            uniting past and present. Join us in our relentless pursuit of
            excellence.
          </p>
          <p className="font-bold">Press and hold to interact with the 3D model.</p>
        </OnRevealBlack>
      </div>
    </section>
  );
};

export default About;
