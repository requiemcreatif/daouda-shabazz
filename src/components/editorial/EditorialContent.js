import React from "react";
import styled from "styled-components";

import Image1 from "../../images/portraits/25-AA4099C1-87AB-4719-B861-EEC550DA5DBD-4733-000001B699E0A255-2.jpg";

const EditDiv = styled.div`
  padding: 10rem 2rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 10rem 2rem 2rem 2rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const EditorialContent = () => {
  return (
    <EditDiv>
      <img src={Image1} alt="Image1" />
      <img src={Image1} alt="Image1" />
      <img src={Image1} alt="Image1" />
      <img src={Image1} alt="Image1" />
    </EditDiv>
  );
};

export default EditorialContent;
