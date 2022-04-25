import React from "react";
import Definition from "./Definition";

export default function Meanings(props) {
  return (
    <div>
      <div>
        {props.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Definition meaning={meaning} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
