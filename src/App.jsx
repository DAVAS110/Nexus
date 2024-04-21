import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";

import Home from "./pages/Home/Home.jsx";
import Team from "./pages/Home/Team.jsx";
import About from "./pages/Home/About.jsx";
import Stand from "./pages/Home/Stand.jsx";
import Sponsors from "./pages/Home/Sponsors.jsx";

import Error404 from './pages/Error/Error404.jsx';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    let position = Math.ceil((scrollTop / (scrollHeight - clientHeight)) * 100);
    position = Math.round(position / 5) * 5;
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
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
