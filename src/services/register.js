import API_ENDPOINT from './serviceEndpoint';
import ServiceSecurity from './serviceSecurity';

export default class RegisterService {
	static async getRegister1(FirstName, LastName, DateofBirth, Gender, Language) {
		const bodydata = {
			FirstName: FirstName,
			LastName: LastName,
			DateofBirth: DateofBirth,
			Gender: Gender,
			Language: Language
		};

		const url = `${API_ENDPOINT}/App/Register/Step3`;
		const data = await ServiceSecurity.PostFetch({
			url: url,
			bodydata: JSON.stringify(bodydata)
		});

		return data;
	}

	static async getRegister2(Street, StreetNumber, Zipcode, City, Country) {
		const bodydata = {
			Street: Street,
			Number: StreetNumber,
			Zipcode: Zipcode,
			City: City,
			Country: Country
		};

		const url = `${API_ENDPOINT}/App/Register/Step4`;
		const data = await ServiceSecurity.PostFetch({
			url: url,
			bodydata: JSON.stringify(bodydata)
		});

		return data;
	}

	static async getRegister3(MobilePhone, FixPhone, FriendPhone) {
		const bodydata = {
			MobilePhone: MobilePhone,
			FixPhone: FixPhone,
			FriendPhone: FriendPhone
		};

		const url = `${API_ENDPOINT}/App/Register/Step5`;
		const data = await ServiceSecurity.PostFetch({
			url: url,
			bodydata: JSON.stringify(bodydata)
		});

		return data;
	}

	static async getRegister4(PreferredEventTypes, LocationPreference, RangeInKm) {
		const bodydata = {
			PreferredEventTypes: PreferredEventTypes,
			LocationPreference: LocationPreference,
			RangeInKm: RangeInKm
		};
		console.log(bodydata);
		const url = `${API_ENDPOINT}/App/Register/Step6`;
		const data = await ServiceSecurity.PostFetch({
			url: url,
			bodydata: JSON.stringify(bodydata)
		});

		return data;
	}

	static async getRegister(
		FirstName,
		LastName,
		DateofBirth,
		Gender,
		Language,
		Street,
		StreetNumber,
		Zipcode,
		City,
		Country,
		MobilePhone,
		FixPhone
	) {
		const bodydata = {
			FirstName: FirstName,
			LastName: LastName,
			DateofBirth: DateofBirth,
			Gender: Gender,
			Language: Language,
			Street: Street,
			Number: StreetNumber,
			Zipcode: Zipcode,
			City: City,
			Country: Country,
			MobilePhone: MobilePhone,
			FixPhone: FixPhone
		};

		const url = `${API_ENDPOINT}/App/Register/SaveProfile`;
		const data = await ServiceSecurity.PostFetch({
			url: url,
			bodydata: JSON.stringify(bodydata)
		});

		return data;
	}

	static async getProfile() {
		const url = `${API_ENDPOINT}/App/Register/Profile`;
		const data = await ServiceSecurity.GetFetch({
			url: url,
			errortype: true
		});
		return data;
	}

	static async savePicture(ContentLength, FileName, InputStream, file) {
		const url = `${API_ENDPOINT}/App/Register/Picture`;
		const data = await ServiceSecurity.SavePicture({
			url: url,
			ContentLength: ContentLength,
			FileName: FileName,
			InputStream: InputStream,
			File: file
		});
		console.log(data);
		return data;
	}
}
