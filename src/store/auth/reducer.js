import { Map } from 'immutable';
import * as types from './actionTypes';

const initialState = Map({
  authToken: '',
});

export default function reduce(state=initialState , action = {}) {
  switch (action.type) {
  case types.LOGIN_AUTH_FETCHED:
    return state.merge({
      authToken: action.auth,
    });
  default:
    return state;
  }
}

// selectors

export function getLoginAuth(state) {
  return state.auth.get('authToken');
}
