import * as types from './actionTypes';
import AuthService from '../../services/auth';

export function fetchLoginAuth(username, password) {
	return async (dispatch) => {
		try {
			const auth = await AuthService.getLoginAuth(username, password);
			dispatch({ type: types.LOGIN_AUTH_FETCHED, auth });
		} catch (error) {
			console.error(error);
		}
	};
}

export function fetchRegisterAuth(username, password) {
	return async (dispatch) => {
		try {
			const auth = await AuthService.getRegisterAuth(username, password);
			dispatch({ type: types.LOGIN_AUTH_FETCHED, auth });
		} catch (error) {
			console.error(error);
		}
	};
}

export function fetchLoginStateFormat() {
	return async (dispatch) => {
		try {
			const auth = '';
			dispatch({ type: types.LOGINSTATE_FORMAT_FETCHED, auth });
		} catch (error) {
			console.error(error);
		}
	};
}

export function fetchResetPwd(email) {
	return async (dispatch) => {
		try {
			const auth = await AuthService.getResetPwd(email);
			dispatch({ type: types.RESET_PWD_FETCHED, auth });
		} catch (error) {
			console.error(error);
		}
	};
}

export function fetchResetPwdFormat() {
	return async (dispatch) => {
		try {
			const auth = '';
			dispatch({ type: types.RESETPWD_FORMAT_FETCHED, auth });
		} catch (error) {
			console.error(error);
		}
	};
}
export function fetchSendPwd(requestId) {
	return async (dispatch) => {
		try {
			const auth = await AuthService.getSendPwd(requestId);
			dispatch({ type: types.SEND_PWD_FETCHED, auth });
		} catch (error) {
			console.error(error);
		}
	};
}

export function fetchSendPwdFormat() {
	return async (dispatch) => {
		try {
			const auth = '';
			dispatch({ type: types.SENDPWD_FORMAT_FETCHED, auth });
		} catch (error) {
			console.error(error);
		}
	};
}

export function fetchToken(token) {
	return async (dispatch) => {
		try {
			const auth = token;
			dispatch({ type: types.TOKEN_FETCHED, auth });
		} catch (error) {
			console.error(error);
		}
	};
}
