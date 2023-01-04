import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.5s ease-in, color 0.5s ease-in;


.hero-div {
    background-color: ${({ theme }) => theme.heroDiv};
}
.hero-text {
    color: ${({ theme }) => theme.heroText};
    font-weight: ${({ theme }) => theme.heroTextFontWeight};
}

.navbar-div {
  background-color: ${({ theme }) => theme.navDiv};
}

    
`;
export const lightTheme = {
  body: "#fff",
  //heroDiv: "#fff",
  heroText: "#000",
  heroTextFontWeight: "400",
};
export const darkTheme = {
  body: "#000",
  //heroDiv: "#000",
  heroText: "#fff",
  //navDiv: "#000",
};
//https://prints.format.com/shop/professional-prints/listing/17057
