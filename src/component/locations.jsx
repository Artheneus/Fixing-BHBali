import React from "react";
import Map from "./CustomMap";
import { APIProvider } from "@vis.gl/react-google-maps";

const locations = () => {
  return (
    <div id="Location" className="pt-0.5">
      <div className="w-full pb-6 bg-white">
        <h1 className="font-bold text-4xl w-full justify-between text-center pt-14 px-4 pb-3 text-black">
          LOCATION
        </h1>
        <p className="font-bold text-2xl w-full justify-between pl-2">
          Lippo Mall Kuta
        </p>
        <p className="font-sm text-xl w-full justify-between pl-2">
          Jl. Kartika Plaza, Lingkungan Segara, Kec. Kuta, Kabupaten Badung,
          Bali 80361
        </p>

        {/* <h1 className="font-bold text-4xl w-full justify-between text-center pt-7 px-4 pb-3 text-black">
          COMING SOON
        </h1> */}
      </div>
      <div className="w-full h-[26rem] px-1 py-1 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2735.3282161776515!2d115.16659666199763!3d-8.735032271387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2456c0afbacb5%3A0x80362f07119ddba5!2sLippo%20Mall%20Kuta!5e0!3m2!1sid!2sid!4v1717070988087!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default locations;
