import { useMemo, useState, useTransition } from "react";
import logo from "../logo.svg";
import "../App.css";

const numbers = [...new Array(20000).keys()];

const TransitionDos = () => {
  const [query, setQuery] = useState("");
  const [text, setText] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value);
    // setQuery(e.target.value);
    startTransition(() => {
      setQuery(e.target.value);
    });
  };

  const list = useMemo(
    () =>
      numbers.map((i, index) =>
        query ? i.toString().startsWith(query) && <p key={index}>{i}</p> : <p key={index}>{i}</p>
      ),
    [query]
  );

  return (
    <header className="App-header-test-page">
      <h1>React 18</h1>
      <div className="container-test">Transition example 2</div>
      <img src={logo} className="App-logo-test-page" alt="logo" />
      <div>
        <a href="/" className="App-link">
          Home
        </a>
      </div>
      <div className="container-test">
        <div>
          <input className="input-test" type="number" onChange={handleChange} value={text} />
          <div>{isPending ? "Loading..." : list}</div>
        </div>
      </div>
    </header>
  );
};

export default TransitionDos;
