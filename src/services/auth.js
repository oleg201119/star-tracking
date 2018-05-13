import API_ENDPOINT from './serviceEndpoint';

export default class AuthService {
  static async getLoginAuth(username, password) {
    const bodydata = `${encodeURIComponent('grant_type')}=${encodeURIComponent('password')}&${encodeURIComponent('username')}=${encodeURIComponent(username)}&${encodeURIComponent('password')}=${encodeURIComponent(password)}`;
    const response = await fetch(`${API_ENDPOINT}/Token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      body: bodydata,
    });

    if (!response.ok) {
      // throw new Error(`AuthService getLoginAuth failed, HTTP status ${response.status}`);
      return 'error';
    }

    const data = await response.json();
    window.sessionStorage.setItem('token', data.access_token);
    return data.access_token;
  }

  static async getResetPwd(email) {
    const bodydata = {
      Email: email,
    };
    const response = await fetch(`${API_ENDPOINT}/App/Account/ResetPassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(bodydata),
    });

    if (!response.ok) {
      // throw new Error(`AuthService getResetPwd failed, HTTP status ${response.status}`);
      return false;
    }

    const data = await response.json();
    return data;
  }

  static async getSendPwd(requestId) {
    const bodydata = {
      RequestId: requestId,
    };
    const response = await fetch(`${API_ENDPOINT}/App/Account/SendPassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(bodydata),
    });

    if (!response.ok) {
      // throw new Error(`AuthService getSendPwd failed, HTTP status ${response.status}`);
      return false;
    }

    const data = await response.json();
    return data;
  }
}

