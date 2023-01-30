import React from "react";
import styled from "styled-components";
import { editorialList } from "../../pages/editorial/editorialList";

const EditDiv = styled.div`
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

const EditorialContent = () => {
  return (
    <EditDiv>
      {editorialList.map((image) => (
        <img src={image.imgURL} alt="editorial" key={image.id} />
      ))}
    </EditDiv>
  );
};

export default EditorialContent;
