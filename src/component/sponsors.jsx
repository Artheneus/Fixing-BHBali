import React from "react";
// import imgs from "../assets/no-img.png";

const Cards = () => {
  return (
    <div id="sponsor" className="w-full pt-0.5 pb-0.5 bg-black">
      <div className="bg-gray-200 px-4 pt-12">
        <h1 className="font-bold text-4xl w-full justify-between text-center rounded-lg pb-3 pt-5 text-black">
          SPONSORS
        </h1>
        <h1 className="font-bold text-4xl w-full justify-between text-center pt-7 px-4 pb-12 text-black">
          COMING SOON
        </h1>
        <div className="max-w-[1160px] mx-auto grid md:grid-cols-3 gap-3 ">
          {/* cards */}
          {/* <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300 bg-white">
            <h2 className="text-2xl font-bold text-center py-5">Pro Quest</h2>
            <div className="flex justify-center items-center pb-3">
              <img className="w-[100px]" src={imgs} alt="" />
            </div>
            <p className="text-center text-4xl font-bold ">US$35</p>
            <div className="text-center font-medium">
              <p>.desc</p>
            </div>
            <div className="flex justify-center">
              <button className="bg-black w-[200px] rounded-md font-medium my-4 mx-auto md:mx-0 py-3 text-[#00df9a]">
                Register
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
