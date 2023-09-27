import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MainUml from "./components/MainUml";
import MainMerise from "./components/MainMerise";
import { useContext } from "react";
import { IThemeContext, ThemeContext } from "./context/ThemeProvider";

function App() {
  const { theme } = useContext<IThemeContext>(ThemeContext);
  return (
    <div className={`App ${theme === "dark" && "dark"} `} id="light">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uml" element={<MainUml />} />
        <Route path="/merise" element={<MainMerise />} />
      </Routes>
    </div>
  );
}

export default App;
