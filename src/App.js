import React from "react";
import { Routes, Route } from "react-router";
import Footer from "./Footer";

import "./App.css";
import Dictionary from "./Dictionary";
import Thesaurus from "./Thesaurus";
import Home from "./Home";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container navigation">
        <div className="row">
          <Link to={"/"} className="navigationLinks">
            HOME
          </Link>
          <Link to={"/dictionary"} className="navigationLinks">
            DICTIONARY
          </Link>
          <Link to={"/thesaurus"} className="navigationLinks">
            THESAURUS
          </Link>
        </div>
      </div>
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
