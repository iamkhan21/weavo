import wretch from 'wretch';
import { setWeather, setWeatherLoading } from '@stores/weather';
import { setLocation } from '@stores/location';
import type { LocationInfo } from '@domain/location';
import type { Weather } from '@domain/weather';

export async function loadWeatherData() {
	// navigator.geolocation.getCurrentPosition()
	// Intl.DateTimeFormat().resolvedOptions().timeZone

	setWeatherLoading(true);

	const [weather, position] = await Promise.allSettled([
		wretch('/weather')
			.get()
			.json((res) => res.current_weather),
		wretch('/location').get().json()
	]);

	if (weather.status === 'fulfilled') {
		console.log(weather.value);
		setWeather(weather.value as Weather);
	}

	if (position.status === 'fulfilled') {
		setLocation(position.value as LocationInfo);
	}

	setWeatherLoading(false);
}
