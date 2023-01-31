import React from "react";
import { useState, useEffect } from "react";
import { portraitList } from "../../pages/portraits/portraitList";
import styled from "styled-components";

const CardGridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;

    img {
      width: 100%;
    }
  }
`;

const CardGrid = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(portraitList);
  }, []);
  return (
    <CardGridDiv>
      {list.map((image) => (
        <img src={image.imgURL} alt="portrait" key={image.id} />
      ))}
    </CardGridDiv>
  );
};

export default CardGrid;
