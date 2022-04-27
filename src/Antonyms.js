import React from "react";

export default function Antonyms(props) {
  let thesaurus = props.thesaurusData;

  return (
    <div>
      <div>
        {thesaurus.antonyms.map(function (antonym, index) {
          return (
            <div key={index}>
              <div className="antonyms">{antonym}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
