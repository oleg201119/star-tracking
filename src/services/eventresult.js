import API_ENDPOINT from "./serviceEndpoint";
import ServiceSecurity from "./serviceSecurity";

export default class EventresultService {
  static async getMenuResult(eventID, language) {
    const url = `${API_ENDPOINT}/App/Results/MenuResultCategories/${eventID}?language=${language}`;

    const data = await ServiceSecurity.GetFetch({
      url: url,
      errortype: false
    });
    return data;
  }

  static async getWinnerResult(eventID, language) {
    const url = `${API_ENDPOINT}/App/Results/WinnerResultCategories/${eventID}?language=${language}`;

    const data = await ServiceSecurity.GetFetch({
      url: url,
      errortype: false
    });
    return data;
  }

  static async getHeaderResult(eventID, categoryID, language) {
    const url = `${API_ENDPOINT}/App/Results/GetHeader?eventID=${eventID}&categoryID=${categoryID}&language=${language}`;

    const data = await ServiceSecurity.GetFetch({
      url: url,
      errortype: false
    });
    return data;
  }

  static async getBodyResult(
    eventID,
    categoryID,
    page,
    numberofResults,
    sortColumn,
    sortDirection,
    language,
    filter
  ) {
    let url = `${API_ENDPOINT}/App/Results/Results?eventID=${eventID}&categoryID=${categoryID}&page=${page}&numberofResults=${numberofResults}&sortColumn=${sortColumn}&sortDirection=${sortDirection}&language=${language}`;
    if (filter !== undefined) {
      url = `${url}&filter=${filter}`;
    }
    const data = await ServiceSecurity.GetFetch({
      url: url,
      errortype: false
    });
    return data;
  }
}
