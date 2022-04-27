import React from "react";
import Definition from "./Definition";

export default function Meanings(props) {
  return (
    <div>
      <div className="definitions">
        {props.meanings.map(function (meaning, index) {
          return (
            <div key={index} className="definition">
              <Definition meaning={meaning} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
