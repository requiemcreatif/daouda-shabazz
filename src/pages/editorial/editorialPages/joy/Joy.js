import React from "react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/footer/Footer";
import { EditDiv } from "../../Editorials";
import { DivContainer } from "../clemence/Clemence";
import { joyList } from "./joyList";
import styled from "styled-components";
const Joy = ({ toggleTheme, isDarkTheme }) => {
  return (
    <EditDiv>
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <DivContainer>
        {joyList.map((image) => (
          <img src={image.imgURL} alt="editorial" key={image.id} />
        ))}
      </DivContainer>
      <Footer />
    </EditDiv>
  );
};

export default Joy;
