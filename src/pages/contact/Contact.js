import React from "react";
import ContactForm from "./ContactForm";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/footer/Footer";
import EditDiv from "../editorial/Editorials";
import styled from "styled-components";

const StyledContact = styled.div`
  .main-layout {
    min-height: 100vh;
    min-height: 105dvh;
    display: grid;

    @media (max-width: 768px) {
      min-height: 100vh;
      min-height: 101dvh;
    }
  }
`;

const Contact = ({ toggleTheme, isDarkTheme }) => {
  return (
    <StyledContact>
      <div className="main-layout">
        <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />

        <ContactForm />
        <Footer />
      </div>
    </StyledContact>
  );
};

export default Contact;
