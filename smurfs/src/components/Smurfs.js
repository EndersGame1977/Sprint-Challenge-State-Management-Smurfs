// Dependencies
import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// Components
import { GET_DATA_SUCCESS } from "../store/actions";
import Smurf from "./Smurf";

export default function Smurfs() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data);
        dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => console.log(err.response));
  }, []);

  console.log(state);
  return (
    <div className="row">
      {state.map(smurf => {
        return <Smurf smurf={smurf} />;
      })}
    </div>
  );
}
