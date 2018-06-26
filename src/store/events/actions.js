import * as types from "./actionTypes";
import EventService from "../../services/events";

export function fetchUpcomingEvents(language) {
  return async (dispatch, getState) => {
    try {
      let loading = true;
      dispatch({ type: types.UPCOMING_EVENTS_LOADING, loading });
      const id = getState().events.get("id");
      const maxNumber = getState().events.get("maxNumber");
      const events = await EventService.getUpcomingEvents(
        id,
        maxNumber,
        language
      );
      if (events !== false) {
        dispatch({ type: types.UPCOMING_EVENTS_FETCHED, events });
      }
      loading = false;
      dispatch({ type: types.UPCOMING_EVENTS_LOADING, loading });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchLiveEvents(language) {
  return async (dispatch, getState) => {
    try {
      const id = getState().events.get("id");
      const maxNumber = getState().events.get("maxNumber");
      const events = await EventService.getLiveEvents(id, maxNumber, language);
      dispatch({ type: types.LIVE_EVENTS_FETCHED, events });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchResultEvents(language) {
  return async (dispatch, getState) => {
    try {
      let loading = true;
      dispatch({ type: types.RESULT_EVENTS_LOADING, loading });
      const id = getState().events.get("id");
      const maxNumber = getState().events.get("maxNumber");
      const events = await EventService.getResultEvents(
        id,
        maxNumber,
        language
      );
      if (events !== false) {
        dispatch({ type: types.RESULT_EVENTS_FETCHED, events });
      }
      loading = false;
      dispatch({ type: types.RESULT_EVENTS_LOADING, loading });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchMySelectedEvents(language) {
  return async (dispatch, getState) => {
    try {
      let loading = true;
      dispatch({ type: types.MYSELECTED_EVENTS_LOADING, loading });
      const id = getState().events.get("id");
      const maxNumber = getState().events.get("maxNumber");
      const events = await EventService.getMySelectedEvents(
        id,
        maxNumber,
        language
      );
      if (events !== false) {
        dispatch({ type: types.MYSELECTED_EVENTS_FETCHED, events });
      }
      loading = false;
      dispatch({ type: types.MYSELECTED_EVENTS_LOADING, loading });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchFriendEvents(language) {
  return async (dispatch, getState) => {
    try {
      let loading = true;
      dispatch({ type: types.FRIEND_EVENTS_LOADING, loading });
      const id = getState().events.get("id");
      const maxNumber = getState().events.get("maxNumber");
      const events = await EventService.getFriendEvents(
        id,
        maxNumber,
        language
      );
      if (events !== false) {
        dispatch({ type: types.FRIEND_EVENTS_FETCHED, events });
      }
      loading = false;
      dispatch({ type: types.FRIEND_EVENTS_LOADING, loading });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchRegisteredEvents(language) {
  return async (dispatch, getState) => {
    try {
      let loading = true;
      dispatch({ type: types.REGISTERED_EVENTS_LOADING, loading });
      const id = getState().events.get("id");
      const maxNumber = getState().events.get("maxNumber");
      const events = await EventService.getRegisteredEvents(
        id,
        maxNumber,
        language
      );
      if (events !== false) {
        dispatch({ type: types.REGISTERED_EVENTS_FETCHED, events });
      }
      loading = false;
      dispatch({ type: types.REGISTERED_EVENTS_LOADING, loading });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchFavoriteEvents(language) {
  return async (dispatch, getState) => {
    try {
      let loading = true;
      dispatch({ type: types.FAVORITE_EVENTS_LOADING, loading });
      const id = getState().events.get("id");
      const maxNumber = getState().events.get("maxNumber");
      const events = await EventService.getFavoriteEvents(
        id,
        maxNumber,
        language
      );
      if (events !== false) {
        dispatch({ type: types.FAVORITE_EVENTS_FETCHED, events });
      }
      loading = false;
      dispatch({ type: types.FAVORITE_EVENTS_LOADING, loading });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchMyResultsEvents(language) {
  return async (dispatch, getState) => {
    try {
      let loading = true;
      dispatch({ type: types.MYRESULTS_EVENTS_LOADING, loading });
      const id = getState().events.get("id");
      // const maxNumber = getState().events.get('maxNumber');
      const maxNumber = 3;
      const events = await EventService.getMyResultsEvents(
        id,
        maxNumber,
        language
      );
      if (events !== false) {
        dispatch({ type: types.MYRESULTS_EVENTS_FETCHED, events });
      }
      loading = false;
      dispatch({ type: types.MYRESULTS_EVENTS_LOADING, loading });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchEventDetail(eventid, language) {
  return async (dispatch, getState) => {
    try {
      let loading = true;
      dispatch({ type: types.SIMILAR_EVENTS_LOADING, loading });

      let events = await EventService.getEventDetail(eventid, language);
      dispatch({ type: types.EVENT_DETAIL_FETCHED, events });

      const id = getState().events.get("id");
      // const maxNumber = getState().events.get('maxNumber');
      const maxNumber = 3;
      events = await EventService.getSimilarEvents(
        id,
        events.Type,
        maxNumber,
        language
      );
      if (events !== false) {
        dispatch({ type: types.SIMILAR_EVENTS_FETCHED, events });
      }

      loading = false;
      dispatch({ type: types.SIMILAR_EVENTS_LOADING, loading });
    } catch (error) {
      const loading = false;
      dispatch({ type: types.SIMILAR_EVENTS_LOADING, loading });
      console.error(error);
    }
  };
}
