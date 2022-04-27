import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div>
        <Link to={"/dictionary"} className="homeLinks">
          Dictionary
        </Link>
        <Link to={"/thesaurus"} className="homeLinks">
          Thesaurus
        </Link>
      </div>
    </div>
  );
}
