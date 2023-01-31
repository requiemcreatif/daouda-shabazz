import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import "../App.css";
import { ImFacebook } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";

const NavbarDiv = styled.div`
  @media (max-width: 768px) {
    .full-switch {
      display: none;
    }
  }
  .nav-switch {
    display: none;

    @media (max-width: 768px) {
      //margin: 0 auto;
      display: flex;

      align-items: center;
      justify-content: center;
      gap: 25rem;
    }
  }
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

  .mobile-nav {
    display: none;
  }

  .active {
    color: #aa2323;
  }

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #aa2323;
    }

    &:active {
      color: #aa2323;
    }
  }
`;

export const SocialDiv = styled.div`
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
      text-decoration: none;
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

const style = {
  color: "#fff",
  fontSize: "4rem",
};

const Navbar = ({ isDarkTheme, toggleTheme }) => {
  const location = useLocation();
  return (
    <>
      <NavbarDiv className="navbar-div">
        <div className="mobile-nav">
          <MobileNav />
        </div>

        <Nav>
          <ul>
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                PORTRAITS
              </Link>
            </li>
            <li>
              <Link
                to="/editorials"
                className={location.pathname === "/editorials" ? "active" : ""}>
                EDITORIALS
              </Link>
            </li>
            <li>
              <Link to="/apropos" className={location.pathname === "/apropos" ? "active" : ""}>
                A PROPOS
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                CONTACT
              </Link>
            </li>
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
        <label className="switch full-switch">
          <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
          <span className="slider"></span>
        </label>
        <div className="nav-switch">
          <label className="switch">
            <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
          <div>
            <GiHamburgerMenu style={style} />
          </div>
        </div>
      </NavbarDiv>
    </>
  );
};

export default Navbar;
