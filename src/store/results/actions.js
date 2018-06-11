import * as types from './actionTypes';
import ResultService from '../../services/results';

export async function fetchWinnerInfo(eventId, categoryId, showNbWinners, language) {
  try {
    const fetchPromises = [
      ResultService.getHeader(eventId, categoryId, language),
      ResultService.getWinners(eventId, categoryId, showNbWinners, language),
    ];

    const resultWinnerInfo = await Promise.all(fetchPromises);
    return resultWinnerInfo;
  } catch (error) {
    throw error;
  }
}

export function fetchResultCategories(eventId, language) {
  return async (dispatch) => {
    try {
      const results = await ResultService.getResultCategories(eventId, language);

      const fetchPromises = [];
      for (let i = 0; i < results.length; i += 1) {
        fetchPromises.push(fetchWinnerInfo(results[i].EventID, results[i].ID, results[i].ShowNbWinners, language));
      }

      const resultWinnerInfos = await Promise.all(fetchPromises);

      const resultInfos = [];
      for (let i = 0; i < results.length; i += 1) {
        const resultInfo = {
          ...results[i],
          Header: resultWinnerInfos[i][0],
          Winners: resultWinnerInfos[i][1],
        };

        resultInfos.push(resultInfo);
      }

      dispatch({ type: types.RESULTS_FETCHED, resultInfos });
    } catch (error) {
      dispatch({ type: types.RESULTS_FAILED });
    }
  };
}
