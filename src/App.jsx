import Header from "./Components/Header";
import { useState,  } from "react";

import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Stand from "./Components/Stand.jsx";
import Team from "./Components/Team.jsx";
import Sponsors from "./Components/Sponsors.jsx";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const position = Math.ceil(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    );
    setScrollPosition(position);
  };

  const users = [
    {
      name: "Celeste Gamboa Brenes",
      img: "src/Celeste.png",
      age: "18 years old",
      role: "Team Manager, Project Manager, Design Engineer",
    },
    {
      name: "Joshua Alvarado Garro",
      img: "src/Celeste.png",
      age: "18 years old",
      role: "Design Engineer,Resources Manager",
    },
    {
      name: "Nicole Villalta Barrantes",
      img: "src/Nicole.png",
      age: "17 years old",
      role: "Social Media Manager, Marketing Manager",
    },
    {
      name: "David Vargas Arias",
      img: "src/David.png",
      age: "18 years old",
      role: "Finance Manager, Sponsorship, Partnerships Manager, Graphic Designer",
    },
    {
      name: "Hillary Soto Martinez",
      img: "src/Hilary.png",
      age: "17 years old",
      role: "Social Media Manager, Marketing Manager",
    },
    {
      name: "Kevin Bolaños Mena",
      img: "src/Kevin.png",
      age: "18 years old",
      role: "Manufacturing Engineer",
    },
  ];

  return (
    <main className="overflow-hidden h-screen">
      <Header className="fixed" scrollStatus={scrollPosition} />
      <div
        className="snap-y snap-mandatory h-[calc(100vh-90px)] w-screen overflow-x-hidden bg-black mx-auto"
        onScroll={handleScroll}
      >
        <Home />
        <About />
        <Stand/>
        <Team/>
        <Sponsors/>
      </div>
    </main>
  );
};

export default App;
