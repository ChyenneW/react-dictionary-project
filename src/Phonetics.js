import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  let audioFiles = props.audio;

  if (audioFiles) {
    return (
      <div className="container">
        <div className="row audioPlayer">
          {audioFiles.map(function (file, index) {
            return (
              <div key={index} className="col-6">
                <audio
                  controls
                  preload="auto"
                  src={file.audio}
                  className="audioPlayers"
                ></audio>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
