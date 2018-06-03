const baseUrl = 'https://star-tracking-svc.azurewebsites.net';
const accessTokenKey = 'token';
const clientId = 'StarTrackingWeb';
const clientSecret = 'j324flsuimlKFK{[[KXKBC?FD+kjhJIç!';

export default class ServiceSecurity {
  static async isUserAuthenticated() {
    // check if an access token is present
    const accessToken = sessionStorage.getItem(accessTokenKey);
    if (accessToken) return true;

    // check if a refresh token is present
    const refreshToken = localStorage.StarTrackingRefreshToken;
    if (!refreshToken) return false;

    // set client and user identification
    const authorizationBasic = window.btoa(clientId + ':' + clientSecret);
    const loginData = {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    };

    const response = await fetch(`${baseUrl}/Token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        'Authorization': 'Basic ' + authorizationBasic,
      },
      body: loginData,
    });
    console.log(response);
    if (!response.ok) {
      return false;
    }

    // this means the api call suceeded, so cache the access token in session storage.
    sessionStorage.setItem(accessTokenKey, response.access_token);

    // also store refresh token
    localStorage.StarTrackingRefreshToken = response.refresh_token;

    // resolve
    return true;
  }

  static async login(args) {
    // set client identification
    const authorizationBasic = window.btoa(clientId + ':' + clientSecret);

    // set user identification
    const bodydata = `${encodeURIComponent('grant_type')}=${encodeURIComponent('password')}&${encodeURIComponent('username')}=${encodeURIComponent(args.login)}&${encodeURIComponent('password')}=${encodeURIComponent(args.password)}`;

    const response = await fetch(`${baseUrl}/Token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        'Authorization': 'Basic ' + authorizationBasic,
      },
      body: bodydata,
    });

    if (!response.ok) {
      return 'error';
    }

    const data = await response.json();
    // Cache the access token in session storage.
    window.sessionStorage.setItem(accessTokenKey, data.access_token);

    // store refresh token
    localStorage.StarTrackingRefreshToken = data.refresh_token;

    return data.access_token;
  }

  static async logout() {
    // Log out from the cookie based logon.
    const token = sessionStorage.getItem(accessTokenKey);
    let headers = {};
    if (token) {
      headers.Authorization = 'Bearer ' + token;
    }

    const response = await fetch(`${baseUrl}/App/Account/Logout`, {
      method: 'POST',
      headers: headers,
    });

    if (!response.ok) {
      return 'error';
    }

    // clear the access token from the session storage.
    sessionStorage.removeItem(accessTokenKey);

    // remove the refresh token
    localStorage.StarTrackingRefreshToken = '';
    return 'success';
  }

  static async GetFetch(args) {
    const token = sessionStorage.getItem(accessTokenKey);
    let headers = { Accept: 'application/json' };
    if (token) {
      headers.Authorization = 'Bearer ' + token;
    }

    const response = await fetch(args.url, {
      method: 'GET',
      headers: headers,
    });

    if (!response.ok) {
      if (args.errortype) return false;
      throw new Error(`Service fetch failed, HTTP status ${response.status}`);
    }

    const data = await response.json();
    return data;
  }

  static async PostFetch(args) {
    const token = sessionStorage.getItem(accessTokenKey);
    let headers = { Accept: 'application/json', 'Content-Type': 'application/json' };
    if (token) {
      headers.Authorization = 'Bearer ' + token;
    }

    const response = await fetch(args.url, {
      method: 'POST',
      headers: headers,
      body: args.bodydata,
    });

    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data;
  }
}
