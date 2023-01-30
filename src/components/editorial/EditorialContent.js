import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { editorialList } from "../../pages/editorial/editorialList";

const LazyImage = lazy(() => import("./LazyImage"));

const EditDiv = styled.div`
  padding: 10rem 2rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media (max-width: 768px) {
    padding: 10rem 2rem 2rem 2rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const EditorialContent = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <EditDiv>
      {editorialList.map((image, index) => (
        <div key={index}>
          <Link to={`/${image.page}`}>
            <LazyImage src={image.imgURL} alt="editorial" key={image.id} />
          </Link>
        </div>
      ))}
    </EditDiv>
  </Suspense>
);

export default EditorialContent;
