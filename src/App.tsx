import React from "react";
import { Route, Routes, Link } from "react-router-dom"; // react-router-dom 설치(일반/type 두번) -> 
import "./styles.css";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
