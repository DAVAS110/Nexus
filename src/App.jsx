import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error404Page from './pages/Error/Error404Page.jsx';
import HomePage from './pages/Home/HomePage.jsx';

const App = () => {

  // const users = [
  //   {
  //     name: "Celeste Gamboa Brenes",
  //     img: "src/Celeste.png",
  //     age: "18 years old",
  //     role: "Team Manager, Project Manager, Design Engineer",
  //   },
  //   {
  //     name: "Joshua Alvarado Garro",
  //     img: "src/Celeste.png",
  //     age: "18 years old",
  //     role: "Design Engineer,Resources Manager",
  //   },
  //   {
  //     name: "Nicole Villalta Barrantes",
  //     img: "src/Nicole.png",
  //     age: "17 years old",
  //     role: "Social Media Manager, Marketing Manager",
  //   },
  //   {
  //     name: "David Vargas Arias",
  //     img: "src/David.png",
  //     age: "18 years old",
  //     role: "Finance Manager, Sponsorship, Partnerships Manager, Graphic Designer",
  //   },
  //   {
  //     name: "Hillary Soto Martinez",
  //     img: "src/Hilary.png",
  //     age: "17 years old",
  //     role: "Social Media Manager, Marketing Manager",
  //   },
  //   {
  //     name: "Kevin Bolaños Mena",
  //     img: "src/Kevin.png",
  //     age: "18 years old",
  //     role: "Manufacturing Engineer",
  //   },
  // ];

  return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage/>
            }
          />
          <Route path="*" element={<Error404Page/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
