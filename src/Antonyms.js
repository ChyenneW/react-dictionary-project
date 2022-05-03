import React from "react";

// Styles
import "./Thesaurus.css";

export default function Antonyms(props) {
  let thesaurus = props.thesaurusData;

  return (
    <p className="row">
      {thesaurus.antonyms.map(function (antonym, index) {
        return (
          <p key={index} className="col-4">
            <p className="antonyms">{antonym}</p>
          </p>
        );
      })}
    </p>
  );
}
