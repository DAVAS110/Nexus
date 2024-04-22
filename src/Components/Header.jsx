import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import blackLogo from '../assets/Black-Logo.png';
import whiteLogo from '../assets/White-Logo.png';
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
            <a href="#AboutUs">
              <span
                className={`text-${headerStatus} text-xl lg:text-[.9rem] font-semibold`}
              >
                About Us
              </span>
            </a>
          </li>
          <li>
            <a href="#OurStand">
              <span
                className={`text-${headerStatus} text-xl lg:text-[.9rem] font-semibold`}
              >
                Our Stand
              </span>
            </a>
          </li>
          <li>
            <a href="#OurTeam">
              <span
                className={`text-${headerStatus} text-xl lg:text-[.9rem]  font-semibold`}
              >
                Our Team
              </span>
            </a>
          </li>
          <li>
            <a href="#Sponsors">
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
        <div className="mt-[-5em]">
          <a href="#Home">
            {headerStatus === 'black' ? (
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

Header.propTypes = {
  scrollStatus: PropTypes.number.isRequired,
};

export default Header;
