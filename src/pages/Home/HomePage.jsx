import { useState } from "react";

import Header from "../../Components/Header.jsx";

import Home from "../../Components/Home.jsx";
import Team from "../../Components/Team.jsx";
import About from "../../Components/About.jsx";
import Stand from "../../Components/Stand.jsx";
import Sponsors from "../../Components/Sponsors.jsx";

const HomePage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    let position = Math.ceil((scrollTop / (scrollHeight - clientHeight)) * 100);
    position = Math.round(position / 5) * 5;
    setScrollPosition(position);
  };

  return (
    <main className="overflow-hidden h-screen">
      <Header className="fixed z-20" scrollStatus={scrollPosition} />
      <div
        className="snap-y snap-mandatory h-[calc(100vh-90px)] w-screen overflow-x-hidden bg-black"
        onScroll={handleScroll}
      >
        <Home />
        <About />
        <Stand />
        <Team />
        <Sponsors />
      </div>
    </main>
  );
};

export default HomePage;
