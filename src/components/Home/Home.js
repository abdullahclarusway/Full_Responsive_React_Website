import React from "react";
import Hero from "./Hero";
import "./Home.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
