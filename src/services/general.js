const EVENT_API_ENDPOINT = 'https://www.star-tracking.be/App/General';

export default class GeneralService {
  static async getRequestContact(id,name,email,organization,phone,event,message) {
    const url = `${EVENT_API_ENDPOINT}/RequestContact/${id}?eventName=${event}&name=${name}&organization=${organization}&email=${email}&phone=${phone}&message=${message}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      // throw new Error(`GeneralService getRequestContact failed, HTTP status ${response.status}`);
      return false;
    }
    const data = await response.json();
    return data;
  }

  static async getRequestEvent(id,name,email,organization,type,city,extraInfo,date) {
    const url = `${EVENT_API_ENDPOINT}/RequestNewEvent/${id}?name=${name}&organization=${organization}&email=${email}&city=${city}&date=${date}&type=${type}&extraInfo=${extraInfo}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      // throw new Error(`GeneralService getRequestContact failed, HTTP status ${response.status}`);
      return false;
    }
    const data = await response.json();
    return data;
  }
}


