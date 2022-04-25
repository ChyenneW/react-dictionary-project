import React from "react";

export default function Definition(props) {
  console.log(props.meaning);

  return (
    <div>
      <h4>{props.meaning.partOfSpeech}</h4>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="definitions">
            <p>
              {index + 1}. {definition.definition}
            </p>
          </div>
        );
      })}
      <p className="examples">
        <em>{props.meaning.definitions[0].example}</em>
      </p>
    </div>
  );
}

// documentation: <p>{props.meaning.definitions[0].definition}</p>
