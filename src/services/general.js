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
      throw new Error(`GeneralService getRequestContact failed, HTTP status ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
}


