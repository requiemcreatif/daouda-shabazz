import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";

// dark mode implementation
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./functionalities/theme";

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div>
        <GlobalStyles />
        <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Hero isDarkTheme={isDarkTheme} />
        <CardGrid />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
