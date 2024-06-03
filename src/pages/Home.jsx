import React from "react";
import Hero from "../component/Hero";
import Special from "../component/specialGuest";
import Cards from "../component/Cards";
import Footer from "../component/Footer";
import Schedule from "../component/Schedule";
import Locations from "../component/locations";
import Navbar from "../component/Navbar";
import Sponsor from "../component/sponsors";

const Home = () => {
  return (
    <>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section>
        <Cards />
      </section>
      <section>
        <Schedule />
      </section>
      <section>
        <Special />
      </section>
      <section>
        <Locations />
      </section>
      <section>
        <Sponsor />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;
