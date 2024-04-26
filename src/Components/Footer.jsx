import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex flex-col w-screen justify-center gap-10">
      <hr />
      <div className="flex flex-col lg:flex-row justify-around items-center gap-8 lg:gap-0">
        <div className="flex items-center justify-center">
          <span className="text-white text-center lg:text-justify">
            © CopyrightNexusRacing 2024 | Todos los derechos reservados
          </span>
        </div>
        <nav className="">
          <ul className="flex gap-[1em] text-white lg:text-lg text-2xl">
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="#">
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
