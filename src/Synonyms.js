import React from "react";

//Styles
import "./Thesaurus.css";

export default function Synonyms(props) {
  let thesaurus = props.thesaurusData;

  return (
    <div className="row">
      {thesaurus.synonyms.map(function (synonym, index) {
        return (
          <span key={index} className="col-4">
            <span className=" synonyms">{synonym}</span>
          </span>
        );
      })}
    </div>
  );
}
