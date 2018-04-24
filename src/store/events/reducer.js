import { Map, List } from 'immutable';
import * as types from './actionTypes';

const initialState = Map({
  id: 1,
  maxNumber: 5,
  language: 'en',
  upcomingEvents: List(),
  liveEvents: List(),
  resultEvents: List(),
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
  case types.UPCOMING_EVENTS_FETCHED:
    return state.merge({
      upcomingEvents: action.events,
    });
  case types.LIVE_EVENTS_FETCHED:
    return state.merge({
      liveEvents: action.events,
    });
  case types.RESULT_EVENTS_FETCHED:
    return state.merge({
      resultEvents: action.events,
    });
  default:
    return state;
  }
}

// selectors
export function getUpcomingEvents(state) {
  return state.events.get('upcomingEvents').toJS();
}

export function getLiveEvents(state) {
  return state.events.get('liveEvents').toJS();
}

export function getResultEvents(state) {
  return state.events.get('resultEvents').toJS();
}
