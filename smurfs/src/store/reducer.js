import {
  //   GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  CREATE_SMURF,
  UPDATE_SMURF,
  DELETE_SMURF,
  POST_SMURF_SUCCESS,
  REMOVE_ALL_SMURFS
} from "./actions";

const initialState = [
  {
    id: 0,
    name: "",
    age: "",
    height: ""
  }
];

export default function reducer(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return action.payload;
    case GET_DATA_FAIL:
      return {
        ...state,
        smurfs: action.payload
      };
    case CREATE_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case UPDATE_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case POST_SMURF_SUCCESS:
      return action.payload;
    case REMOVE_ALL_SMURFS:
      return [];
    default:
      return state;
  }
}
