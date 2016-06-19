import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    // using concat instead of push as
    // to not mutate the original state
    // but to return a new instance of state
    // return state.concat([action.payload.data]);
    // other approach with spread attribute
    return [action.payload.data, ...state]
  }
  return state;
}
