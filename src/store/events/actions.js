import * as types from './actionTypes';
import EventService from '../../services/events';

export function fetchUpcomingEvents() {
  return async (dispatch, getState) => {
    try {
      const id = getState().events.get('id');
      const maxNumber = getState().events.get('maxNumber');
      const language = getState().events.get('language');
      const events = await EventService.getUpcomingEvents(id, maxNumber, language);
      dispatch({ type: types.UPCOMING_EVENTS_FETCHED, events });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchLiveEvents() {
  return async (dispatch, getState) => {
    try {
      const id = getState().events.get('id');
      const maxNumber = getState().events.get('maxNumber');
      const language = getState().events.get('language');
      const events = await EventService.getLiveEvents(id, maxNumber, language);
      dispatch({ type: types.LIVE_EVENTS_FETCHED, events });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchResultEvents() {
  return async (dispatch, getState) => {
    try {
      const id = getState().events.get('id');
      const maxNumber = getState().events.get('maxNumber');
      const language = getState().events.get('language');
      const events = await EventService.getResultEvents(id, maxNumber, language);
      dispatch({ type: types.RESULT_EVENTS_FETCHED, events });
    } catch (error) {
      console.error(error);
    }
  };
}
