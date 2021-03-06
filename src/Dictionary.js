import React, { useState, useEffect } from "react";
import ApiResults from "./ApiResults";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [loaded, setLoaded] = useState("unloaded");

  useEffect(() => {
    setLoaded("unloaded");
  }, [keyword]);

  function submitKeyword(event) {
    event.preventDefault();
    setLoaded("loaded");
  }

  function updateKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  if (loaded === "unloaded") {
    return (
      <div>
        <form onSubmit={submitKeyword}>
          <input
            type="search"
            placeholder="Enter a Word"
            className="searchBar"
            onChange={updateKeyword}
          />
          <input type="submit" value="Search" className="searchBarButton" />
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={submitKeyword}>
          <input
            type="search"
            placeholder="Enter a Word"
            className="searchBar"
            onChange={updateKeyword}
          />
          <input type="submit" value="Search" className="searchBarButton" />
        </form>
        <div className="keyword">{keyword}</div>
        <ApiResults results={keyword} />
      </div>
    );
  }
}
