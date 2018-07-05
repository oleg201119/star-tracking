import { Map, List } from 'immutable';
import * as types from './actionTypes';

const initialState = Map({
	menuResult: List(),
	winnerResult: List(),
	challengeDetail: List()
});

export default function reduce(state = initialState, action = {}) {
	switch (action.type) {
		case types.MENU_CHALLENGE_FETCHED:
			return state.merge({
				menuResult: action.eventresult
			});
		case types.WINNER_CHALLENGE_FETCHED:
			return state.merge({
				winnerResult: action.resultInfos
			});
		case types.CHALLENGE_DETAIL_FETCHED:
			return state.merge({
				challengeDetail: action.events
			});
		default:
			return state;
	}
}

// selectors
export function getMenuResult(state) {
	return state.challengeresult.get('menuResult').toJS();
}

export function getWinnerResult(state) {
	return state.challengeresult.get('winnerResult').toJS();
}

export function getChallengeDetail(state) {
	return state.challengeresult.get('challengeDetail').toJS();
}
