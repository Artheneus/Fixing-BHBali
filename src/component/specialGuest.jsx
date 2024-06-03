import React from "react";

const Cards = () => {
  return (
    <div id="special" className="w-full pt-0.5 pb-0.5 bg-black">
      <div className="bg-gray-200 px-4 pt-12">
        <h1 className="font-bold text-4xl w-full justify-between text-center rounded-lg pb-3 pt-5 text-black">
          SPECIAL GUEST
        </h1>
        <h1 className="font-bold text-4xl w-full justify-between text-center pt-7 px-4 pb-12 text-black">
          COMING SOON
        </h1>
        <div className="max-w-[1160px] mx-auto grid md:grid-cols-3 gap-3 "></div>
      </div>
    </div>
  );
};

export default Cards;
