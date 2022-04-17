import type { LocationInfo, RawLocation } from '@domains/location';
import wretch from 'wretch';

export function geocodingAdapter() {
	const token = import.meta.env.VITE_MAPBOX_KEY;
	return {
		getCoordinatesAddress(coordinates: GeolocationCoordinates): Promise<RawLocation> {
			return wretch(
				`https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates.longitude},${coordinates.latitude}.json?limit=1&types=address&access_token=${token}`
			)
				.get()
				.json() as Promise<RawLocation>;
		},
		convertRawToLocation(location: RawLocation): LocationInfo {
			const data: LocationInfo = {
				address: { country: '', place: '' },
				location: { latitude: 0, longitude: 0 }
			};

			location.features[0].context.forEach((place) => {
				if (place.id.includes('place')) {
					return (data.address.place = place.text);
				}

				if (place.id.includes('country')) {
					return (data.address.country = place.text);
				}
			});

			data.location.longitude = location.query[0];
			data.location.latitude = location.query[1];

			return data;
		}
	};
}
