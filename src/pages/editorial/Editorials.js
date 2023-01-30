import React from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import EditorialContent from "../../components/editorial/EditorialContent";

const EditDiv = styled.div`
  display: grid;
  align-items: center;
`;

const Editorials = ({ toggleTheme, isDarkTheme }) => {
  return (
    <EditDiv>
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <EditorialContent toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Footer />
    </EditDiv>
  );
};

export default Editorials;
