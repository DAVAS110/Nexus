const AboutUsYTVideo = () => {
  const videoId = "d6NUbpoS8BU";
  const url = `https://www.youtube.com/embed/${videoId}?t=1s`;
  return (
    <section
      className="relative snap-start h-[calc(100vh-90px)] w-screen flex justify-around bg-white lg:items-center flex-col-reverse lg:flex-row"
      id="AboutUs"
    >
      <div className="absolute top-24 left-2 w-32 h-32 lg:w-64 lg:h-64 bg-[#0072bb] rounded-full opacity-85 lg:opacity-70 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 z-0"></div>
      <div className="absolute top-24 right-4 w-32 h-32 lg:w-64 lg:h-64 bg-[#CC0000] rounded-full opacity-85 lg:opacity-70 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 z-0"></div>
      <div className="absolute -bottom-10 left-4  w-32 h-32 lg:w-56 lg:h-56 bg-[#0072bb] rounded-full opacity-85 lg:opacity-70 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 z-0"></div>
      <div className= "flex z-50 m-4">
        <iframe
          width="800"
          height="450"
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player"
        ></iframe>
      </div>
    </section>
  );
};

export default AboutUsYTVideo;
