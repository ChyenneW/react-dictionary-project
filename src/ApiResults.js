import React, { useState } from "react";
import axios from "axios";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

export default function ApiResults(props) {
  let [loaded, setLoaded] = useState("unloaded");
  let [wordData, setData] = useState({});

  function getDefinitions(results) {
    console.log(results.data[0]);
    setLoaded("loaded");

    setData({
      phoneticWord: results.data[0].phonetic,
      phoneticAudio: results.data[0].phonetics,
      meanings: results.data[0].meanings,
    });
  }

  if (loaded === "loaded") {
    return (
      <div>
        <div className="phonetics">{wordData.phoneticWord}</div>
        <Phonetics audio={wordData.phoneticAudio} />
        <Meanings meanings={wordData.meanings} />
      </div>
    );
  } else {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.results}`;
    axios.get(apiUrl).then(getDefinitions);
    return <div>Loading definition for {props.results}</div>;
  }
}
