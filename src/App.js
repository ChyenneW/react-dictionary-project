import React from "react";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";

// Self-made components
import Home from "./Home";
import Dictionary from "./Dictionary";
import Thesaurus from "./Thesaurus";
import Footer from "./Footer";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="row navigation">
        <Link to={"/"} className=" col-1 navigationLinks">
          HOME
        </Link>
        <Link to={"/dictionary"} className=" col-1 navigationLinks">
          DICTIONARY
        </Link>
        <Link to={"/thesaurus"} className=" col-1 navigationLinks">
          THESAURUS
        </Link>
      </div>
      <header className="App-header">
        <h1 className="quote">
          "A word is dead when it is said some say. I say it just begins to live
          that day"
        </h1>
        <small className="quoteAuthor">-Emiliy Dickinson</small>
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
