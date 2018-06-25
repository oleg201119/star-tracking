import { Map, List } from "immutable";
import * as types from "./actionTypes";

const initialState = Map({
  id: 1,
  maxNumber: 5,
  upcomingEvents: List(),
  upcomingEventsFlag: false,
  liveEvents: List(),
  liveEventsFlag: false,
  resultEvents: List(),
  resultEventsFlag: false,
  myselectedEvents: List(),
  myselectedEventsFlag: false,
  friendEvents: List(),
  friendEventsFlag: false,
  similarEvents: List(),
  similarEventsFlag: false,
  eventDetail: List(),
  registeredEvents: List(),
  registeredEventsFlag: false,
  myresultsEvents: List(),
  myresultsEventsFlag: false,
  favoriteEvents: List(),
  favoriteEventsFlag: false
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.UPCOMING_EVENTS_FETCHED:
      return state.merge({
        upcomingEvents: action.events
      });
    case types.UPCOMING_EVENTS_LOADING:
      return state.merge({
        upcomingEventsFlag: action.loading
      });
    case types.LIVE_EVENTS_FETCHED:
      return state.merge({
        liveEvents: action.events
      });
    case types.LIVE_EVENTS_LOADING:
      return state.merge({
        liveEventsFlag: action.loading
      });
    case types.RESULT_EVENTS_FETCHED:
      return state.merge({
        resultEvents: action.events
      });
    case types.RESULT_EVENTS_LOADING:
      return state.merge({
        resultEventsFlag: action.loading
      });
    case types.MYSELECTED_EVENTS_FETCHED:
      return state.merge({
        myselectedEvents: action.events
      });
    case types.MYSELECTED_EVENTS_LOADING:
      return state.merge({
        myselectedEventsFlag: action.loading
      });
    case types.FRIEND_EVENTS_FETCHED:
      return state.merge({
        friendEvents: action.events
      });
    case types.FRIEND_EVENTS_LOADING:
      return state.merge({
        friendEventsFlag: action.loading
      });
    case types.SIMILAR_EVENTS_FETCHED:
      return state.merge({
        similarEvents: action.events
      });
    case types.SIMILAR_EVENTS_LOADING:
      return state.merge({
        similarEventsFlag: action.loading
      });
    case types.EVENT_DETAIL_FETCHED:
      return state.merge({
        eventDetail: action.events
      });
    case types.REGISTERED_EVENTS_FETCHED:
      return state.merge({
        registeredEvents: action.events
      });
    case types.REGISTERED_EVENTS_LOADING:
      return state.merge({
        registeredEventsFlag: action.loading
      });
    case types.MYRESULTS_EVENTS_FETCHED:
      return state.merge({
        myresultsEvents: action.events
      });
    case types.MYRESULTS_EVENTS_LOADING:
      return state.merge({
        myresultsEventsFlag: action.loading
      });
    case types.FAVORITE_EVENTS_FETCHED:
      return state.merge({
        favoriteEvents: action.events
      });
    case types.FAVORITE_EVENTS_LOADING:
      return state.merge({
        favoriteEventsFlag: action.loading
      });
    default:
      return state;
  }
}

// selectors
export function getUpcomingEvents(state) {
  return state.events.get("upcomingEvents").toJS();
}

export function getUpcomingEventsFlag(state) {
  return state.events.get("upcomingEventsFlag");
}

export function getLiveEvents(state) {
  return state.events.get("liveEvents").toJS();
}

export function getLiveEventsFlag(state) {
  return state.events.get("liveEventsFlag");
}

export function getResultEvents(state) {
  return state.events.get("resultEvents").toJS();
}

export function getResultEventsFlag(state) {
  return state.events.get("resultEventsFlag");
}

export function getMySelectedEvents(state) {
  return state.events.get("myselectedEvents").toJS();
}

export function getMySelectedEventsFlag(state) {
  return state.events.get("myselectedEventsFlag");
}

export function getFriendEvents(state) {
  return state.events.get("friendEvents").toJS();
}

export function getFriendEventsFlag(state) {
  return state.events.get("friendEventsFlag");
}

export function getSimilarEvents(state) {
  return state.events.get("similarEvents").toJS();
}

export function getSimilarEventsFlag(state) {
  return state.events.get("similarEventsFlag");
}

export function getEventDetail(state) {
  return state.events.get("eventDetail").toJS();
}

export function getRegisteredEvents(state) {
  return state.events.get("registeredEvents").toJS();
}

export function getRegisteredEventsFlag(state) {
  return state.events.get("registeredEventsFlag");
}

export function getMyResultsEvents(state) {
  return state.events.get("myresultsEvents").toJS();
}

export function getMyResultsEventsFlag(state) {
  return state.events.get("myresultsEventsFlag");
}

export function getFavoriteEvents(state) {
  return state.events.get("favoriteEvents").toJS();
}

export function getFavoriteEventsFlag(state) {
  return state.events.get("favoriteEventsFlag");
}
