import React from "react";
import { Route, Routes, Link } from "react-router-dom"; // react-router-dom 설치(일반/type 두번) ->
import "./styles.css";
import Accordion from "./pages/Accordion";
import Button from "./pages/Button";

export default function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Accordion</Link>
        <Link to="/Button">Button</Link>
      </div>
      <Routes>
        <Route path="/" element={<Accordion />} />
        <Route path="/Button" element={<Button />} />
      </Routes>
    </div>
  );
}
