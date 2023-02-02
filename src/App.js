import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./compoments/Navbar/Navbar";
import Home from "./compoments/Content/Home";
import News from "./compoments/Content/News";
import Contact from "./compoments/Content/Contact";
import "./App.css";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const handleOpenNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div className="app">
      <Navbar navOpen={navOpen} />
      <i
        className="fa-solid fa-bars nav-menu-icon"
        onClick={(e) => handleOpenNav()}
      ></i>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
