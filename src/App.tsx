import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MainUml from "./components/MainUml";
import MainMerise from "./components/MainMerise";
import { ThemeContext, ThemeProvider } from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="App" id="light">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uml" element={<MainUml />} />
          <Route path="/merise" element={<MainMerise />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
