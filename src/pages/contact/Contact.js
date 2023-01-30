import React from "react";
import ContactForm from "./ContactForm";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/footer/Footer";
import EditDiv from "../editorial/Editorials";
import styled from "styled-components";

const StyledContact = styled.div`
  //display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Contact = ({ toggleTheme, isDarkTheme }) => {
  return (
    <StyledContact>
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Hero />
      <ContactForm />
      <Footer />
    </StyledContact>
  );
};

export default Contact;
