import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import "../App.css";
import { ImFacebook } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";

const MobileWrapper = styled.div`
  padding-top: 2rem;
  margin-right: 5rem;
  .nav-switch {
    display: none;
    padding-bottom: 2rem;

    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 26rem;
    }
  }
`;

const Div = styled.div`
  .mob-menu {
    //create a smooth transition
    transition: all 0.5s ease-in-out;
  }
`;

const NavbarDiv = styled.div`
  @media (max-width: 768px) {
    .full-switch {
      display: none;
    }
  }

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

  .closed {
    //display: none;
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
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log("opened");
    setIsOpen(!isOpen);
    document.querySelector(".mobile-nav").classList.toggle("closed");
  };

  const location = useLocation();
  return (
    <>
      <Div className="mobile-nav ">
        <motion.div
          animate={{ x: isOpen ? 0 : -1000 }}
          initial={{ x: -100 }}
          transition={{ duration: 0.3 }}
          className="mob-menu">
          {isOpen && (
            <div>
              <MobileNav toggle={toggle} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          )}
        </motion.div>
      </Div>
      <NavbarDiv className="navbar-div">
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
        <MobileWrapper>
          <div className="nav-switch">
            <label className="switch">
              <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
              <span className="slider"></span>
            </label>

            <GiHamburgerMenu style={style} onClick={toggle} />
          </div>
        </MobileWrapper>
      </NavbarDiv>
    </>
  );
};

export default Navbar;
