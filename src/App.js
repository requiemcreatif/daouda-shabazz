import { useState } from "react";
import "./App.css";
import Portraits from "./pages/Portraits";

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
        <Portraits toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
