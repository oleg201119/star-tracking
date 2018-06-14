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

export function fetchHeaderResult(eventID, categoryID, language) {
  return async (dispatch) => {
    try {
      const eventresult = await EventresultService.getHeaderResult(eventID, categoryID, language);
      dispatch({ type: types.HEADER_RESULT_FETCHED, eventresult });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchBdoyResult(eventID, categoryID, page, numberofResults, sortColumn, sortDirection, language) {
  return async (dispatch) => {
    try {
      const eventresult = await EventresultService.getBodyResult(eventID, categoryID, page, numberofResults, sortColumn, sortDirection, language);
      dispatch({ type: types.BODY_RESULT_FETCHED, eventresult });
    } catch (error) {
      console.error(error);
    }
  };
}
