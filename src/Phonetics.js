import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  let audioFiles = props.audio;
  return (
    <div className="container audioPlayer">
      <div className="row">
        {audioFiles.map(function (file, index) {
          return (
            <div key={index} className="col-4">
              <audio controls src={file.audio}></audio>
            </div>
          );
        })}
      </div>
    </div>
  );
}
