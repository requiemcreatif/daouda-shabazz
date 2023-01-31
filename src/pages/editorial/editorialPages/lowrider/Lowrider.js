import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/footer/Footer";
import { EditDiv } from "../../Editorials";
import { DivContainer } from "../clemence/Clemence";
import { lowriderList } from "./lowriderList";
import styled from "styled-components";

const Lowrider = ({ toggleTheme, isDarkTheme }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(lowriderList);
  }, []);
  return (
    <EditDiv>
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <DivContainer>
        {list.map((image) => (
          <img src={image.imgURL} alt="editorial" key={image.id} />
        ))}
      </DivContainer>
      <Footer />
    </EditDiv>
  );
};

export default Lowrider;
