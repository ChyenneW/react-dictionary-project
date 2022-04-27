import React from "react";

export default function Synonyms(props) {
  let thesaurus = props.thesaurusData;

  return (
    <div>
      <div>
        {thesaurus.synonyms.map(function (synonym, index) {
          return (
            <div key={index}>
              <div className="synonyms">{synonym}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
