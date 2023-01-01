import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  background-color: #aa2323;
  color: #fff;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1.2rem;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <p>© 2023 Daouda Shabazz. Tous droits réservés.</p>
    </FooterDiv>
  );
};

export default Footer;
