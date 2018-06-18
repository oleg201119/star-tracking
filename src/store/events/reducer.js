import { Map, List } from 'immutable';
import * as types from './actionTypes';

const initialState = Map({
  id: 1,
  maxNumber: 5,
  upcomingEvents: List(),
  liveEvents: List(),
  resultEvents: List(),
  myselectedEvents: List(),
  friendEvents: List(),
  similarEvents: List(),
  eventDetail: List(),
  registeredEvents: List(),
  myresultsEvents: List(),
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
  case types.MYSELECTED_EVENTS_FETCHED:
    return state.merge({
      myselectedEvents: action.events,
    });
  case types.FRIEND_EVENTS_FETCHED:
    return state.merge({
      friendEvents: action.events,
    });
  case types.SIMILAR_EVENTS_FETCHED:
    return state.merge({
      similarEvents: action.events,
    });
  case types.EVENT_DETAIL_FETCHED:
    return state.merge({
      eventDetail: action.events,
    });
  case types.REGISTERED_EVENTS_FETCHED:
    return state.merge({
      registeredEvents: action.events,
    });
  case types.MYRESULTS_EVENTS_FETCHED:
    return state.merge({
      myresultsEvents: action.events,
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

export function getMySelectedEvents(state) {
  return state.events.get('myselectedEvents').toJS();
}

export function getFriendEvents(state) {
  return state.events.get('friendEvents').toJS();
}

export function getSimilarEvents(state) {
  return state.events.get('similarEvents').toJS();
}

export function getEventDetail(state) {
  return state.events.get('eventDetail').toJS();
}

export function getRegisteredEvents(state) {
  return state.events.get('registeredEvents').toJS();
}

export function getMyResultsEvents(state) {
  return state.events.get('myresultsEvents').toJS();
}
