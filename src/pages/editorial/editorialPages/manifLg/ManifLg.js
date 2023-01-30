import React from "react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/footer/Footer";
import { EditDiv } from "../../Editorials";
import { DivContainer } from "../clemence/Clemence";
import { manifLgList } from "./manifLgList";
import styled from "styled-components";

const ManifLg = ({ toggleTheme, isDarkTheme }) => {
  return (
    <EditDiv>
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <DivContainer>
        {manifLgList.map((image) => (
          <img src={image.imgURL} alt="editorial" key={image.id} />
        ))}
      </DivContainer>
      <Footer />
    </EditDiv>
  );
};

export default ManifLg;
