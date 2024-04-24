import { useEffect } from "react";
import Glide from "@glidejs/glide";

import {users} from '../usersData.js';

import Logo_F1inSchoolcr from "../assets/Team-Cards/F1inSchoolcr.webp";
import Logo_NexusWhite from "../assets/Team-Cards/NexusWhite.webp";
import NeonBlueBar from "../assets/Team-Cards/NeonBlueBar.webp";
import ElipseBlue from "../assets/Team-Cards/EllipseBlue.webp";
import NeonRedBar from "../assets/Team-Cards/NeonRedBar.webp";
import ElipseRed from "../assets/Team-Cards/EllipseRed.webp";
import FlagCr from "../assets/Team-Cards/FlagCr.webp";

import { FaXTwitter, FaInstagram } from "react-icons/fa6";

const Team = () => {
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 10,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiWhite",
        },
      },
      breakpoints: {
        1024: {
          perView: 3,
        },
        640: {
          perView: 3,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

 

  return (
    <section
      className="relative snap-start h-[calc(100vh-90px)] w-screen flex justify-center items-center bg-white"
      id="OurTeam"
    >
      <div className="glide-03 relative w-[59em]">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <div className="whitespace-no-wrap flex-no-wrap relative flex items-center justify-evenly overflow-hidden p-0 z-40">
            {users.map(({ id, name, lastName, img, roles, socialMedia }) => (
              <div
                className="flex flex-col h-[25em] !w-[18em] bg-black px-3 py-4 rounded-lg"
                key={id}
              >
                <div className="flex justify-between items-center h-full mx-2">
                  <img src={Logo_F1inSchoolcr} alt="" />
                  <img src={Logo_NexusWhite} alt="" />
                </div>
                <img src={NeonRedBar} alt="" />
                <div className="flex flex-col items-center justify-center gap-2 my-4">
                  <img src={img} className="h-[9em]" alt="" />
                  <img src={name} className="h-[1em]" alt="" />
                  <p className="text-white text-sm">{lastName}</p>
                  <div className="flex flex-col items-center justify-center w-full h-full gap-1">
                    <span className="flex text-white text-xs items-center gap-1">
                      <img src={ElipseBlue} alt="" className="h-[1em]" />
                      {roles[0]}
                    </span>
                    <span className="flex text-white text-xs items-center gap-1">
                      <img src={ElipseRed} alt="" className="h-[1em]" />
                      {roles[1]}
                    </span>
                  </div>
                </div>
                <img src={NeonBlueBar} alt="" />
                <div className="flex justify-between items-center h-full mx-2">
                  <img src={FlagCr} alt="" />
                  <span className="flex gap-2">
                    <a href={socialMedia[0]}>
                      <FaXTwitter color="white" />
                    </a>
                    <a href={socialMedia[1]}>
                      <FaInstagram color="white" />
                    </a>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>  
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 z-50"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white-700 bg-white/70 text-white-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white-700 bg-white/70 text-white-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute top-24 left-2 w-32 h-32 lg:w-64 lg:h-64 bg-[#0072bb] rounded-full opacity-85 lg:opacity-70 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 z-0"></div>
      <div className="absolute top-24 right-4 w-32 h-32 lg:w-64 lg:h-64 bg-[#CC0000] rounded-full opacity-85 lg:opacity-70 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 z-0"></div>
      <div className="absolute -bottom-10 left-4  w-32 h-32 lg:w-56 lg:h-56 bg-[#0072bb] rounded-full opacity-85 lg:opacity-70 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 z-0"></div>
    </section>
  );
};

export default Team;
