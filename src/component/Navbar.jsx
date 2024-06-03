import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/edit-logo.png";
import Cart from "./Cart";

const Navbar = () => {
  // const cartItems = useSelector((state) => state.cart.cart);
  // console.log(cartItems);

  const [nav, setNav] = useState(false);
  // const [coms, setComs] = useState(false);
  const [show, setShow] = useState(true);

  const controlNav = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNav);

    return () => {
      window.removeEventListener("scroll", controlNav);
    };
  }, []);

  const onClose = () => setNav(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    //PC Navbar
    <div
      className={`nav ${
        show
          ? `fixed flex scroll-auto md:fixed bg-black md:bg-transparent justify-start items-center h-10 md:h-20 w-[100%] mx-auto px-4 text-white z-[200] md:ease-in-out md:duration-200 md:backdrop-blur-xs`
          : `fixed flex scroll-auto md:fixed bg-black md:bg-black justify-start items-center h-10 md:h-12 w-full mx-auto px-4 text-white z-[200] md:ease-in-out md:duration-200`
      }`}
    >
      <h1
        className={`nav ${
          show
            ? `hidden md:flex w-[100px] ml-14 ease-in-out duration-200`
            : `hidden md:flex w-[100px] mt-10 ml-14 ease-in-out duration-200`
        }`}
      >
        <a href="/">
          <img className="" src={logo} alt="" />
        </a>
      </h1>
      <ul className="hidden md:flex text-lg ml-8">
        <div className="flex justify-between font-normal items-center">
          <li className="p-6 hover:text-gray-300">
            <a href="#registration">Registration</a>
          </li>
          <li className="p-6 hover:text-gray-300">
            <a href="#schedule">Schedule</a>
          </li>
          <li className="p-6 hover:text-gray-300">
            <a href="#special">Special Guest</a>
          </li>
          <li className="p-6 hover:text-gray-300">
            <a href="#Location">Location</a>
          </li>
          <li className="p-6">
            <a href="#sponsor">Sponsors{/* <Dropdown /> */}</a>
          </li>
        </div>

        <div className="py-[1.90rem] ml-6 pr-.5">
          <li className="ml-14">
            <div className="w-[50px]">
              <Cart />
            </div>
          </li>
        </div>

        {/* <li className="py-9 pl-3.5">
          <Link to="/loginRegis">
            <AiOutlineUser size={24} />
          </Link>
        </li> */}
        <li className="py-9 pl-3 pr-6"></li>
      </ul>

      {/* Phone Sidebar */}
      <div className="md:hidden w-full">
        <div className="flex justify-between ">
          <div onClick={handleNav} className="block md:hidden pt-1.5">
            {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <div>
            <Cart />
          </div>
        </div>

        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-[100%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "fixed left-[-100%] top-0 w-[60%] h-[100%] border-r border-r-gray-900 bg-black ease-in-out duration-500"
          }
        >
          <h1
            className={`nav ${
              show
                ? `w-full text-2xl font-bold m-4 pt-4`
                : `w-full text-2xl font-bold m-4 pt-4`
            }`}
          >
            <div onClick={handleNav} className="md:hidden mt-[-22px]">
              <AiOutlineClose size={20} />
            </div>

            <a href="/">
              <img
                className="w-[200px] justify-center items-center ml-5"
                src={logo}
                alt=""
              />
            </a>
          </h1>
          <ul className="uppercase p-4 pl-12 pr-12 text-center text-[14pt]">
            <li className="p-4 border-b border-gray-600">
              <a onClick={onClose} href="#registration">
                Registration
              </a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a onClick={onClose} href="#schedule">
                Schedule
              </a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a onClick={onClose} href="#special">
                Special Guest
              </a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a onClick={onClose} href="#Location">
                Location
              </a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a onClick={onClose} href="#sponsor">
                Sponsors
              </a>
            </li>
            <div className="flex items-center justify-center">
              {/* <li className="py-3 pl-2">
                <Link to="/loginRegis">
                  <AiOutlineUser size={24} />
                </Link>
              </li> */}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* 
  <div onClick={handleComs} className="block md-hidden">
  
  </div>
*/
}
