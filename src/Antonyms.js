import React from "react";
import "./Thesaurus.css";

export default function Antonyms(props) {
  let thesaurus = props.thesaurusData;

  return (
    <p>
      <p>
        {thesaurus.antonyms.map(function (antonym, index) {
          return (
            <p key={index}>
              <p className="antonyms">{antonym}</p>
            </p>
          );
        })}
      </p>
    </p>
  );
}
