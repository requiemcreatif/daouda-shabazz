import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import EditorialContent from "../components/editorial/EditorialContent";

const Editorials = ({ toggleTheme, isDarkTheme }) => {
  return (
    <div>
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      {/* <Hero /> */}
      <EditorialContent toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Footer />
    </div>
  );
};

export default Editorials;
