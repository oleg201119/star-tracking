import API_ENDPOINT from './serviceEndpoint';
import ServiceSecurity from './serviceSecurity';

export default class GeneralService {
  static async getRequestContact(id, name, email, organization, phone, event, message) {
    const url = `${API_ENDPOINT}/App/General/RequestContact/${id}?eventName=${event}&name=${name}&organization=${organization}&email=${email}&phone=${phone}&message=${message}`;
    const data = await ServiceSecurity.GetFetch({
      url: url,
      errortype: true,
    });
    return data;
  }

  static async getRequestEvent(id, name, email, organization, type, city, extraInfo, date) {
    const url = `${API_ENDPOINT}/App/General/RequestNewEvent/${id}?name=${name}&organization=${organization}&email=${email}&city=${city}&date=${date}&type=${type}&extraInfo=${extraInfo}`;
    const data = await ServiceSecurity.GetFetch({
      url: url,
      errortype: true,
    });
    return data;
  }
}
