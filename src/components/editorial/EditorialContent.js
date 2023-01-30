import React from "react";
import styled from "styled-components";

import Image1 from "../../images/editorials/clemence/6-DSCF9103.jpg";
import Image2 from "../../images/editorials/ares/2-DSCF4089.jpg";
import Image3 from "../../images/editorials/lowrider/6-DSCF0999.jpg";
import Image4 from "../../images/editorials/isakin/2-86F5929B-C13E-427E-8C61-75C43790D872-38121-0000177CCFFD118D.jpg";

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
      <img src={Image2} alt="Image1" />
      <img src={Image3} alt="Image1" />
      <img src={Image4} alt="Image1" />
    </EditDiv>
  );
};

export default EditorialContent;
