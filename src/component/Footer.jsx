import React from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import logo from "../assets/edit-logo.png";
import WA from "../assets/WhatsAppButtonGreenMedium.svg";
import Gmail from "../assets/gmail-144.svg";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[1240px] mx-auto pt-7 grid lg:grid-cols-3 gap-4 text-gray-300">
        <div className="flex w-[100%] lg:justify-start justify-center pb-2">
          <div className="w-[150px] lg:ml-8">
            <img src={logo} alt="" />
          </div>
        </div>
        <div></div>
        <div className="flex lg:justify-end justify-center items-center mb-5 lg:mb-2">
          <div className="px-5">
            <button>
              {/* <a href="https://wa.me/628991900157">
                <FaSquareWhatsapp size={40} />
                <img src={WA} alt="Whatsapp" />
              </a> */}
              <a
                aria-label="Chat on WhatsApp"
                href="https://wa.me/628991900157"
              >
                <img alt="Chat on WhatsApp" src={WA} />
              </a>
            </button>
          </div>
          <div className="px-2">
            <button>
              <a href="mailto:wisnua470@gmail.com">
                {/* <IoMdMail size={45} /> */}
                <img className="w-[50px]" src={Gmail} alt="" />
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="flex text-white justify-center items-end pb-2">
        <p className="w-full text-wrap text-center px-4">
          Flesh and Blood® is a trademark of Legend Story Studios®.
        </p>
      </div>
    </div>
  );
};

export default Footer;
