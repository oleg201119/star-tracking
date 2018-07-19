import API_ENDPOINT from './serviceEndpoint';
import ServiceSecurity from './serviceSecurity';

export default class AuthService {
	static async getLoginAuth(username, pwd) {
		const data = await ServiceSecurity.login({
			login: username,
			password: pwd
		});
		return data;
	}

	static async Logout() {
		const data = await ServiceSecurity.logout();
		return data;
	}

	static async getRegisterAuth(username, password, confirmpassword, language) {
		const bodydata = {
			username: username,
			email: username,
			password: password,
			confirmpassword: confirmpassword,
			language: language,
			timerid: 1
		};
		const url = `${API_ENDPOINT}/App/Account/Register`;
		const data = await ServiceSecurity.register({
			url: url,
			bodydata: bodydata
		});
		if (data === true) {
			return true;
		} else return data.Message;
	}

	static async getResetPwd(email) {
		const bodydata = {
			Email: email,
			TimerID: 0
		};
		const url = `${API_ENDPOINT}/App/Account/ResetPassword`;
		const data = await ServiceSecurity.PostFetch({
			url: url,
			bodydata: JSON.stringify(bodydata)
		});
		return data;
	}

	static async getSendPwd(requestId) {
		const bodydata = {
			RequestId: requestId
		};
		const url = `${API_ENDPOINT}/App/Account/SendPassword`;
		const data = await ServiceSecurity.PostFetch({
			url: url,
			bodydata: JSON.stringify(bodydata)
		});
		return data;
	}
}
