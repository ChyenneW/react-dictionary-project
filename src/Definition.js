import React from "react";

//Self-made components
import Example from "./Example";

//Styles
import "./Definition.css";

export default function Definition(props) {
  console.log(props.meaning);

  return (
    <div>
      <div className="section">
        <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index} className="definitions">
              <p>
                {index + 1}. {definition.definition}
              </p>
            </div>
          );
        })}
      </div>
      <div className="section">
        <Example examples={props.meaning.definitions} />
      </div>
    </div>
  );
}
