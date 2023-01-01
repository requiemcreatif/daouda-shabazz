import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  background-color: #000;
  color: #fff;
  height: 50vh;
  max-width: 2000px;
  margin: 0 auto;

  h1 {
    font-size: 3em;
    font-weight: 800;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <h1>DAOUDA SHABAZZ</h1>

      <p>
        Daouda Shabazz, photographe autodidacte, est un témoin de son monde. Il y a longtemps déjà
        que l'image et lui sont complices. Fasciné, captivé par les séquences, il a su capter très
        tôt les défilés d'images... Celles des films, des courts métrages, des clips, des animations
        de tous genres. Représentant de l'instant, il perçoit ce que certains n'ont plus le temps de
        voir. Résidant à Paris, il est disponible pour des projets dans le monde entier.
      </p>
    </HeroContainer>
  );
};

export default Hero;
