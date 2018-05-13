import * as types from './actionTypes';
import EventService from '../../services/events';

export function fetchUpcomingEvents(language) {
  return async (dispatch, getState) => {
    try {
      const id = getState().events.get('id');
      const maxNumber = getState().events.get('maxNumber');
      const events = await EventService.getUpcomingEvents(id, maxNumber, language);
      dispatch({ type: types.UPCOMING_EVENTS_FETCHED, events });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchLiveEvents(language) {
  return async (dispatch, getState) => {
    try {
      const id = getState().events.get('id');
      const maxNumber = getState().events.get('maxNumber');
      const events = await EventService.getLiveEvents(id, maxNumber, language);
      dispatch({ type: types.LIVE_EVENTS_FETCHED, events });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchResultEvents(language) {
  return async (dispatch, getState) => {
    try {
      const id = getState().events.get('id');
      const maxNumber = getState().events.get('maxNumber');
      const events = await EventService.getResultEvents(id, maxNumber, language);
      dispatch({ type: types.RESULT_EVENTS_FETCHED, events });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchPersonEvents(language) {
  return async (dispatch, getState) => {
    try {
      const id = getState().events.get('id');
      const maxNumber = getState().events.get('maxNumber');
      const events = await EventService.getPersonEvents(id, maxNumber, language);
      dispatch({ type: types.PERSON_EVENTS_FETCHED, events });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchFriendEvents(language) {
  return async (dispatch, getState) => {
    try {
      const id = getState().events.get('id');
      const maxNumber = getState().events.get('maxNumber');
      const events = await EventService.getFriendEvents(id, maxNumber, language);
      dispatch({ type: types.FRIEND_EVENTS_FETCHED, events });
    } catch (error) {
      console.error(error);
    }
  };
}

