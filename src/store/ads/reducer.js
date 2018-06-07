import { Map, List } from "immutable";
import * as types from "./actionTypes";

const initialState = Map({ ads: List() });

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADS_FETCHED:
      return state.merge({ ads: action.ads });
    default:
      return state;
  }
}

// selectors
export function getAds(state) {
  return state.ads.get("ads").toJS();
}
