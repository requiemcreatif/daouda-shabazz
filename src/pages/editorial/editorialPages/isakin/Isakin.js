import React from "react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/footer/Footer";
import { EditDiv } from "../../Editorials";
import { DivContainer } from "../clemence/Clemence";
import { isakinList } from "./isakinList";
import styled from "styled-components";
const Isakin = ({ toggleTheme, isDarkTheme }) => {
  return (
    <EditDiv>
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <DivContainer>
        {isakinList.map((image) => (
          <img src={image.imgURL} alt="editorial" key={image.id} />
        ))}
      </DivContainer>
      <Footer />
    </EditDiv>
  );
};

export default Isakin;
