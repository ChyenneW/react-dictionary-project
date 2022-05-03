import React from "react";

//styles
import "./Definition.css";

export default function Example(props) {
  let examples = props.examples;
  if (examples) {
    return (
      <div>
        <h3 className="examplesHeading">Examples</h3>
        <ul className="examples">
          {examples.map(function (example, index) {
            return <li key={index}>{example.example}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
