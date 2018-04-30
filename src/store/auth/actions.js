import * as types from './actionTypes';
import AuthService from '../../services/auth';

export function fetchLoginAuth(username,password) {
  return async (dispatch, getState) => {
    try {
      // const events = await EventService.getLoginEvents("tiaolong0504@126.com", "TiaoLong_1");
      const events = await AuthService.getLoginAuth(username,password);
      dispatch({ type: types.LOGIN_AUTH_FETCHED, events });
    } catch (error) {
      console.error(error);
    }
  };
}
