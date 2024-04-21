import f1Car2 from "../../assets/f1Car(2).png";

const About = () => {
  return (
    <section
      className="relative snap-start h-[calc(100vh-90px)] w-screen flex justify-around bg-white"
      id="AboutUs"
    >
      <div className="h-full w-screen flex items-center justify-center">
        <img src={f1Car2} alt=""  className="z-50"/>
      </div>

      <div className="absolute top-24 -left-4 w-56 h-56 bg-[#0072bb] rounded-full opacity-70 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 z-0"></div>
      <div className="absolute top-24 right-4 w-64 h-64 bg-[#CC0000] rounded-full opacity-70 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 z-0"></div>
      <div className="absolute -bottom-10 left-28 w-56 h-56 bg-[#0072bb] rounded-full opacity-70 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 z-0"></div>

      <div className="h-full w-screen flex items-start justify-center flex-col p-10 gap-5">
        <h1 className="text-6xl font-SairaBold z-50">Get to Know Us More</h1>
        <p className="text-justify max-w-[500px] text-xl z-50">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but leap into electronic.
        </p>
      </div>
    </section>
  );
};

export default About;
