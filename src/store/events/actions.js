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

export function fetchMySelectedEvents(language) {
  return async (dispatch, getState) => {
    try {
      const id = getState().events.get('id');
      const maxNumber = getState().events.get('maxNumber');
      const events = await EventService.getMySelectedEvents(id, maxNumber, language);
      dispatch({ type: types.MYSELECTED_EVENTS_FETCHED, events });
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

export function fetchRegisteredEvents(language) {
  return async (dispatch, getState) => {
    try {
      const id = getState().events.get('id');
      const maxNumber = getState().events.get('maxNumber');
      const events = await EventService.getRegisteredEvents(id, maxNumber, language);
      dispatch({ type: types.REGISTERED_EVENTS_FETCHED, events });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchMyResultsEvents(language) {
  return async (dispatch, getState) => {
    try {
      const id = getState().events.get('id');
      // const maxNumber = getState().events.get('maxNumber');
      const maxNumber = 3;
      const events = await EventService.getMyResultsEvents(id, maxNumber, language);
      dispatch({ type: types.MYRESULTS_EVENTS_FETCHED, events });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchSimilarEvents(language) {
  return async (dispatch, getState) => {
    try {
      const id = getState().events.get('id');
      // const maxNumber = getState().events.get('maxNumber');
      const maxNumber = 3;
      const events = await EventService.getSimilarEvents(id, maxNumber, language);
      dispatch({ type: types.SIMILAR_EVENTS_FETCHED, events });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchEventDetail(id, language) {
  return async (dispatch) => {
    try {
      const events = await EventService.getEventDetail(id, language);
      dispatch({ type: types.EVENT_DETAIL_FETCHED, events });
    } catch (error) {
      console.error(error);
    }
  };
}
