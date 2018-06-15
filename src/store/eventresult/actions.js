import * as types from './actionTypes';
import EventresultService from '../../services/eventresult';

export function fetchMenuResult(eventID, language) {
  return async (dispatch) => {
    try {
      const eventresult = await EventresultService.getMenuResult(eventID, language);
      dispatch({ type: types.MENU_RESULT_FETCHED, eventresult });
    } catch (error) {
      console.error(error);
    }
  };
}
