import { Map, List } from 'immutable';
import * as types from './actionTypes';

const initialState = Map({
  menuResult: List(),
  headerResult: List(),
  bodyResult: List(),
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
  case types.MENU_RESULT_FETCHED:
    return state.merge({
      menuResult: action.eventresult,
    });
  case types.HEADER_RESULT_FETCHED:
    return state.merge({
      headerResult: action.eventresult,
    });
  case types.BODY_RESULT_FETCHED:
    return state.merge({
      bodyResult: action.eventresult,
    });
  default:
    return state;
  }
}

// selectors
export function getMenuResult(state) {
  return state.eventresult.get('menuResult').toJS();
}

export function getHeaderResult(state) {
  return state.eventresult.get('headerResult').toJS();
}

export function getBodyResult(state) {
  return state.eventresult.get('bodyResult').toJS();
}
