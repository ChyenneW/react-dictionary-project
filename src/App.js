import React from "react";
import { Routes, Route } from "react-router";
import Footer from "./Footer";

import "./App.css";
import Dictionary from "./Dictionary";
import Thesaurus from "./Thesaurus";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Words are fun!!</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dictionary" element={<Dictionary />} />
        <Route path="thesaurus" element={<Thesaurus />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
