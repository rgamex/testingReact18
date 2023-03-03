import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import "../App.css";

const StrictModeComponent = () => {
  console.log("🚀 Render React 18!");
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});

  function handleClick() {
    setTimeout(() => {
      setLoading(true); // 😱 Re-render the component
      setData({}); // 😱 Re-render the component
    }, 500);
  }

  useEffect(() => {
    console.log("🚀 Run effect React 18!");

    return () => console.log("💣 Run effect destroy! React 18");
  }, []);

  return (
    <header className="App-header-test-page">
      <h1>React 18</h1>
      <div className="container-test">StrictMode</div>
      <img src={logo} className="App-logo-test-page" alt="logo" />
      <div>
        <a href="/" className="App-link">
          Home
        </a>
      </div>
      <div className="container-test">
        <button onClick={handleClick}>Click me!</button>
      </div>
    </header>
  );
};

export default StrictModeComponent;
