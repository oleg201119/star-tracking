import { Map } from 'immutable';
import * as types from './actionTypes';

const initialState = Map({
  authToken: '',
  resetPwd: ''
});

export default function reduce(state=initialState , action = {}) {
  switch (action.type) {
  case types.LOGIN_AUTH_FETCHED:
    return state.merge({
      authToken: action.auth,
    });
  case types.RESET_PWD_FETCHED:
    return state.merge({
      resetPwd: action.auth,
    });
  case types.RESETPWD_FORMAT_FETCHED:
    return state.merge({
      resetPwd: action.auth,
    });
  default:
    return state;
  }
}

// selectors

export function getLoginAuth(state) {
  return state.auth.get('authToken');
}
export function getResetPwd(state) {
  return state.auth.get('resetPwd');
}
