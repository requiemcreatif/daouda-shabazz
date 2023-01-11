import React from "react";
import { useState } from "react";
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #eee;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const ModalCloseButton = styled.button`
  appearance: none;
  border: 0;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
`;

const CardGrid = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <CardGridDiv>
        <img src={Image1} alt="" onClick={() => handleImageClick(Image1)} />
        <img src={Image2} alt="" onClick={() => handleImageClick(Image2)} />
        <img src={Image3} alt="" onClick={() => handleImageClick(Image3)} />
        <img src={Image4} alt="" onClick={() => handleImageClick(Image4)} />
        <img src={Image5} alt="" onClick={() => handleImageClick(Image5)} />
        <img src={Image6} alt="" onClick={() => handleImageClick(Image6)} />
        <img src={Image7} alt="" onClick={() => handleImageClick(Image7)} />
        <img src={Image8} alt="" onClick={() => handleImageClick(Image8)} />
        <img src={Image9} alt="" onClick={() => handleImageClick(Image9)} />
        <img src={Image10} alt="" onClick={() => handleImageClick(Image10)} />
        <img src={Image11} alt="" onClick={() => handleImageClick(Image11)} />
        <img src={Image12} alt="" onClick={() => handleImageClick(Image12)} />
      </CardGridDiv>
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Selected Image</ModalTitle>
              <ModalCloseButton onClick={handleModalClose}>×</ModalCloseButton>
            </ModalHeader>
            <img src={selectedImage} alt="" />
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
};

export default CardGrid;
