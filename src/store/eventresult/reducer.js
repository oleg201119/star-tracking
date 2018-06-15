import { Map, List } from 'immutable';
import * as types from './actionTypes';

const initialState = Map({
  menuResult: List(),
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
  case types.MENU_RESULT_FETCHED:
    return state.merge({
      menuResult: action.eventresult,
    });
  default:
    return state;
  }
}

// selectors
export function getMenuResult(state) {
  return state.eventresult.get('menuResult').toJS();
}
