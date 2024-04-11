import f1Car2 from "../assets/f1Car(2).png";

const About = () => {
  return (
    <section
      className="snap-start h-[calc(100vh-90px)] w-screen flex justify-around bg-white"
      id="AboutUs"
    >
      <div className="h-full w-screen flex items-center justify-center">
        <img src={f1Car2} alt="" />
      </div>
      <div className="h-full w-screen flex items-start justify-center flex-col p-10 gap-5">
        <h1 className="text-5xl font-SairaBold">Get to Know Us More</h1>
        <p className="text-justify max-w-[500px]">
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
