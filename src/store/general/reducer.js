import { Map } from 'immutable';
import * as types from './actionTypes';

const initialState = Map({
  id: 1,
  requestContact: '',
});

export default function reduce(state=initialState , action = {}) {
  switch (action.type) {
  case types.REQUEST_CONTACT_FETCHED:
    return state.merge({
      requestContact: action.general,
    });
  case types.CONTACT_FORMAT_FETCHED:
    return state.merge({
      requestContact: action.general,
    });
  default:
    return state;
  }
}

// selectors

export function getRequestContact(state) {

  return state.general.get('requestContact');
}
