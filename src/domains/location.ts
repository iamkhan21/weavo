export type LocationInfo = {
	address: {
		country: string;
		place: string;
	};
	location: {
		latitude: number;
		longitude: number;
	};
};

export type RawLocation = {
	query: number[];
	features: {
		context: { id: string; text: string }[];
	}[];
};

export function getCityAndCountry(location: LocationInfo) {
	if (!location) return null;
	return `${location.address.place}, ${location.address.country}`;
}

export function isGeolocationEqualSaved(geo: GeolocationCoordinates, loc: LocationInfo): boolean {
	const isLatEqual = geo.latitude.toFixed() === loc.location.latitude.toFixed();
	const isLongEqual = geo.longitude.toFixed() === loc.location.longitude.toFixed();
	return isLatEqual && isLongEqual;
}
