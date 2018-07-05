import API_ENDPOINT from './serviceEndpoint';
import ServiceSecurity from './serviceSecurity';

export default class EventresultService {
	static async getMenuResult(eventID, language) {
		const url = `${API_ENDPOINT}/App/Challenge/MenuCategories/${eventID}?language=${language}`;

		const data = await ServiceSecurity.GetFetch({
			url: url,
			errortype: false
		});
		return data;
	}

	static async getWinnerResult(eventID, language) {
		const url = `${API_ENDPOINT}/App/Challenge/WinnerResultCategories/${eventID}?language=${language}`;

		const data = await ServiceSecurity.GetFetch({
			url: url,
			errortype: false
		});
		return data;
	}

	static async getHeaderResult(eventID, categoryID, language) {
		const url = `${API_ENDPOINT}/App/Challenge/GetHeader/${eventID}?language=${language}`;

		const data = await ServiceSecurity.GetFetch({
			url: url,
			errortype: false
		});
		return data;
	}

	static async getChallengeDetail(id, language) {
		const url = `${API_ENDPOINT}/App/Challenge/Detail/${id}?language=${language}`;
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
		let url = `${API_ENDPOINT}/App/Challenge/Results?challengeID=${eventID}&categoryID=${categoryID}&page=${page}&numberofResults=${numberofResults}&sortColumn=${sortColumn}&sortDirection=${sortDirection}&language=${language}`;
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
