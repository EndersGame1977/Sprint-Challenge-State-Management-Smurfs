// Dependencies
import React from "react";
// Components

export default function Smurf(props) {
  return (
    <div className="col s3">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{props.smurf.name}</span>
          <p>Age: {props.smurf.age}</p>
          <p>Height: {props.smurf.height} cm</p>
        </div>
      </div>
    </div>
  );
}
