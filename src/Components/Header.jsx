import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import blackLogo from '../assets/Black-Logo.webp';
import whiteLogo from '../assets/White-Logo.webp';
import { HiOutlineXMark, HiOutlineBars3BottomRight } from 'react-icons/hi2';

const Header = ({ scrollStatus }) => {
  const [headerStatus, setHeaderStatus] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (scrollStatus % 50 === 0) {
      setHeaderStatus('white');
    } else if (scrollStatus % 50 === 25) {
      setHeaderStatus('black');
    }
  }, [scrollStatus]);

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`${isOpen ? 'h-full' : 'h-[90px]'} border-b-[6px] ${
        headerStatus === 'white' ? 'bg-black' : 'bg-white'
      } ${headerStatus === 'white' ? 'border-white' : 'border-black'} ease-in-out duration-1000 transition-height`}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`h-10 w-10 text-${headerStatus} absolute right-1 top-8 cursor-pointer lg:hidden z-20`}
      >
        {isOpen ? (
          <HiOutlineXMark size={24} />
        ) : (
          <HiOutlineBars3BottomRight size={24} />
        )}
      </div>
      <nav
        className={` h-full w-full flex flex-col lg:flex-row justify-evenly items-center lg:items-center p-5 contenedor`}
      >
        <ul
          className={`flex items-center gap-10 flex-col h-full lg:flex-row justify-evenly lg:items-center lg:static absolute left-0 w-screen ease-in-out duration-1000 transition-all lg:translate-y-0 p-20 lg:p-2 ${
            isOpen ? 'translate-y-0' : '-translate-y-full '
          }`}
        >
          <li>
            <a href="#AboutUs" onClick={handleNavLinkClick}>
              <span
                className={`text-${headerStatus} text-xl lg:text-[.9rem] font-semibold`}
              >
                About Us
              </span>
            </a>
          </li>
          <li>
            <a href="#OurStand" onClick={handleNavLinkClick}>
              <span
                className={`text-${headerStatus} text-xl lg:text-[.9rem] font-semibold`}
              >
                Our Stand
              </span>
            </a>
          </li>
          <li>
            <a href="#OurTeam" onClick={handleNavLinkClick}>
              <span
                className={`text-${headerStatus} text-xl lg:text-[.9rem]  font-semibold`}
              >
                Our Team
              </span>
            </a>
          </li>
          <li>
            <a href="#Sponsors" onClick={handleNavLinkClick}>
              <span
                className={`text-${headerStatus} text-xl lg:text-[.9rem] font-semibold`}
              >
                Sponsors
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="relative flex h-2 w-full flex-col items-center z-50">
        <div className="mt-[-4.5em]">
          <a href="#Home">
            <img
              src={headerStatus === 'black' ? blackLogo : whiteLogo}
              className="w-[9em] h-[9em]"
              alt="Logo"
              loading="lazy" 
            />
          </a>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  scrollStatus: PropTypes.number.isRequired,
};

export default Header;
