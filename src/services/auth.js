const EVENT_API_ENDPOINT = 'https://www.star-tracking.be/Token';

export default class AuthService {
  static async getLoginAuth(username,password) {
    var bodydata = encodeURIComponent("grant_type") + '=' + encodeURIComponent("password") + "&" + encodeURIComponent("username") + '=' + encodeURIComponent(username) + "&"+ encodeURIComponent("password") + '=' + encodeURIComponent(password);
    
    const response = await fetch(EVENT_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json', 
      },
      body: bodydata
    });

    if (!response.ok) {
      throw new Error(`AuthService getLoginAuth failed, HTTP status ${response.status}`);
    }

    const data = await response.json();
    return data.access_token;
  }

  static async getResetPwd(email) {
    var bodydata = encodeURIComponent("email") + '=' + encodeURIComponent(email);
    
    const response = await fetch("https://www.star-tracking.be/App/Account/ResetPassword", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json', 
      },
      body: bodydata
    });

    if (!response.ok) {
      // throw new Error(`AuthService getResetPwd failed, HTTP status ${response.status}`);
      return false;
    }

    const data = await response.json();
    return data;
  }
}


