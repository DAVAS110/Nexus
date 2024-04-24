import Logo_F1inSchoolcr from "../assets/Team-Cards/F1inSchoolcr.webp";
import Logo_NexusWhite from "../assets/Team-Cards/NexusWhite.webp";
import NeonBlueBar from "../assets/Team-Cards/NeonBlueBar.webp";
import ElipseBlue from "../assets/Team-Cards/EllipseBlue.webp";
import NeonRedBar from "../assets/Team-Cards/NeonRedBar.webp";
import ElipseRed from "../assets/Team-Cards/EllipseRed.webp";
import FlagCr from "../assets/Team-Cards/FlagCr.webp";

import { FaXTwitter, FaInstagram } from "react-icons/fa6";

import Image_Gamboa from "../assets/Team-Cards/users-images/Image-Gamboa.webp";
import Image_Nicole from "../assets/Team-Cards/users-images/Image-Nicole.webp";
import Image_Hilary from "../assets/Team-Cards/users-images/Image-Hilary.webp";
import Image_Joshua from "../assets/Team-Cards/users-images/Image-Joshua.webp";
import Image_Kevin from "../assets/Team-Cards/users-images/Image-Kevin.webp";
import Image_David from "../assets/Team-Cards/users-images/Image-David.webp";

import Name_Gamboa from "../assets/Team-Cards/users-names/Name-Gamboa.webp";
import Name_Nicole from "../assets/Team-Cards/users-names/Name-Nicole.webp";
import Name_Hilary from "../assets/Team-Cards/users-names/Name-Hilary.webp";
import Name_Joshua from "../assets/Team-Cards/users-names/Name-Joshua.webp";
import Name_Kevin from "../assets/Team-Cards/users-names/Name-Kevin.webp";
import Name_David from "../assets/Team-Cards/users-names/Name-David.webp";

const UserCards = () => {

  return users.map(({ key ,name, lastName, img, roles, socialMedia }) => (
    <div className="flex flex-col h-[25em] w-[18em] bg-black px-3 py-4 rounded-lg" key={key}>
      <div className="flex justify-between items-center h-full mx-2">
        <img src={Logo_F1inSchoolcr} alt="" />
        <img src={Logo_NexusWhite} alt="" />
      </div>
      <img src={NeonRedBar} alt="" />
      <div className="flex flex-col items-center justify-center gap-2 my-5">
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
  ));
};

export default UserCards;
