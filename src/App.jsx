import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error404Page from './pages/Error/Error404Page.jsx';
import HomePage from './pages/Home/HomePage.jsx';

const App = () => {

  return (
      <div className="bg-black h-screen flex justify-center items-center flex-col">
        <h1 className="text-white text-[5.2em] lg:text-[7em] font-SairaBold tracking-widest">NEXUS</h1>
        <p className="text-white text-[1.5em]">
          Coming Soon
        </p>
      </div>
  );
};

export default App;
