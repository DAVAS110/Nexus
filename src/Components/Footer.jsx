import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative flex mt-1 justify-around h-[1em] border-white border-t-2">
      <div className="mt-6">
        <span className="text-white">
          © CopyrightNexusRacing 2024 | Todos los derechos reservados
        </span>
      </div>
      <nav className="mt-6">
        <ul className="flex gap-[1em] items-center justify-around text-white">
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
    </footer>
  );
};

export default Footer;
