import { useState } from "react";

import Header from "../../components/Header.jsx";

import Home from "../../components/Home.jsx";
import Team from "../../components/Team.jsx";
import About from "../../components/About.jsx";
import Stand from "../../components/Stand.jsx";
import Sponsors from "../../components/Sponsors.jsx";

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
