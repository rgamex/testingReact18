import React, { useLayoutEffect, useInsertionEffect, useEffect } from "react";
import logo from "../logo.svg";
import "../App.css";

const InsertionEffectComponent = () => {
  useEffect(() => {
    console.log("👀 Run effect");
  });

  useInsertionEffect(() => {
    console.log("🎨 Run insertion effect");
  });

  useLayoutEffect(() => {
    console.log("⏰ 🎨 Run layout effect");
  });

  return (
    <header className="App-header-test-page">
      <h1>React 18</h1>
      <div className="container-test">useInsertionEffect</div>
      <img src={logo} className="App-logo-test-page" alt="logo" />
      <div>
        <a href="/" className="App-link">
          Home
        </a>
      </div>
      <div className="container-test">
        <p>Usando el efecto de intertionEffect</p>
      </div>
    </header>
  );
};

export default InsertionEffectComponent;
