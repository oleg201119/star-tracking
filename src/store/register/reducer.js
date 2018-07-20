import { Map, List } from 'immutable';
import * as types from './actionTypes';

const initialState = Map({
	register1: '',
	register2: '',
	register3: '',
	register4: '',
	registser: '',
	profile: List(),
	profileFlag: false
});

export default function reduce(state = initialState, action = {}) {
	switch (action.type) {
		case types.REGISTER_STEP1_FETCHED:
			return state.merge({
				register1: action.register
			});
		case types.REGISTER_STEP1_FORMAT:
			return state.merge({
				register1: action.register
			});
		case types.REGISTER_STEP2_FETCHED:
			return state.merge({
				register2: action.register
			});
		case types.REGISTER_STEP2_FORMAT:
			return state.merge({
				register2: action.register
			});
		case types.REGISTER_STEP3_FETCHED:
			return state.merge({
				register3: action.register
			});
		case types.REGISTER_STEP3_FORMAT:
			return state.merge({
				register3: action.register
			});
		case types.REGISTER_STEP4_FETCHED:
			return state.merge({
				register4: action.register
			});
		case types.REGISTER_STEP4_FORMAT:
			return state.merge({
				register4: action.register
			});
		case types.REGISTER_PROFILE_FETCHED:
			return state.merge({
				register: action.register
			});
		case types.REGISTER_PROFILE_FORMAT:
			return state.merge({
				register: action.register
			});
		case types.GET_PROFILE_FETCHED:
			return state.merge({
				profile: action.register
			});
		case types.GET_PROFILE_LOADING:
			return state.merge({
				profileFlag: action.loading
			});
		default:
			return state;
	}
}

// selectors

export function getRegister1(state) {
	return state.register.get('register1');
}

export function getRegister2(state) {
	return state.register.get('register2');
}

export function getRegister3(state) {
	return state.register.get('register3');
}

export function getRegister4(state) {
	return state.register.get('register4');
}

export function getRegister(state) {
	return state.register.get('register');
}

export function getProfile(state) {
	return state.register.get('profile').toJS();
}

export function getProfileFlag(state) {
	return state.register.get('profileFlag');
}
