// Dependencies
import React from "react";
import { useDispatch } from "react-redux";
// Components
import useForm from "./useForm";
import { REMOVE_ALL_SMURFS } from "../store/actions";
// Style
import { Input, Title, Label } from "./theme.js";

export default function CreateSmurf() {
  const { values, handleChange, handleSubmit } = useForm(smurf);
  function smurf() {
    console.log(values);
  }

  const dispatch = useDispatch();
  const removeAllSmurfs = () => {
    dispatch({ type: REMOVE_ALL_SMURFS });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s6 offset-s3">
          <Title className="center">Create a Smurf</Title>
          <form className="center-align" onSubmit={handleSubmit}>
            <Label>
              <Input
                type="text"
                name="name"
                placeholder="Smurfin Name"
                onChange={handleChange}
                value={values.name}
                className="center"
              />
            </Label>
            <Label>
              <Input
                type="text"
                name="age"
                placeholder="Smurfin Age"
                onChange={handleChange}
                value={values.age}
                className="center"
              />
            </Label>
            <Label>
              <Input
                type="text"
                name="height"
                placeholder="Smurfin Height"
                onChange={handleChange}
                value={values.height}
                className="center"
              />
            </Label>
            <Label>
              <button
                type="submit"
                className="center waves-effect waves-light btn"
              >
                Add Smurf
              </button>
              <br />
              <button
                className="center waves-effect waves-light btn"
                onClick={removeAllSmurfs}
              >
                Remove All Smurfs
              </button>
            </Label>
          </form>
        </div>
      </div>
    </div>
  );
}

// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { POST_SMURF_SUCCESS } from "../store/actions";

// const dispatch = useDispatch();
// e.preventDefault()
// axios
// .post("http://localhost:3333/smurfs", smurf)
// .then(res => {
//   console.log(res.data);
//   dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
// })
// .catch(err => console.log(err.response));

// const dispatch = useDispatch();
//   const formEl = useRef();

//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch({
//       type: POST_SMURF_SUCCESS,
//       {...formEl.current.elements}
//     });
//     inputRef.current.value = "";
//   };
