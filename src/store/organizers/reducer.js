import { Map } from 'immutable';

const initialState = Map({
  organizers: [],
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
  default:
    return state;
  }
}
