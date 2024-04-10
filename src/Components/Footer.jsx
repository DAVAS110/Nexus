import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex flex-col w-screen justify-center gap-10">
      <hr />
      <div className="flex justify-around items-center">
      <div className="flex items-center justify-center">
        <span className="text-white">
          © CopyrightNexusRacing 2024 | Todos los derechos reservados
        </span>
      </div>
      <nav className="">
        <ul className="flex gap-[1em] text-white">
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
