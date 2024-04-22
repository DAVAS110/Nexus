import { Link } from "react-router-dom";

import ErrorImage from "../../assets/404Error.png";

import { IoIosArrowForward } from "react-icons/io";

const Error404 = () => {
  return (
    <div className="h-screen bg-black flex items-center justify-center flex-col gap-8">
      <img src={ErrorImage} alt="" />
      <p className="text-white text-xl">Sorry Page Not Found</p>
      <Link className="flex items-center bg-white/30 px-8 py-2 rounded-lg gap-2" to="/">
        <IoIosArrowForward color="white"/>
        <span className="text-white">Go Home</span>
      </Link>
    </div>
  );
};

export default Error404;
