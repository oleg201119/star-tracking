import API_ENDPOINT from './serviceEndpoint';
import ServiceSecurity from './serviceSecurity';

export default class EventService {
  static async getUpcomingEvents(id, maxNumber, language) {
    const url = `${API_ENDPOINT}/App/Events/UpcomingEvents/${id}?maxNumber=${maxNumber}&language=${language}`;

    const data = await ServiceSecurity.GetFetch({
      url: url,
      errortype: false,
    });
    return data;
  }

  static async getLiveEvents(id, maxNumber, language) {
    const url = `${API_ENDPOINT}/App/Events/LiveEvents/${id}?maxNumber=${maxNumber}&language=${language}`;
    const data = await ServiceSecurity.GetFetch({
      url: url,
      errortype: false,
    });
    return data;
  }

  static async getResultEvents(id, maxNumber, language) {
    const url = `${API_ENDPOINT}/App/Events/ResultEvents/${id}?maxNumber=${maxNumber}&language=${language}`;
    const data = await ServiceSecurity.GetFetch({
      url: url,
      errortype: false,
    });
    return data;
  }

  static async getPersonEvents(id, maxNumber, language) {
    const url = `${API_ENDPOINT}/App/Events/UpcomingEvents/${id}?maxNumber=${maxNumber}&language=${language}`;
    const data = await ServiceSecurity.GetFetch({
      url: url,
      errortype: false,
    });
    return data;
  }

  static async getFriendEvents(id, maxNumber, language) {
    const url = `${API_ENDPOINT}/App/Events/UpcomingEvents/${id}?maxNumber=${maxNumber}&language=${language}`;
    const data = await ServiceSecurity.GetFetch({
      url: url,
      errortype: false,
    });
    return data;
  }

  static async getSimilarEvents(id, maxNumber, language) {
    const url = `${API_ENDPOINT}/App/Events/UpcomingEvents/${id}?maxNumber=${maxNumber}&language=${language}`;
    const data = await ServiceSecurity.GetFetch({
      url: url,
      errortype: false,
    });
    return data;
  }

  static async getEventDetail(id, language) {
    const url = `${API_ENDPOINT}/App/Events/EventDetail/${id}?language=${language}`;
    const data = await ServiceSecurity.GetFetch({
      url: url,
      errortype: false,
    });
    return data;
  }
}
