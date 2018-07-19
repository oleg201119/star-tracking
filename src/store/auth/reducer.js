import { Map } from 'immutable';
import * as types from './actionTypes';

const initialState = Map({
	authToken: '',
	resetPwd: '',
	sendPwd: '',
	logout: '',
	registerError: ''
});

export default function reduce(state = initialState, action = {}) {
	switch (action.type) {
		case types.LOGIN_AUTH_FETCHED:
			return state.merge({
				authToken: action.auth
			});
		case types.RESET_PWD_FETCHED:
			return state.merge({
				resetPwd: action.auth
			});
		case types.RESETPWD_FORMAT_FETCHED:
			return state.merge({
				resetPwd: action.auth
			});
		case types.SEND_PWD_FETCHED:
			return state.merge({
				sendPwd: action.auth
			});
		case types.SENDPWD_FORMAT_FETCHED:
			return state.merge({
				sendPwd: action.auth
			});
		case types.TOKEN_FETCHED:
			return state.merge({
				authToken: action.auth
			});
		case types.LOGINSTATE_FORMAT_FETCHED:
			return state.merge({
				authToken: action.auth
			});
		case types.REGISTER_ERROR_FETCHED:
			return state.merge({
				registerError: action.auth
			});
		case types.REGISTER_ERROR_FORMAT:
			return state.merge({
				registerError: action.auth
			});
		default:
			return state;
	}
}

// selectors

export function getLoginAuth(state) {
	return state.auth.get('authToken');
}
export function getResetPwd(state) {
	return state.auth.get('resetPwd');
}
export function getSendPwd(state) {
	return state.auth.get('sendPwd');
}
export function getRegisterError(state) {
	return state.auth.get('registerError');
}
