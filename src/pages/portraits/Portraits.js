import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import CardGrid from "../../components/portraits/CardGrid";
import Footer from "../../components/footer/Footer";

const Portraits = ({ toggleTheme, isDarkTheme }) => {
  return (
    <div>
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Hero isDarkTheme={isDarkTheme} />
      <CardGrid />

      <Footer />
    </div>
  );
};

export default Portraits;

/*<Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Hero isDarkTheme={isDarkTheme} />
        <CardGrid />
        <Footer /> */
