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
				`https://api.open-meteo.com/v1/forecast?current_weather=true&hourly=apparent_temperature&${params.toString()}`
			)
				.get()
				.json() as Promise<RawWeather>;
		},
		convertRawToWeather(weather: RawWeather): Weather {
			const data: Weather = { ...weather.current_weather, apparent_temperature: 0 };

			const times = weather.hourly.time;
			const now = weather.current_weather.time;

			for (let i = 0, len = times.length; i < len; i++) {
				if (now === times[i]) {
					data.apparent_temperature = weather.hourly.apparent_temperature[i];
					break;
				}
			}

			return data;
		}
	};
}
