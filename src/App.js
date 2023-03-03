import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React 18</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <ul>
            <li>
              <a href="/strictMode" className="App-link">
                New strict Mode
              </a>
            </li>
            <li>
              <a href="/useInsertionEffect" className="App-link">
                useInsertionEffect
              </a>
            </li>
            <li>
              <a href="/batching/async" className="App-link">
                Automatic batching in async HTTP request
              </a>
            </li>
            <li>
              <a href="/batching/timer" className="App-link">
                Automatic batching in timer
              </a>
            </li>
            <li>
              <a href="/batching/eventListener" className="App-link">
                Automatic batching in event listener
              </a>
            </li>
            <li>
              <a href="/transition" className="App-link">
                Transition
              </a>
            </li>
            <li>
              <a href="/transition/2" className="App-link">
                Transition example 2
              </a>
            </li>
            <li>
              <a href="/deffered" className="App-link">
                useDeffered
              </a>
            </li>
            <li>
              <a href="/deffered/2" className="App-link">
                useDeffered example 2
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
