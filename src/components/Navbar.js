import React from "react";
import styled from "styled-components";
import "../App.css";
import { ImFacebook } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";

const NavbarDiv = styled.div`
  //max-width: 2000px;
  margin: 0 auto;
  background-color: #000;
  color: #fff;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  gap: 4rem;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  label {
    //padding-left: 10rem;
  }
`;

const SocialDiv = styled.div`
  display: flex;
  gap: 2rem;

  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
  }

  li {
    cursor: pointer;
    &:hover {
      color: #aa2323;
    }
  }
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

const Navbar = ({ isDarkTheme, toggleTheme }) => {
  return (
    <NavbarDiv className="navbar-div">
      <Nav>
        <ul>
          <li>PORTRAITS</li>
          <li>EDITORIALS</li>
          <li>A PROPOS</li>
          <li>CONTACT</li>
        </ul>
      </Nav>
      <SocialDiv>
        <ul>
          <li>
            <AiOutlineInstagram />
          </li>
          <li>
            <ImFacebook />
          </li>
        </ul>
      </SocialDiv>
      <label className="switch">
        <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
    </NavbarDiv>
  );
};

export default Navbar;
