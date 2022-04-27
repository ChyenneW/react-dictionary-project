import React, { useState } from "react";
import axios from "axios";
import Antonyms from "./Antonyms";
import Synonyms from "./Synonyms";

export default function ApiResults(props) {
  let [loaded, setLoaded] = useState("unloaded");
  let [thesaurusWordData, setThesaurusWordData] = useState({});

  function getThesaurusData(results) {
    setLoaded("loaded");

    setThesaurusWordData(results.data[0].meanings);
  }

  if (loaded === "loaded") {
    return (
      <div>
        <h3>Antonyms</h3>
        {thesaurusWordData.map(function (thesaurusData, index) {
          return (
            <div key={index}>
              <Antonyms thesaurusData={thesaurusData} />
            </div>
          );
        })}

        <h3>Synonyms</h3>
        {thesaurusWordData.map(function (thesaurusData, index) {
          return (
            <div key={index}>
              <Synonyms thesaurusData={thesaurusData} />
            </div>
          );
        })}
      </div>
    );
  } else {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.keyword}`;
    axios.get(apiUrl).then(getThesaurusData);
    return <div>Loading for {props.keyword}</div>;
  }
}
