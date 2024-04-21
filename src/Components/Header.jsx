import { useState, useEffect } from "react";

import blackLogo from "../assets/Black-Logo.png";
import whiteLogo from "../assets/White-Logo.png";
import "../index.css"

const Header = ({ scrollStatus }) => {
  const [headerStatus, setHeaderStatus] = useState("");

  useEffect(() => {
    if (scrollStatus % 50 === 0) {
      setHeaderStatus("white");
    } else if (scrollStatus % 50 === 25) {
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
        className={`${
          headerStatus === "white" ? "border-white" : "border-black"
        } h-full w-full flex items-center justify-evenly border-b-4 p-5`}
      >
        <a href="#AboutUs">
          <span
            className={`text-${headerStatus} text-[.9rem] font-semibold`}
          >
            About Us
          </span>
        </a>
        <a href="#OurStand">
          <span
            className={`text-${headerStatus} text-[.9rem] font-semibold`}
          >
            Our Stand
          </span>
        </a>
        <div></div>
        <a href="#OurTeam">
          <span
            className={`text-${headerStatus} text-[.9rem] font-semibold`}
          >
            Our Team
          </span>
        </a>
        <a href="#Sponsors">
          <span
            className={`text-${headerStatus} text-[.9rem] font-semibold`}
          >
            Sponsors
          </span>
        </a>
      </nav>
      <div className="relative flex h-2 w-full flex-col items-center z-50">
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
