import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/logo/white-daouda-shabazz.png";
import { ImFacebook } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const MobileNavDiv = styled.div`
  background-color: #000;
  //background-color: red;

  color: #fff;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 110;

  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    img {
      width: 15%;
    }

    .div-close {
      .close {
        font-size: 4rem;
        cursor: pointer;
        //background-color: #aa2323;
      }
    }
  }

  .social {
    display: flex;
    gap: 2rem;
    padding: 3rem 2rem;
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
  }
`;

const Nav = styled.div`
  padding: 8rem 2rem 2rem 2rem;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #aa2323;
    }
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    gap: 4rem;
    font-size: 7vw;
    font-weight: bold;
  }
`;

const MobileNav = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  return (
    <MobileNavDiv>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <div className="div-close">
          <AiOutlineClose className="close" color="#fff" onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      <Nav>
        <ul>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            PORTRAITS
          </Link>
          <Link to="/editorials" className={location.pathname === "/editorials" ? "active" : ""}>
            EDITORIALS
          </Link>
          <Link to="/apropos" className={location.pathname === "/apropos" ? "active" : ""}>
            A PROPOS
          </Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
            CONTACT
          </Link>
        </ul>
      </Nav>
      <div className="social">
        <ul>
          <li>
            <AiOutlineInstagram />
          </li>
          <li>
            <ImFacebook />
          </li>
        </ul>
      </div>
    </MobileNavDiv>
  );
};

export default MobileNav;
