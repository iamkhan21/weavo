import wretch from 'wretch';
import type { RawWeather, Weather } from '@domains/weather';

export function weatherAdapter() {
	return {
		getCurrentWeather(coordinates: GeolocationCoordinates, timezone: string): Promise<RawWeather> {
			const params = new URLSearchParams({
				longitude: coordinates.longitude.toString(),
				latitude: coordinates.latitude.toString(),
				timezone
			});

			return wretch(
				`https://api.open-meteo.com/v1/forecast?current_weather=true&windspeed_unit=ms&${params.toString()}`
			)
				.get()
				.json() as Promise<RawWeather>;
		},
		convertRawToWeather(weather: RawWeather): Weather {
			return weather.current_weather;
		}
	};
}
