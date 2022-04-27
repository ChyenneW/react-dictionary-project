import React from "react";
import Footer from "./Footer";

import "./App.css";
import Dictionary from "./Dictionary";
import Thesaurus from "./Thesaurus";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Words are fun!!</h1>
      </header>
      <Dictionary />
      <Thesaurus />
      <Footer />
    </div>
  );
}

export default App;
