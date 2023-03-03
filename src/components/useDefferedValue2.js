import { useMemo, useState, useDeferredValue } from "react";
import logo from "../logo.svg";
import "../App.css";

const numbers = [...new Array(20000).keys()];

const List = (props) => {
  const { query } = props;
  const defQuery = useDeferredValue(query);

  const list = useMemo(
    () =>
      numbers.map((i, index) =>
        defQuery ? i.toString().startsWith(defQuery) && <p key={index}>{"def-" + i}</p> : <p key={index}>{i}</p>
      ),
    [defQuery]
  );

  return <div>{list}</div>;
};

const DefferedDos = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header className="App-header-test-page">
      <h1>React 18</h1>
      <div className="container-test">useDeffered2</div>
      <img src={logo} className="App-logo-test-page" alt="logo" />
      <div>
        <a href="/" className="App-link">
          Home
        </a>
      </div>
      <div className="container-test">
        <div>
          <input className="input-test" type="number" onChange={handleChange} value={query} />
          <List query={query} />
        </div>
      </div>
    </header>
  );
};

export default DefferedDos;
