import React from "react";
import styled from "styled-components";
import Image1 from "../images/portraits/25-AA4099C1-87AB-4719-B861-EEC550DA5DBD-4733-000001B699E0A255-2.jpg";
import Image2 from "../images/portraits/26-DSCF0696.jpg";
import Image3 from "../images/portraits/27-B68D2132-0644-45CE-8967-81C5DD6EE28C-51731-00001F1B29BB1B48.jpg";
import Image4 from "../images/portraits/14-F30C8D32-46CD-4572-B1E6-84F25161E663-3241-000001978FB0B855.jpg";
import Image5 from "../images/portraits/28-IMG_7355.jpg";
import Image6 from "../images/portraits/IMG_1990.JPG";
import Image7 from "../images/portraits/DSCF1493-2.jpg";
import Image8 from "../images/portraits/IMG_7975.jpg";
import Image9 from "../images/portraits/DSCF6751.jpg";
import Image10 from "../images/portraits/1-DSCF8333.jpg";
import Image11 from "../images/portraits/12-DSCF1542.jpg";
import Image12 from "../images/portraits/6-IMG_7463.jpg";

const CardGridDiv = styled.div`
  padding: 10rem 2rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    padding: 0 2rem 2rem 2rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CardGrid = () => {
  return (
    <div>
      <CardGridDiv>
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
        <img src={Image4} alt="" />
        <img src={Image5} alt="" />
        <img src={Image6} alt="" />
        <img src={Image7} alt="" />
        <img src={Image8} alt="" />
        <img src={Image9} alt="" />
        <img src={Image10} alt="" />
        <img src={Image11} alt="" />
        <img src={Image12} alt="" />
      </CardGridDiv>
    </div>
  );
};

export default CardGrid;
