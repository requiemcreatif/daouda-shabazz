import { useState } from "react";
import "./App.css";
import Portraits from "./pages/portraits/Portraits";
import { Link, Router, Routes, Navigate, BrowserRouter, Route } from "react-router-dom";
import Clemence from "./pages/editorial/editorialPages/clemence/Clemence";
import Iamddb from "./pages/editorial/editorialPages/iamddb/Iamddb";
import Joy from "./pages/editorial/editorialPages/joy/Joy";
import Ambatta from "./pages/editorial/editorialPages/ambatta/Ambatta";
import Africa from "./pages/editorial/editorialPages/africa/Africa";
import SmiffNWess from "./pages/editorial/editorialPages/smiffnwes/SmiffNWess";
import Ares from "./pages/editorial/editorialPages/ares/Ares";
import Blm from "./pages/editorial/editorialPages/blm/Blm";
import Lowrider from "./pages/editorial/editorialPages/lowrider/Lowrider";
import ManifLg from "./pages/editorial/editorialPages/manifLg/ManifLg";
import Isakin from "./pages/editorial/editorialPages/isakin/Isakin";
// dark mode implementation
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./functionalities/theme";
import Editorials from "./pages/editorial/Editorials";
import Apropos from "./pages/aPropos/Apropos";

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
            path="/"
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
          <Route
            path="/clemence"
            element={<Clemence toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
          />
          <Route
            path="/iamddb"
            element={<Iamddb toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
          />
          <Route
            path="/joy"
            element={<Joy toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
          />
          <Route
            path="/ambatta"
            element={<Ambatta toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
          />
          <Route
            path="/africa"
            element={<Africa toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
          />
          <Route
            path="/smiffnwess"
            element={<SmiffNWess toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
          />
          <Route
            path="/ares"
            element={<Ares toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
          />
          <Route
            path="/blm"
            element={<Blm toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
          />
          <Route
            path="/isakin"
            element={<Isakin toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
          />
          <Route
            path="/lowrider"
            element={<Lowrider toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
          />
          <Route
            path="/manifLg"
            element={<ManifLg toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
