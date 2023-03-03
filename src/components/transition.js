import { useEffect, useState, useTransition } from "react";
import logo from "../logo.svg";
import "../App.css";

const Transition = () => {
  const [value, setValue] = useState("");
  const [pokemon, setPokemon] = useState();
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [errorFetch, setErrorFetch] = useState(false);
  const [isLoading, startTransition] = useTransition();

  const handlerChange = (e) => {
    const valueInput = e.target.value;
    setValue(valueInput);

    // startTransition(() => {
    //   setLoadingFetch(true);
    // });
  };

  useEffect(() => {
    if (value >= 1) {
      setLoadingFetch(true);
      setErrorFetch(false);

      fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then((result) => result.json())
        .then((result) => {
          startTransition(() => {
            setPokemon(result);
          });
        })
        .catch((error) => {
          startTransition(() => {
            error && setErrorFetch(true);
          });
        });

      setLoadingFetch(false);
    }
  }, [value]);

  return (
    <header className="App-header-test-page">
      <h1>React 18</h1>
      <div className="container-test">Transition</div>
      <img src={logo} className="App-logo-test-page" alt="logo" />
      <div>
        <a href="/" className="App-link">
          Home
        </a>
      </div>
      <div className="container-test">
        <label>Busca tu pokemon favorito</label>
        <input onChange={handlerChange} className="input-test" />
        <div>
          {loadingFetch && <span>cargando ...</span>}
          {!loadingFetch && pokemon && <p>{pokemon?.forms?.[0].name}</p>}
          {errorFetch && <p>La búsqueda no coincide con ningún pokemon</p>}
        </div>
      </div>
    </header>
  );
};

export default Transition;
