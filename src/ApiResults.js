import React, { useState } from "react";
import axios from "axios";

export default function ApiResults(props) {
  let [loaded, setLoaded] = useState("unloaded");
  let [wordData, setData] = useState({});

  function getDefinitions(results) {
    console.log(results.data[0]);
    setLoaded("loaded");

    setData({
      phonetics: results.data[0].phonetic,
      meanings: results.data[0].meanings,
    });
  }

  if (loaded === "loaded") {
    return (
      <div>
        <div className="phonetics">{wordData.phonetics}</div>
      </div>
    );
  } else {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.results}`;
    axios.get(apiUrl).then(getDefinitions);
    return <div>Loading definition for {props.results}</div>;
  }
}
