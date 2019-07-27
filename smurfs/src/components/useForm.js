import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { POST_SMURF_SUCCESS } from "../store/actions";

const useForm = callback => {
  const [values, setValues] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
    axios
      .post("http://localhost:3333/smurfs", values)
      .then(res => {
        console.log(res.data);
        dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
      })
      .catch(err => console.log(err.response));
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values
  };
};

export default useForm;
