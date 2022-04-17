export function locationAdapter() {
	return {
		getCurrentPosition: (): Promise<GeolocationCoordinates> => {
			return new Promise((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						resolve(position.coords);
					},
					(error) => {
						reject(error);
					},
					{
						enableHighAccuracy: false,
						timeout: 15_000
					}
				);
			});
		}
	};
}
