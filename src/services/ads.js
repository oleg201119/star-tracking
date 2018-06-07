import API_ENDPOINTS from "./lcdEndpoint";

export default class AdService {
  static async getAds(id, language) {
    const url = `${API_ENDPOINTS.GET_ADS}/${id}?language=${language}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(
        `AdService getAds failed, HTTP status ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  }
}
