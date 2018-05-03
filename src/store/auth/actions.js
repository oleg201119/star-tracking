import * as types from './actionTypes';
import AuthService from '../../services/auth';

export function fetchLoginAuth(username,password) {
  return async (dispatch, getState) => {
    try {
      const auth = await AuthService.getLoginAuth(username,password);
      dispatch({ type: types.LOGIN_AUTH_FETCHED, auth });
    } catch (error) {
      console.error(error);
    }
  };
}
