import React, { useState, useRef, useEffect } from "react";
import logo from "../logo.svg";
import "../App.css";

const BatchingEventListener = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current.addEventListener("mouseenter", () => {
      setLoading(true); // 😱 Re-render the component
      setData({}); // 😱 Re-render the component
    });
  }, []);

  console.log("render react 18");
  return (
    <header className="App-header-test-page">
      <h1>React 18</h1>
      <div className="container-test">Automatic Batching event listener</div>
      <img src={logo} className="App-logo-test-page" alt="logo" />
      <div>
        <a href="/" className="App-link">
          Home
        </a>
      </div>
      <div className="container-test">
        <button ref={buttonRef}>Click me!</button>
      </div>
    </header>
  );
};

export default BatchingEventListener;
