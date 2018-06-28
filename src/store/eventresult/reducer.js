import { Map, List } from "immutable";
import * as types from "./actionTypes";

const initialState = Map({
  menuResult: List(),
  winnerResult: List()
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.MENU_RESULT_FETCHED:
      return state.merge({
        menuResult: action.eventresult
      });
    case types.WINNER_RESULT_FETCHED:
      return state.merge({
        winnerResult: action.resultInfos
      });
    default:
      return state;
  }
}

// selectors
export function getMenuResult(state) {
  return state.eventresult.get("menuResult").toJS();
}

export function getWinnerResult(state) {
  return state.eventresult.get("winnerResult").toJS();
}
