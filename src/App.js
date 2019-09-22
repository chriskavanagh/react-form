import React from "react";
//import Poem from "./components/Poem";
import "./App.css";
import Store from "./Store";
import Register from "./components/Form";

function App() {
  return (
    <Store>
      <div className="App">
        <header className="App-header">
          <Register />
        </header>
      </div>
    </Store>
  );
}

export default App;
