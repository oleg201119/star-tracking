const EVENT_API_ENDPOINT = 'https://www.star-tracking.be/App/Events';

export default class EventService {
  static async getUpcomingEvents(id, maxNumber, language) {
    const url = `${EVENT_API_ENDPOINT}/UpcomingEvents/${id}?maxNumber=${maxNumber}&language=${language}`;
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
    const url = `${EVENT_API_ENDPOINT}/LiveEvents/${id}?maxNumber=${maxNumber}&language=${language}`;
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
    const url = `${EVENT_API_ENDPOINT}/ResultEvents/${id}?maxNumber=${maxNumber}&language=${language}`;
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
    const url = `${EVENT_API_ENDPOINT}/UpcomingEvents/${id}?maxNumber=${maxNumber}&language=${language}`;
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
    const url = `${EVENT_API_ENDPOINT}/UpcomingEvents/${id}?maxNumber=${maxNumber}&language=${language}`;
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
}


