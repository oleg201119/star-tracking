import * as types from "./actionTypes";
import EventresultService from "../../services/eventresult";

export function fetchMenuResult(eventID, language) {
  return async dispatch => {
    try {
      const resultInfos = [];
      dispatch({ type: types.WINNER_RESULT_FETCHED, resultInfos });
      const eventresult = await EventresultService.getMenuResult(
        eventID,
        language
      );
      dispatch({ type: types.MENU_RESULT_FETCHED, eventresult });
      if (eventresult[0].ID === 0 && eventresult[0].ChildCategories === null) {
        const results = await EventresultService.getWinnerResult(
          eventID,
          language
        );

        const fetchPromises = [];
        for (let i = 0; i < results.length; i += 1) {
          fetchPromises.push(
            fetchWinnerInfo(
              results[i].EventID,
              results[i].ID,
              results[i].ShowNbWinners,
              language
            )
          );
        }

        const resultWinnerInfos = await Promise.all(fetchPromises);

        for (let i = 0; i < results.length; i += 1) {
          const resultInfo = {
            ...results[i],
            Header: resultWinnerInfos[i][0],
            Winners: resultWinnerInfos[i][1]
          };

          resultInfos.push(resultInfo);
        }
        dispatch({ type: types.WINNER_RESULT_FETCHED, resultInfos });
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export async function fetchWinnerInfo(
  eventId,
  categoryId,
  showNbWinners,
  language
) {
  try {
    const fetchPromises = [
      EventresultService.getHeaderResult(eventId, categoryId, language),
      EventresultService.getBodyResult(
        eventId,
        categoryId,
        0,
        showNbWinners,
        -1,
        "ASC",
        language
      )
    ];

    const resultWinnerInfo = await Promise.all(fetchPromises);
    return resultWinnerInfo;
  } catch (error) {
    throw error;
  }
}
