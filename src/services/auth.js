import API_ENDPOINT from './serviceEndpoint';
import ServiceSecurity from './serviceSecurity';

export default class AuthService {
  static async getLoginAuth(username, pwd) {
    const data = await ServiceSecurity.login({
      login: username,
      password: pwd,
    });
    return data;
  }

  static async getResetPwd(email) {
    const bodydata = {
      Email: email,
      TimerID: 0,
    };
    const url = `${API_ENDPOINT}/App/Account/ResetPassword`;
    const data = await ServiceSecurity.PostFetch({
      url: url,
      bodydata: JSON.stringify(bodydata),
    });
    return data;
  }

  static async getSendPwd(requestId) {
    const bodydata = {
      RequestId: requestId,
    };
    const url = `${API_ENDPOINT}/App/Account/SendPassword`;
    const data = await ServiceSecurity.PostFetch({
      url: url,
      bodydata: JSON.stringify(bodydata),
    });
    return data;
  }
}

