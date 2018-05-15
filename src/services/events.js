import API_ENDPOINT from './serviceEndpoint';

export default class EventService {
  static async getUpcomingEvents(id, maxNumber, language) {
    const url = `${API_ENDPOINT}/App/Events/UpcomingEvents/${id}?maxNumber=${maxNumber}&language=${language}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`EventService getUpcomingEvents failed, HTTP status ${response.status}`);
    }

    const data = await response.json();
    return data;
  }

  static async getLiveEvents(id, maxNumber, language) {
    const url = `${API_ENDPOINT}/App/Events/LiveEvents/${id}?maxNumber=${maxNumber}&language=${language}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`EventService getLiveEvents failed, HTTP status ${response.status}`);
    }

    const data = await response.json();
    return data;
  }

  static async getResultEvents(id, maxNumber, language) {
    const url = `${API_ENDPOINT}/App/Events/ResultEvents/${id}?maxNumber=${maxNumber}&language=${language}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`EventService getResultEvents failed, HTTP status ${response.status}`);
    }

    const data = await response.json();
    return data;
  }

  static async getPersonEvents(id, maxNumber, language) {
    const url = `${API_ENDPOINT}/App/Events/UpcomingEvents/${id}?maxNumber=${maxNumber}&language=${language}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`EventService getUpcomingEvents failed, HTTP status ${response.status}`);
    }

    const data = await response.json();
    return data;
  }

  static async getFriendEvents(id, maxNumber, language) {
    const url = `${API_ENDPOINT}/App/Events/UpcomingEvents/${id}?maxNumber=${maxNumber}&language=${language}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`EventService getFriendEvents failed, HTTP status ${response.status}`);
    }

    const data = await response.json();
    return data;
  }

  static async getSimilarEvents(id, maxNumber, language) {
    const url = `${API_ENDPOINT}/App/Events/UpcomingEvents/${id}?maxNumber=${maxNumber}&language=${language}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`EventService getSimilarEvents failed, HTTP status ${response.status}`);
    }

    const data = await response.json();
    return data;
  }

  static async getEventDetail(id, language) {
    const url = `${API_ENDPOINT}/App/Events/EventDetail/${id}?language=${language}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`EventService getSimilarEvents failed, HTTP status ${response.status}`);
    }

    const data = await response.json();
    return data;
  }
}
