import API_ENDPOINTS from './lcdEndpoint';
import ServiceSecurity from './serviceSecurity';

export default class ResultService {
  static async getResultCategories(eventId, language) {
    const url = `${
      API_ENDPOINTS.GET_RESULT_CATEGORIES}/${eventId}?language=${language}`;
    const data = await ServiceSecurity.GetFetch({
      url: url,
      errortype: false,
    });
    return data;
  }

  static async getHeader(eventId, categoryId, language) {
    const url = `${
      API_ENDPOINTS.GET_HEADER}/?eventID=${eventId}&categoryID=${categoryId}&language=${language}`;
    const data = await ServiceSecurity.GetFetch({
      url: url,
      errortype: false,
    });
    return data;
  }

  static async getWinners(eventId, categoryId, showNbWinners, language) {
    const url = `${
      API_ENDPOINTS.GET_WINNERS}/?eventID=${eventId}&categoryID=${categoryId}&showNbWinners=${showNbWinners}&language=${language}`;
    const data = await ServiceSecurity.GetFetch({
      url: url,
      errortype: false,
    });
    return data;
  }
}
