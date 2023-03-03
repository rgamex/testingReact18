import { useEffect, useState, useDeferredValue } from "react";
import logo from "../logo.svg";
import "../App.css";

const UseDeffered = () => {
  const [value, setValue] = useState("");
  const [pokemon, setPokemon] = useState();
  const pokemonDefered = useDeferredValue(pokemon);

  const handlerChange = (e) => {
    const valueInput = e.target.value;
    setValue(valueInput);
  };

  useEffect(() => {
    if (value >= 1) {
      setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
          .then((result) => result.json())
          .then((result) => {
            setPokemon(result);
          });
      }, 5000);
    }
  }, [value]);

  useEffect(() => {
    console.log("pokemon", pokemon);
  }, [pokemon]);

  return (
    <header className="App-header-test-page">
      <h1>React 18</h1>
      <div className="container-test">useDeffered</div>
      <img src={logo} className="App-logo-test-page" alt="logo" />
      <div>
        <a href="/" className="App-link">
          Home
        </a>
      </div>
      <div className="container-test">useDeffered</div>
      <div className="container-test">
        <label>Busca tu pokemon favorito</label>
        <input onChange={handlerChange} className="input-test" />
        <div>{pokemon && <p>{pokemonDefered?.forms?.[0].name}</p>}</div>
      </div>
    </header>
  );
};

export default UseDeffered;
