import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;


  /* h1.first {
    color: ${({ theme }) => theme.textFont};
  }
    button {
            background-color: ${({ theme }) => theme.btnBackground};
        }
        .div-header {
            background-color: ${({ theme }) => theme.headerDiv};
        }
        
        .card-div-wrapper {
            background-color: ${({ theme }) => theme.cardBody};
        }

        .div-contact{
          background-color: ${({ theme }) => theme.divContact};
        }

        .div-footer {
          background-color: ${({ theme }) => theme.divFooter};
        }

        .nav-div {
          background-color: ${({ theme }) => theme.navDiv};
        }

        .hero-text {
          color: ${({ theme }) => theme.heroText};
        }

        .heading-font {
          color: ${({ theme }) => theme.headingFont};
        }
        .menu-links > li {
          color: ${({ theme }) => theme.menuLinks};
        }
        .get-in-touch {
          color: ${({ theme }) => theme.getInTouch};
          border: 1px solid ${({ theme }) => theme.getInTouch};
        }
        .about-me-btn {
          background-color: ${({ theme }) => theme.aboutMeBtn};
        }

        .modal-text {
          color: ${({ theme }) => theme.modalText};
        }

        .bimenu {
          color: ${({ theme }) => theme.bimenu};

        }
  }
   */
.hero-div {
    background-color: ${({ theme }) => theme.heroDiv};
}
.hero-text {
    color: ${({ theme }) => theme.heroText};
    font-weight: ${({ theme }) => theme.heroTextFontWeight};
}

    
`;
export const lightTheme = {
  body: "#fff",
  heroDiv: "#fff",
  heroText: "#000",
  heroTextFontWeight: "400",
};
export const darkTheme = {
  body: "#000",
  heroDiv: "#000",
  heroText: "#fff",
};
