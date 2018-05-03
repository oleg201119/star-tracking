import * as types from './actionTypes';
import GeneralService from '../../services/general';

export function fetchRequestContact(name,email,organization,phone,event,message) {
  return async (dispatch, getState) => {
    try {
      const id = getState().events.get('id');
      const general = await GeneralService.getRequestContact(id,name,email,organization,phone,event,message);
      dispatch({ type: types.REQUEST_CONTACT_FETCHED, general });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchContactFormat() {
  return async (dispatch, getState) => {
    try {
      const general = false;
      dispatch({ type: types.CONTACT_FORMAT_FETCHED, general });
    } catch (error) {
      console.error(error);
    }
  };
}
