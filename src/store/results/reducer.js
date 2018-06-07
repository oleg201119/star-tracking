import { Map, List } from "immutable";
import * as types from "./actionTypes";

const initialState = Map({ resultInfos: List() });

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.RESULTS_FETCHED:
      return state.merge({ resultInfos: action.resultInfos });
    default:
      return state;
  }
}

// selectors
export function getResultInfos(state) {
  return state.results.get("resultInfos").toJS();
}
