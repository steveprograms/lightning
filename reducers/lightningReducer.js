import { ADD_NANOBUCK } from "../assets/constants";

const initialState = {
  nanobucks: 25,
};
function lightningReducer(state = initialState, action) {
  if (action.type === ADD_NANOBUCK) {
    return Object.assign({}, state, {
      nanobucks: (state.nanobucks + 1)
    });
  }
  return state;
};


export default lightningReducer;
