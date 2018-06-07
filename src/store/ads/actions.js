import * as types from "./actionTypes";
import AdService from "../../services/ads";

export function fetchAds(eventId, language) {
  return async (dispatch, getState) => {
    try {
      const ads = await AdService.getAds(eventId, language);
      dispatch({ type: types.ADS_FETCHED, ads });
    } catch (error) {
      console.error(error);
    }
  };
}
