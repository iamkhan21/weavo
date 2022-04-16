export type LocationInfo = {
	address: {
		country: string;
		line_one: string;
		city: string;
		postcode: string;
	};
	location: {
		latitude: number;
		longitude: number;
	};
};

export function getCityAndCountry(location: LocationInfo) {
	if (!location) return null;
	return `${location.address.city}, ${location.address.country}`;
}
