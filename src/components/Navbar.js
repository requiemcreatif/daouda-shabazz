import React from "react";
import styled from "styled-components";
import { ImFacebook } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";

const NavbarDiv = styled.div`
  //max-width: 2000px;
  margin: 0 auto;
  background-color: #000;
  color: #fff;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  gap: 4rem;
`;

const SocialDiv = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Nav = styled.nav`
  //margin: 0 auto;
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    font-weight: 600;

    li {
      cursor: pointer;
      &:hover {
        color: #aa2323;
      }
      &:active {
        color: #aa2323;
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarDiv>
      <Nav>
        <ul>
          <li>PORTRAITS</li>
          <li>EDITORIALS</li>
          <li>A PROPOS</li>
          <li>CONTACT</li>
        </ul>
      </Nav>
      <SocialDiv>
        <AiOutlineInstagram />
        <ImFacebook />
      </SocialDiv>
    </NavbarDiv>
  );
};

export default Navbar;