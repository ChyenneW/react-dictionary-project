import React from "react";

export default function Meanings(props) {
  return (
    <div>
      <div>
        {props.meanings.map(function (meaning, index) {
          return meaning.definitions[0].definition;
        })}
      </div>
    </div>
  );
}
