import * as types from './actionTypes';
import RegisterService from '../../services/register';

export function fetchRegister1(FirstName, LastName, DateofBirth, Gender, Language) {
	return async (dispatch) => {
		try {
			const register = await RegisterService.getRegister1(FirstName, LastName, DateofBirth, Gender, Language);
			dispatch({ type: types.REGISTER_STEP1_FETCHED, register });
		} catch (error) {
			console.error(error);
		}
	};
}

export function formatRegister1() {
	return async (dispatch) => {
		try {
			const register = '';
			dispatch({ type: types.REGISTER_STEP1_FORMAT, register });
		} catch (error) {
			console.error(error);
		}
	};
}

export function fetchRegister2(Street, StreetNumber, Zipcode, City, Country) {
	return async (dispatch) => {
		try {
			const register = await RegisterService.getRegister2(Street, StreetNumber, Zipcode, City, Country);
			dispatch({ type: types.REGISTER_STEP2_FETCHED, register });
		} catch (error) {
			console.error(error);
		}
	};
}

export function formatRegister2() {
	return async (dispatch) => {
		try {
			const register = '';
			dispatch({ type: types.REGISTER_STEP2_FORMAT, register });
		} catch (error) {
			console.error(error);
		}
	};
}

export function fetchRegister3(MobilePhone, FixPhone, FriendPhone) {
	return async (dispatch) => {
		try {
			const register = await RegisterService.getRegister2(MobilePhone, FixPhone, FriendPhone);
			dispatch({ type: types.REGISTER_STEP3_FETCHED, register });
		} catch (error) {
			console.error(error);
		}
	};
}

export function formatRegister3() {
	return async (dispatch) => {
		try {
			const register = '';
			dispatch({ type: types.REGISTER_STEP3_FORMAT, register });
		} catch (error) {
			console.error(error);
		}
	};
}

export function fetchRegister4(PreferredEventTypes, LocationPreference, RangeInKm) {
	return async (dispatch) => {
		try {
			const register = await RegisterService.getRegister2(PreferredEventTypes, LocationPreference, RangeInKm);
			dispatch({ type: types.REGISTER_STEP4_FETCHED, register });
		} catch (error) {
			console.error(error);
		}
	};
}

export function formatRegister4() {
	return async (dispatch) => {
		try {
			const register = '';
			dispatch({ type: types.REGISTER_STEP4_FORMAT, register });
		} catch (error) {
			console.error(error);
		}
	};
}

export function fetchRegister(
	FirstName,
	LastName,
	DateofBirth,
	Gender,
	Language,
	Street,
	StreetNumber,
	Zipcode,
	City,
	Country,
	MobilePhone,
	FixPhone
) {
	return async (dispatch) => {
		try {
			const register = await RegisterService.getRegister(
				FirstName,
				LastName,
				DateofBirth,
				Gender,
				Language,
				Street,
				StreetNumber,
				Zipcode,
				City,
				Country,
				MobilePhone,
				FixPhone
			);
			dispatch({ type: types.REGISTER_PROFILE_FETCHED, register });
		} catch (error) {
			console.error(error);
		}
	};
}

export function formatRegister() {
	return async (dispatch) => {
		try {
			const register = '';
			dispatch({ type: types.REGISTER_PROFILE_FORMAT, register });
		} catch (error) {
			console.error(error);
		}
	};
}

export function fetchGetProfile() {
	return async (dispatch) => {
		try {
			const register = await RegisterService.getProfile();
			dispatch({ type: types.GET_PROFILE_FETCHED, register });
		} catch (error) {
			console.error(error);
		}
	};
}
