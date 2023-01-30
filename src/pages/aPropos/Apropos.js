import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/footer/Footer";

const Apropos = ({ toggleTheme, isDarkTheme }) => {
  return (
    <div>
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Hero />
      <Footer />
    </div>
  );
};

export default Apropos;
