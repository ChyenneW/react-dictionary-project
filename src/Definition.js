import React from "react";

import "./Definition.css";

export default function Definition(props) {
  console.log(props.meaning);

  return (
    <div>
      <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div>
            <div key={index} className="definitions">
              <p>
                {index + 1}. {definition.definition}
              </p>
            </div>
            <div>
              {props.meaning.definitions.map(function (example, index) {
                return (
                  <div className="examples" key={index}>
                    <p>
                      <em>{example.example}</em>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

//  <h3 className="examplesHeading">Examples</h3>;

//
