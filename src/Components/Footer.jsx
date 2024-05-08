import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex flex-col w-screen justify-center gap-4 lg:gap-10">
      <hr />
      <div className="flex flex-col-reverse lg:flex-row justify-around items-center gap-2 lg:gap-8">
        <div className="flex items-center justify-center">
          <span className="text-white text-center text-xs lg:text-justify lg:text-base">
            © CopyrightNexusRacing 2024 | Todos los derechos reservados
          </span>
        </div>
        <nav className="">
          <ul className="flex gap-[1em] text-white lg:text-lg text-2xl">
            <li>
              <a href=" https://www.instagram.com/nexusracing_cr?igsh=MTB1ZDA5aDBoc3R6eg==" target="_blank">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61558941251090&mibextid=kFxxJD" target="_blank">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://youtube.com/@NexusRacing_cr?si=ng3AQQ4X4d-5j7uO" target="_blank" >
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/NexusRacing_cr?t=hJMnvKaTGmKE5uAiZDTvvA&s=08" target="_blank" >
                <BsTwitterX />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
