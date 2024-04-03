import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="h-[90px]">
      <nav className="h-full w-full flex justify-around border-b-4 border-white p-5">
        <a href="#" className="navbar-hover w-">
          <span className="text-white text-xl font-semibold font-mono">About Us</span>
        </a>
        <a href="#" className="navbar-hover">
          <span className="text-white text-xl font-semibold font-mono">Our Stand</span>
        </a>
        <div></div>
        <a href="#" className="navbar-hover">
          <span className="text-white text-xl font-semibold font-mono">Our Team</span>
        </a>
        <a href="#" className="navbar-hover">
          <span className="text-white text-xl font-semibold h-full font-mono">Sponsors</span>
        </a>
      </nav>
      <div className="relative flex h-2 w-full flex-col items-center">
        <div className="mt-[-6em]">
          <a href="#">
            <img src={Logo} className="h-[11em] w-full" alt="" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
