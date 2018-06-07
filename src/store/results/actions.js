import * as types from "./actionTypes";
import ResultService from "../../services/results";

async function fetchResultCategoryInfo(
  eventId,
  categoryId,
  showNbWinners,
  extraFieldPositions,
  language
) {
  try {
    const fetchPromises = [
      ResultService.getHeader(eventId, categoryId, language),
      ResultService.getWinners(eventId, categoryId, showNbWinners, language),
      ResultService.getResultDetail(
        eventId,
        categoryId,
        extraFieldPositions,
        language
      )
    ];

    const resultCategoryInfo = await Promise.all(fetchPromises);
    return resultCategoryInfo;
  } catch (error) {
    console.error(error);
  }
}

export function fetchResultCategories(eventId, language) {
  return async (dispatch, getState) => {
    try {
      const results = await ResultService.getResultCategories(
        eventId,
        language
      );

      let fetchPromises = [];
      for (let i = 0; i < results.length; i++) {
        fetchPromises.push(
          fetchResultCategoryInfo(
            results[i].EventID,
            results[i].ID,
            results[i].ShowNbWinners,
            results[i].ExtraFieldPositions,
            language
          )
        );
      }

      const resultCategoryInfos = await Promise.all(fetchPromises);

      let resultInfos = [];
      for (let i = 0; i < results.length; i++) {
        const resultInfo = {
          ...results[i],
          Header: resultCategoryInfos[i][0],
          Winners: resultCategoryInfos[i][1],
          Details: resultCategoryInfos[i][2]
        };

        resultInfos.push(resultInfo);
      }

      dispatch({ type: types.RESULTS_FETCHED, resultInfos });
    } catch (error) {
      console.error(error);
    }
  };
}
