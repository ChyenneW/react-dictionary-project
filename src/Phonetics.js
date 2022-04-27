import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  let audioFiles = props.audio;
  return (
    <div className="container">
      <div className="row audioPlayer">
        {audioFiles.map(function (file, index) {
          return (
            <div key={index} className="col-4">
              <audio controls preload="auto" src={file.audio}></audio>
            </div>
          );
        })}
      </div>
    </div>
  );
}
