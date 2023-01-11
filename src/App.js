import { useState } from "react";
import "./App.css";
import Portraits from "./pages/Portraits";
import { Link, Router, Routes, Navigate, BrowserRouter, Route } from "react-router-dom";

// dark mode implementation
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./functionalities/theme";
import Editorials from "./pages/Editorials";
import Apropos from "./pages/Apropos";

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="/portraits"
            element={<Portraits toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
          />
          <Route
            path="/editorials"
            element={<Editorials toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
          />

          <Route
            path="/apropos"
            element={<Apropos toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
          />
          <Route
            path="/contact"
            element={<Apropos toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
