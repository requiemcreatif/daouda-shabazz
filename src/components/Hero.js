import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  //padding-top: 5rem;
  background-color: #000;
  height: 1000px;
  max-width: 2000px;
  margin: 0 auto;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    padding: 10rem 2rem 2rem 2rem;
    text-align: center;
  }
  h1 {
    font-size: 6em;
    font-weight: 800;
    //capitalize
    text-transform: uppercase;
  }

  p {
    text-align: center;
    max-width: 800px;
    line-height: 1.5;
    font-size: 1.5rem;
    font-weight: 300;
  }

  .quote {
    max-width: 600px;
    font-size: 1.3rem;
    font-weight: 300;
    text-align: center;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <h1>
        Daouda <br /> Shabazz
      </h1>

      <p>
        Daouda Shabazz, photographe autodidacte, est un témoin de son monde. Il y a longtemps déjà
        que l'image et lui sont complices. Fasciné, captivé par les séquences, il a su capter très
        tôt les défilés d'images... Celles des films, des courts métrages, des clips, des animations
        de tous genres. Représentant de l'instant, il perçoit ce que certains n'ont plus le temps de
        voir. Résidant à Paris, il est disponible pour des projets dans le monde entier.
      </p>

      <p className="quote">
        <em>
          "Photographier un portrait me fait voyager sans connaitre la trajectoire, Découvrir
          l'inconnu dans un regard, Et autant d'êtres humains que de passerelles, Me font voler sans
          aile." Daouda Shabazz
        </em>
      </p>
    </HeroContainer>
  );
};

export default Hero;
