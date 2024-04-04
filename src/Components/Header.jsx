import blackLogo from "../assets/Black-Logo.png";
import whiteLogo from "../assets/White-Logo.png";

import { useState, useEffect } from "react";

const Header = ({ scrollStatus }) => {
  const [headerStatus, setHeaderStatus] = useState("");

  // 0 home, 50 y 100 bg negro = letras blancas
  // 25 y 75 bg blanco = letras negras

  useEffect(() => {
    // Actualizar el estado del encabezado según el estado del desplazamiento
    if (scrollStatus === 50 || scrollStatus === 100 || scrollStatus === 0) {
      setHeaderStatus("white");
    } else if (scrollStatus === 25 || scrollStatus === 75) {
      setHeaderStatus("black");
    }
  }, [scrollStatus]);

  return (
    <header
      className={`h-[90px] ${
        headerStatus === "white" ? "bg-black" : "bg-white"
      }`}
    >
      <nav
        className={`border-${headerStatus} h-full w-full flex items-center justify-around border-b-4 p-5`}
      >
        <a href="#AboutUs" className="navbar-hover">
          <span className={`text-${headerStatus} font-Arial text-[.9rem] font-semibold`}>
            About Us
          </span>
        </a>
        <a href="#OurStand" className="navbar-hover">
          <span className={`text-${headerStatus} font-Arial text-[.9rem] font-semibold`}>
            Our Stand
          </span>
        </a>
        <div></div>
        <a href="#OurTeam" className="navbar-hover">
          <span className={`text-${headerStatus} font-Arial text-[.9rem] font-semibold`}>
            Our Team
          </span>
        </a>
        <a href="#Sponsors" className="navbar-hover">
          <span className={`text-${headerStatus}  font-Arial text-[.9rem] font-semibold`}>
            Sponsors
          </span>
        </a>
      </nav>
      <div className="relative flex h-2 w-full flex-col items-center">
        <div className="mt-[-5em]">
          <a href="#Home">
            {headerStatus === "black" ? (
              <img src={blackLogo} className="h-[9em] w-full" alt="" />
            ) : (
              <img src={whiteLogo} className="h-[9em] w-full" alt="" />
            )}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
