// Dependencies
// Components
import React from "react";

export default function Smurf(props) {
  return (
    <div>
      <p>{props.smurf.name}</p>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
    </div>
  );
}
