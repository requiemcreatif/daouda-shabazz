import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../images/logo/white-daouda-shabazz.png";
import { ImFacebook } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const MobileNavDiv = styled.div`
  background-color: #000;
  color: #fff;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem;

    img {
      width: 15%;
    }

    .div-close {
      padding-right: 2rem;
      .close {
        //color: #fff;
        font-size: 4rem;
        cursor: pointer;
        //background-color: #aa2323;
      }
    }
  }

  nav {
    padding: 8rem 2rem 2rem 2rem;
    ul {
      display: flex;
      justify-content: center;
      align-items: left;
      flex-direction: column;
      gap: 4rem;
      font-size: 7vw;
      font-weight: bold;

      li {
        //font-size: 2rem;

        cursor: pointer;
        a {
          text-decoration: none;
        }

        &:hover {
          color: #aa2323;
        }
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

const MobileNav = () => {
  return (
    <MobileNavDiv>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <div className="div-close">
          <AiOutlineClose className="close" color="#fff" />
        </div>
      </div>
      <nav>
        <ul>
          <Link>PORTRAITS</Link>
          <Link>EDITORIALS</Link>
          <Link>A PROPOS</Link>
          <Link>CONTACT</Link>
        </ul>
      </nav>
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
