import {
  //   GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  CREATE_SMURF,
  UPDATE_SMURF,
  DELETE_SMURF
} from "./actions";

const initialState = {
  smurfs: [{}]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };
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
    default:
      return state;
  }
}
