import React from "react";
import { Route, Routes, Link } from "react-router-dom"; // react-router-dom 설치(일반/type 두번) ->
import { routes } from "./routes/index";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Accordion</Link>
        <Link to="/button">Button</Link>
        <Link to="/list">list</Link>
        <Link to="/card">card</Link>
        <Link to="/icon">icon</Link>
        <Link to="/input">input</Link>
        <Link to="/modal">modal</Link>
        <Link to="/Select">Select</Link>
      </div>
      <Routes>
        {routes.common.map((item, index) => (
          <Route key={index} path={item.path} element={<item.component />} />
        ))}
      </Routes>
    </div>
  );
}
