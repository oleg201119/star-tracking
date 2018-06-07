import API_ENDPOINTS from "./lcdEndpoint";

export default class ResultService {
  static async getResultCategories(eventId, language) {
    const url = `${
      API_ENDPOINTS.GET_RESULT_CATEGORIES
    }/${eventId}?language=${language}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      const data = [];
      return data;
    }

    const data = await response.json();
    return data;
  }

  static async getHeader(eventId, categoryId, language) {
    const url = `${
      API_ENDPOINTS.GET_HEADER
    }/?eventID=${eventId}&categoryID=${categoryId}&language=${language}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      const data = [];
      return data;
    }

    const data = await response.json();
    return data;
  }

  static async getWinners(eventId, categoryId, showNbWinners, language) {
    const url = `${
      API_ENDPOINTS.GET_WINNERS
    }/?eventID=${eventId}&categoryID=${categoryId}&showNbWinners=${showNbWinners}&language=${language}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      const data = [];
      return data;
    }

    const data = await response.json();
    return data;
  }

  static async getResultDetail(
    eventId,
    categoryId,
    extraFieldPositions,
    language
  ) {
    let positions = "";
    for (let i = 0; i < extraFieldPositions.length; i++) {
      positions = positions + "extraFieldPositions=" + extraFieldPositions[i];
      if (i !== extraFieldPositions.length - 1) {
        positions = positions + "&";
      }
    }
    const url = `${
      API_ENDPOINTS.GET_RESULT_DETAIL
    }/?eventID=${eventId}&categoryID=${categoryId}&${positions}&language=${language}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      const data = {};
      return data;
    }

    const data = await response.json();
    return data;
  }
}
