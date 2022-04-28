import React, { useState } from "react";
import axios from "axios";

//Styles
import "./PexelsApi.css";

export default function PexelsApi(props) {
  let keyword = props.keyword;
  let [load, setLoad] = useState("unloaded");
  let [photos, setPhotos] = useState(null);

  function handlePexelsData(request) {
    console.log(request.data.photos);
    setPhotos(request.data.photos);
    setLoad("loaded");
  }

  if (load === "loaded") {
    return (
      <div className="container photos">
        <div className="row">
          <h4 className="photosHeading">Photos of {keyword}</h4>
          {photos.map(function (photo, index) {
            return (
              <div key={index} className="col-3">
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.small}
                    className="img-fluid images"
                    alt={photo.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    const pexelsApiKey =
      "563492ad6f91700001000001e6b67d8c07a64e1fa16dd621b3a77b6c";
    //Documentation:https://www.pexels.com/api/documentation/?
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsApiUrl, { headers: { Authorization: pexelsApiKey } })
      .then(handlePexelsData);

    return null;
  }
}
