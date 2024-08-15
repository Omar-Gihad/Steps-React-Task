import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  //using use state to update UI
  const [counter, setCounter] = useState(0);
  const msg = ["Sign Up", "Set Username", "Set Profile Picture"];
  //Next function
  function next() {
    if (counter < msg.length - 1) {
      setCounter(counter + 1);
    }
  }
  //previous function
  function previous() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <div className="App">
      <h1>{counter + 1}</h1>
      <h1>{msg[counter]}</h1>

      <button
        style={{
          marginRight: "10px",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "black",
          color: "white",
        }}
        onClick={previous}
      >
        Previous
      </button>
      <button
        style={{
          marginLeft: "10px",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "black",
          color: "white",
        }}
        onClick={next}
      >
        Next
      </button>
    </div>
  );
}

export default App;

/* <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
