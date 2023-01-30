import React from "react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/footer/Footer";
import { EditDiv } from "../../Editorials";
import { clemenceList } from "./clemenceList";
import styled from "styled-components";

export const DivContainer = styled.div`
  padding: 10rem 2rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    padding: 10rem 2rem 2rem 2rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Clementine = ({ toggleTheme, isDarkTheme }) => {
  return (
    <EditDiv>
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <DivContainer>
        {clemenceList.map((image) => (
          <img src={image.imgURL} alt="editorial" key={image.id} />
        ))}
      </DivContainer>

      <Footer />
    </EditDiv>
  );
};

export default Clementine;
